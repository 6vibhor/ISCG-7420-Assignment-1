# Generated by Django 3.2 on 2022-04-11 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_remove_lecturer_course'),
    ]

    operations = [
        migrations.AddField(
            model_name='lecturer',
            name='password',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='student',
            name='password',
            field=models.CharField(default='', max_length=200),
        ),
    ]
