from django.db import models
from markdownx.models import MarkdownxField
from django.utils import timezone


# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length = 255)
    is_published = models.BooleanField()
    created_date = models.DateTimeField('Published Date', default=timezone.now)
    created_by = models.CharField('Author', max_length = 255)
    body = MarkdownxField('body', help_text='You can write in Markdown')

    class Meta:
       ordering = ['-created_date']

    def __str__(self):
        return self.title
