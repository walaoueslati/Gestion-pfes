from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Prof, Etudiant, AdminUser, Disponibilite, Soutenance

# On étend UserAdmin pour ton modèle User personnalisé
class CustomUserAdmin(BaseUserAdmin):
    model = User
    list_display = ('username', 'email', 'nom', 'prenom', 'CIN','password', 'is_staff')
    fieldsets = BaseUserAdmin.fieldsets + (
        (None, {'fields': ('CIN', 'nom', 'prenom', 'dateNaissance')}),
    )

# === Pour les professeurs uniquement ===
class ProfAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'nom', 'prenom', 'role')
    list_filter = ('role',)
    search_fields = ('nom', 'prenom', 'email')

# === Pour les étudiants uniquement ===
class EtudiantAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'nom', 'prenom', 'numCartEtudiant', 'niveauEtudes')
    search_fields = ('nom', 'prenom', 'numCartEtudiant')

# === Pour les admins (AdminUser) uniquement ===
class AdminUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'nom', 'prenom', 'matAdmin')
    search_fields = ('nom', 'prenom', 'matAdmin')


admin.site.register(Prof)
admin.site.register(Etudiant)
admin.site.register(AdminUser)
admin.site.register(Disponibilite)
admin.site.register(Soutenance)
