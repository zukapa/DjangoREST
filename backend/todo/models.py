from django.db import models
from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=64)
    link_repository = models.CharField(max_length=64)
    users = models.ManyToManyField(User)


class ToDo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.CharField(max_length=256)
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    active = models.BooleanField()
