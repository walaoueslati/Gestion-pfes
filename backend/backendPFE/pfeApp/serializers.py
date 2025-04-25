from rest_framework import serializers
from .models import *
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.tokens import RefreshToken


class UserSerializer(serializers.ModelSerializer):
    role_data = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'nom', 'prenom', 'CIN', 'dateNaissance', 'role_data',]

    def get_role_data(self, obj):
        if hasattr(obj, 'prof'):
            return ProfSerializer(obj.prof).data
        # elif hasattr(obj, 'etudiant'):
        #     return EtudiantSerializer(obj.etudiant).data
        elif hasattr(obj, 'adminuser'):
            return AdminSerializer(obj.adminuser).data
        return None

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

class ProfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prof
        fields = '__all__'

class EtudiantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Etudiant
        fields = '__all__'

class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminUser
        fields = '__all__'

class DisponibiliteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disponibilite
        fields = '__all__'

class SoutenanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Soutenance
        fields = '__all__'
