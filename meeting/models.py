import uuid
from django.db import models

# Create your models here.


class Meeting(models.Model):
    mtg_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length = 255)
    start = models.DateField()
    end = models.DateField()
    on_start = models.BooleanField()
    on_end = models.BooleanField()
    presenters = models.CharField(max_length = 255)

    def __str__(self):
        return self.name

class MeetingPresenter(models.Model):
    presenter_id = models.CharField(max_length = 255)
    title = models.CharField(max_length = 255)
    meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE)



class MeetingFilesRegistration(models.Model):
    file_uri = models.CharField(max_length = 255)
    presenter = models.ForeignKey(MeetingPresenter, on_delete=models.CASCADE)
