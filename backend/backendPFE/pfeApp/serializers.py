from rest_framework import serializers
from .models import *
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()


    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'nom', 'prenom', 'date_naissance', 'token']

    def get_token(self, obj):
        token, created = Token.objects.get_or_create(user=obj)
        token, created = Token.objects.get_or_create(user=obj)
        return token.key

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
