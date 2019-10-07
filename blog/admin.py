from django.contrib import admin
from markdownx.admin import MarkdownxModelAdmin
from .models import Post

admin.site.register(Post, MarkdownxModelAdmin)
