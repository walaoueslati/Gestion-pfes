from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Prof, Etudiant, AdminUser, Disponibilite, Soutenance


# === Pour le modèle User personnalisé ===
class CustomUserAdmin(BaseUserAdmin):
    model = User
    list_display = ('username', 'email', 'nom', 'prenom', 'CIN', 'is_staff')
    ordering = ('email',)
    
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal Info', {'fields': ('nom', 'prenom', 'email', 'CIN', 'dateNaissance')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser',
                                   'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )


# === Pour les professeurs uniquement ===
class ProfAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'nom', 'prenom')
    search_fields = ('nom', 'prenom', 'email')
# === Pour les étudiants uniquement ===
class EtudiantAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'nom', 'prenom', 'numCartEtudiant', 'niveauEtudes')
    search_fields = ('nom', 'prenom', 'numCartEtudiant')


# === Pour les admins (AdminUser) uniquement ===
class AdminUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'nom', 'prenom', 'matAdmin')
    search_fields = ('nom', 'prenom', 'matAdmin')


# === Register Models ===
admin.site.register(User, CustomUserAdmin)
admin.site.register(Prof, ProfAdmin)
admin.site.register(Etudiant, EtudiantAdmin)
admin.site.register(AdminUser, AdminUserAdmin)
admin.site.register(Disponibilite)
admin.site.register(Soutenance)