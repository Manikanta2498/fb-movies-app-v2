# Generated by Django 3.2.4 on 2021-06-19 05:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0010_output'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_entry_time',
            field=models.DateTimeField(),
        ),
    ]
