# Generated by Django 4.2.7 on 2025-04-18 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pfeApp', '0002_alter_adminuser_options_alter_disponibilite_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
    ]
