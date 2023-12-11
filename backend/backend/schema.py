import graphene
from graphene_django import DjangoObjectType
from todo.models import ToDo, Project
from users.models import User


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class Query(graphene.ObjectType):
    todo_all = graphene.List(ToDoType)

    def resolve_todo_all(root, info):
        return ToDo.objects.all()


schema = graphene.Schema(query=Query)
