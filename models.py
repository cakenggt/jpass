from django.db import models
from django.conf import settings

from django.contrib.auth.models import User

# Create your models here.
class Vault(models.Model):
    """
    Keeps encrypted vault data by user
    """
    data = models.TextField()
    owner = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )

    def __unicode__(self):
        return self.owner.username
