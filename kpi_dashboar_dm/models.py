from django.conf import settings
from django.db import models
class Article(models.Model):
    'Generated Model'
    title = models.BigIntegerField()
    description = models.CharField(null=True,blank=True,max_length=256,)
    test_2 = models.BigIntegerField(null=True,blank=True,)

# Create your models here.
