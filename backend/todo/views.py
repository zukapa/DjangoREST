from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.mixins import RetrieveModelMixin, ListModelMixin, UpdateModelMixin
from todo.models import Project, ToDo
from .serializers import ProjectSerializer, ToDoSerializer
from .filters import ProjectFilter


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 100


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


class ToDoViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer

    def destroy(self, request, *args, **kwargs):
        

