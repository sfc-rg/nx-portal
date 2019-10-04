from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views.generic import View
from django.contrib.auth.decorators import login_required

from django.contrib.admin.views.decorators import staff_member_required
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from uuid import uuid4
from manager.models import Meetings
import qrcode
from django.conf import settings


from datetime import datetime



import requests, json



class MeetingView(View):

    @method_decorator(login_required)
    def get(self, request):

        data = Meetings.objects.all()

        context = {
            'table_data': data,
        }

        return render(request, 'meeting/meeting.html', context)
