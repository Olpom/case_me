# Generated by Django 3.2 on 2023-01-31 14:06

import django.contrib.auth.validators
import users.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_alter_user_birthdate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='gender',
            field=models.CharField(choices=[('M', 'Мужской'), ('F', 'Женский')], max_length=7),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(max_length=50, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator(), users.validators.username_me], verbose_name='Имя пользователя'),
        ),
    ]
