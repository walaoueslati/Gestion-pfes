from rest_framework import viewsets, status,permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import *
from .serializers import *

class ProfViewSet(viewsets.ModelViewSet):
    queryset = Prof.objects.all()
    serializer_class = ProfSerializer
   # permission_classes = [permissions.IsAuthenticated]  # ou [permissions.AllowAny] si tu veux ouvrir à tous



class EtudiantViewSet(viewsets.ModelViewSet):
    queryset = Etudiant.objects.all()
    serializer_class = EtudiantSerializer


class AdminViewSet(viewsets.ModelViewSet):
    queryset = AdminUser.objects.all()
    serializer_class = AdminSerializer


class DisponibiliteViewSet(viewsets.ModelViewSet):
    queryset = Disponibilite.objects.all()
    serializer_class = DisponibiliteSerializer


class SoutenanceViewSet(viewsets.ModelViewSet):
    queryset = Soutenance.objects.all()
    serializer_class = SoutenanceSerializer


#login
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims 
        token['email'] = user.email
        token['username'] = user.username
        token['user_type'] = user.get_user_type()
        return token

    def validate(self, attrs):
        data = super().validate(attrs)#apres la validation de etmai et password get la response access et refersh token 
        
        # add user data with role-specific information
        serializer = UserSerializer(self.user)
        data['user'] = serializer.data
        
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def logout_view(request):
    return Response({"message": "Déconnexion réussie"}, status=status.HTTP_200_OK)
