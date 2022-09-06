from django.core.management.base import BaseCommand, CommandError
from users.models import User


class Command(BaseCommand):
    help = 'Create superuser and more test users'

    def handle(self, *args, **options):
        superuser = User.objects.create_superuser('admin', 'admin@mail.com', 'admin')
        test_user_first = User.objects.create_user('ivan', 'ivan@mail.com', 'ivan')
        test_user_second = User.objects.create_user('maria', 'maria@mail.com', 'maria')
        test_user_third = User.objects.create_user('ekaterina', 'ekaterina@mail.com', 'ekaterina')
        superuser.save()
        test_user_first.save()
        test_user_second.save()
        test_user_third.save()
