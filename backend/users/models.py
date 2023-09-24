from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(unique=True)

    def groups_changed(**kwargs):
        action = kwargs.pop('action', None)
        instance = kwargs.pop('instance', None)
        groups = instance.groups.get_queryset()
        if action == 'post_add':
            for group in groups:
                if group.name == 'Admins':
                    instance.is_staff = True
                instance.save()
        if action == 'post_remove':
            for group in groups:
                if group.name != 'Admins':
                    instance.is_staff = False
                instance.save()


models.signals.m2m_changed.connect(User.groups_changed, sender=User.groups.through)
