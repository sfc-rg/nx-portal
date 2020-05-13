from django.contrib import admin
from .models import (
    Meeting, MeetingPresenter, MeetingFilesRegistration
)

admin.site.register(Meeting, MeetingPresenter, MeetingFilesRegistration)
