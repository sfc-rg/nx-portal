from django.db import models

# Create your models here.

class UploadFile(models.Model):
  file_name = models.CharField(max_length = 255)
  file_id = models.CharField(max_length = 255)
  disable = models.BooleanField(default=False)
  file_object_path = models.CharField(max_length = 255)
