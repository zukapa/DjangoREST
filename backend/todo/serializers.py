from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Project, ToDo


class ProjectSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'name', 'link_repository', 'users']


class ToDoSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = ToDo
        fields = ['id', 'project', 'text', 'create_date', 'update_date', 'user', 'active']
