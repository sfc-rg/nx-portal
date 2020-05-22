
LDAP_SERVER_ADDRESS = "ldap3.sfc.wide.ad.jp"
LDAP_SERVER_PORT = 5432
LDAP_USER_BASEDN = 'YOUR LDAP SERVER USER BASEDN HERE'

AUTHENTICATION_BACKENDS = [
    'django_auth_ldap.backend.LDAPBackend',
    'django.contrib.auth.backends.ModelBackend',
]
