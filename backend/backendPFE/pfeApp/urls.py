from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from .views import *

router = DefaultRouter()
router.register('profs', ProfViewSet)
router.register('etudiants', EtudiantViewSet)
router.register('admins', AdminViewSet)
router.register('disponibilites', DisponibiliteViewSet)
router.register('soutenances', SoutenanceViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/login/',MyTokenObtainPairView.as_view(),name='login'), 
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('api/logout/', logout_view, name='logout'),
]
