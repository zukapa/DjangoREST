from rest_framework.serializers import HyperlinkedModelSerializer
from .models import User


class UserSerializer(HyperlinkedModelSerializer):
    # url = HyperlinkedModelSerializer.get_initialized_url_field_name(User)
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']
        ordering = ['id']


class UserSerializerAdmins(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_superuser', 'is_staff']
        ordering = ['id']
