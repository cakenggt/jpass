# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('jpass', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vault',
            name='owner',
            field=models.OneToOneField(to=settings.AUTH_USER_MODEL),
        ),
    ]
