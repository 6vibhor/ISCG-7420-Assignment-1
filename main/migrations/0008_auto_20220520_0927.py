# Generated by Django 3.2 on 2022-05-20 03:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_alter_studentenrollment_gradetime'),
    ]

    operations = [
        migrations.AddField(
            model_name='lecturer',
            name='lecture_id',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='student',
            name='student_id',
            field=models.CharField(default='', max_length=100),
        ),
    ]