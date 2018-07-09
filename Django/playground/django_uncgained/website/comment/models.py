from django.db import models
from post.models import Post

# Create your models here.

class Comment(models.Model):
    body = models.TextField()
    name = models.CharField(max_length=255, default=None)
    email = models.CharField(max_length=128, default=None)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)


    def __str__(self):
        return self.body


    class Meta:
        db_table = 'comments'
