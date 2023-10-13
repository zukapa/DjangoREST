from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient
from todo.models import Project
from users.models import User
from todo.views import ToDoViewSet


class TestToDoViewSet(TestCase):
    def test_create_todo(self):
        factory = APIRequestFactory()
        superuser = User.objects.create_superuser('admin', 'admin@admin.ru', 'Admin1')
        project = Project.objects.create(name='Building', link_repository='http://link.ru')
        project.users.add(superuser)
        todo_data_post = {'project': 'http://rest/api/projects/1/', 'text': 'Building house',
                          'create_date': '2023-01-21 01:01:01.000001', 'update_date': '2023-01-21 01:01:01.000001',
                          'user': 'http://rest/api/users/1/', 'active': True}
        request = factory.post('/api/todo/', todo_data_post, format='json')
        force_authenticate(request, superuser)
        view = ToDoViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class TestProjectViewSet(TestCase):
    def test_create_project(self):
        client = APIClient()
        User.objects.create_superuser('admin', 'admin@admin.ru', 'Admin1')
        client.login(username='admin', password='Admin1')
        response = client.post('/api/projects/', {'name': 'Building', 'link_repository': 'http://link.ru',
                                                  'users': ['http://rest/api/users/1/']})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
