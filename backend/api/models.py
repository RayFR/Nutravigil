from django.db import models

class User(models.Model):
    User = models.OneToOneField(User, on_delete=models.CASCADE) # OneToOne field relates to one other field in other models. on_delete=models.CASCADE -> parent deletion means all related children will be deleted too

    username =   

class Macros(models.Model):
    User
    calories = models.IntegerField

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name
