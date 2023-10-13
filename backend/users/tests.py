from rest_framework.test import APITestCase
from rest_framework import status
from .models import User
from .views import UserViewSet


class TestUsersViewSet(APITestCase):
    def test_change_user(self):
        superuser = User.objects.create_superuser('admin', 'admin@admin.ru', 'Admin1')
        self.client.login(username='admin', password='Admin1')
        response = self.client.put(f'/api/users/{superuser.id}/', {'email': 'changed@admin.ru', 'username': 'admin'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
