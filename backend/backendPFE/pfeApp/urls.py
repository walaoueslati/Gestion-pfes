from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register('users', UserViewSet)
router.register('profs', ProfViewSet)
router.register('etudiants', EtudiantViewSet)
router.register('admins', AdminViewSet)
router.register('disponibilites', DisponibiliteViewSet)
router.register('soutenances', SoutenanceViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/login/', login_view, name='login'),
    path('api/logout/', logout_view, name='logout'),
]
