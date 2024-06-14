from .base import *

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'todo',
        'USER': 'zsp',
        'PASSWORD': '1q2w3e4r',
        'HOST': 'db',
        'PORT': '5432'
    }
}
