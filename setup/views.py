from django.shortcuts import render, redirect
from django.views.generic import View

import os

# Create your views here.


class SetupView(View):

    def get(self, request):

        context = {}

        return render(request, 'setup/index.html', context)


class SetupProceedView(View):

    def get(self, request):

        os.system("python manage.py migrate")
        #os.system("python manage.py collectstatic")

        return redirect('/sys_console/init_setup/')
