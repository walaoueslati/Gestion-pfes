from django.contrib.auth.models import AbstractUser
from django.db import models
from django.forms import ValidationError

# ======== USER ========
class User(AbstractUser):
    CIN = models.CharField(max_length=20, unique=True)
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    dateNaissance = models.DateField(null=True, blank=True)
    

    def __str__(self):
        return f"{self.nom} {self.prenom}"

    def get_user_type(self):
        """
        Renvoie le type d'utilisateur général : Prof, Etudiant ou Admin
        """
        if hasattr(self, 'etudiant'):
            return 'Etudiant'
        elif hasattr(self, 'prof'):
            return 'Prof'
        elif hasattr(self, 'adminuser'):
            return 'Admin'
        return 'Inconnu'

# ======== PROF ========
class Prof(User):
    ROLE_CHOICES = [
        ('Encadrant', 'Encadrant'),
        ('Rapporteur', 'Rapporteur'),
        ('President', 'President'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)

    def __str__(self):
        return f"Prof: {self.nom} {self.prenom} ({self.role})"

    def get_prof_role(self):
        """
        Renvoie le rôle spécifique du prof : Encadrant, Rapporteur ou Président
        """
        return self.role

# ======== ETUDIANT ========
class Etudiant(User):
    numCartEtudiant = models.CharField(max_length=20, unique=True)
    niveauEtudes = models.IntegerField()

    def __str__(self):
        return f"Etudiant: {self.nom} {self.prenom}"

# ======== ADMIN ========
class AdminUser(User):  # Ne pas utiliser 'Admin' pour éviter conflit avec Django admin
    matAdmin = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return f"Admin: {self.nom} {self.prenom}"

class Disponibilite(models.Model):
    prof = models.ForeignKey(Prof, on_delete=models.CASCADE, related_name='disponibilites')
    date = models.DateField()
    seances = models.CharField(max_length=200)  # Ex: "S1,S2,S3"

    def clean(self):
        seances_list = self.seances.split(',')
        valid_seances = {'S1', 'S2', 'S3', 'S4', 'S5', 'S6'}
        for seance in seances_list:
            if seance.strip() not in valid_seances:
                raise ValidationError(f"{seance} n'est pas une séance valide (S1 à S6)")

    def __str__(self):
        return f"{self.prof} - {self.date} : {self.seances}"

# ======== SOUTENANCE ========
class Soutenance(models.Model):
    sujet = models.CharField(max_length=255)
    date = models.DateField()
    num_salle = models.CharField(max_length=20)
    seance = models.CharField(max_length=20)

    etudiant = models.ForeignKey(Etudiant, on_delete=models.CASCADE, related_name='soutenances')
    profs = models.ManyToManyField(Prof, related_name='soutenances')  # Encadrant, Rapporteur, Président

    def __str__(self):
        return f"Soutenance: {self.sujet} - {self.date} ({self.num_salle} - {self.seance})"
