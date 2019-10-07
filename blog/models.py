from django.db import models
from markdownx.models import MarkdownxField

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length = 255)
    published = models.DateField()
    created_by = models.CharField(max_length = 255)
    body = MarkdownxField('body', help_text='You can write in Markdown')

    def __str__(self):
        return self.title
