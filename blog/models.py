from django.db import models
from django.utils.html import mark_safe
from markdown import markdown
from django.utils import timezone
from uuid import uuid4

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length = 255)
    is_published = models.BooleanField()
    published_id = models.UUIDField(default=uuid4, editable=False)
    created_date = models.DateTimeField('Published Date', default=timezone.now)
    created_by = models.CharField('Author', max_length = 255)
    body = models.TextField()

    class Meta:
       ordering = ['-created_date']

    def __str__(self):
        return self.title

    # Return parsed markdown
    def blog_contents(self):
        return mark_safe(markdown(self.body, safe_mode='escape'))
