from rest_framework.viewsets import GenericViewSet
from rest_framework.mixins import RetrieveModelMixin, ListModelMixin, UpdateModelMixin
from .models import User
from .serializers import UserSerializer


class UserViewSet(ListModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = User.objects.get_queryset().order_by('id')
    serializer_class = UserSerializer
