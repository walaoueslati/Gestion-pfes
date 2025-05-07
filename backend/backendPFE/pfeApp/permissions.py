from rest_framework.permissions import BasePermission

class IsProfOrAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.get_user_type() in ['Prof', 'Admin']

class IsAdminUser(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.get_user_type() == 'Admin'

class IsProfUser(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.get_user_type() == 'Prof'