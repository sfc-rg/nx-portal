from django.shortcuts import render
from django.views.generic import View

from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import (
    LoginView, LogoutView
)
from django.shortcuts import render
from django.views import generic
from .forms import LoginForm


class ProfileView(View):
    def get(self, request):
        return render(request, "profile.html")

class Login(LoginView):
    form_class = LoginForm
    template_name = 'account/login.html'


class Logout(LoginRequiredMixin, LogoutView):
    template_name = 'index.html'
