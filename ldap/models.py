from django.db import models

# Create your models here.
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.conf import settings

"""
from ldap3 import Server, Connection, AUTH_SIMPLE, STRATEGY_SYNC, LDAPBindError


class LDAPBackend(object):
   def authenticate(self, username=None, password=None):
       s = Server(settings.LDAP_SERVER_ADDRESS,
                  port=settings.LDAP_SERVER_PORT)

       user_dn = 'uid='+username+',' + settings.LDAP_USER_BASEDN

       try:
           c = Connection(s,
                          user=user_dn,
                          password=password,
                          authentication=AUTH_SIMPLE,
                          check_names=True,
                          client_strategy=STRATEGY_SYNC,
                          auto_bind=True)
           user = get_user_model()

           result, created = user.objects.update_or_create(
               username=username,
               password=password
           )

           c.unbind()
           return result
       except LDAPBindError:
           return None

   def get_user(self, user_id):
       user = get_user_model()
       try:
           return user.objects.get(pk=user_id)
       except User.DoesNotExist:
           return None
"""