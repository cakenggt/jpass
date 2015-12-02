from django.db import models

from django.contrib.auth.models import User

# Create your models here.
class Vault(models.Model):
    """
    Keeps encrypted vault data by user
    """
    data = models.TextField()
    owner = models.ForeignKey(User)

    def __unicode__(self):
        return self.owner
