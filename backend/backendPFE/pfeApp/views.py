from rest_framework import viewsets, status,permissions
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import *
from .serializers import *
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.exceptions import TokenError

from .permissions import IsAdminUser, IsProfOrAdmin
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
@permission_classes([permissions.IsAuthenticated])
def logout_view(request):
    try:
        refresh_token = request.data.get("refresh_token")
        if not refresh_token:
            return Response({"error": "Refresh token is required."}, status=status.HTTP_400_BAD_REQUEST)

        token = RefreshToken(refresh_token)
        token.blacklist()

        return Response({"message": "Logged out successfully."}, status=status.HTTP_200_OK)
    except TokenError as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error": "An error occurred during logout."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    from .permissions import IsAdminUser, IsProfUser, IsProfOrAdmin

class ProfViewSet(viewsets.ModelViewSet):
    queryset = Prof.objects.all()
    serializer_class = ProfSerializer
    permission_classes = [IsAdminUser]  # Only admins can modify profs

class SoutenanceViewSet(viewsets.ModelViewSet):
    queryset = Soutenance.objects.all()
    serializer_class = SoutenanceSerializer
    permission_classes = [IsProfOrAdmin]  # Both can access soutenance