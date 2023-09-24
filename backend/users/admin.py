from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from users.models import User
# Register your models here.


class CustomUserAdmin(UserAdmin):
    def get_form(self, request, obj=None, **kwargs):
        if obj.groups.filter(name='Admins').exists():
            obj.is_staff = True
        else:
            obj.is_staff = False

        defaults = {}
        if obj is None:
            defaults["form"] = self.add_form
        defaults.update(kwargs)
        return super().get_form(request, obj, **defaults)


admin.site.register(User, UserAdmin)
