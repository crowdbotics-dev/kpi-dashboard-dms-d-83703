# Generated by Django 2.2.28 on 2023-05-31 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kpi_dashboar_dm', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='description',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
