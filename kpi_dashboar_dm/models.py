from django.conf import settings
from django.db import models
class Article(models.Model):
    'Generated Model'
    title = models.BigIntegerField()
    description = models.CharField(max_length=256,null=True,blank=True,)

# Create your models here.
