from django.urls import path
from setup.views import SetupView, SetupProceedView

urlpatterns = [
    path('init_setup/', SetupView.as_view(), name='setup'),
    path('init_setup/proceeding/', SetupProceedView.as_view(), name='proceed'),
]
