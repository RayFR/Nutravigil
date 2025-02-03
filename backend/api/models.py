from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE) # OneToOne field relates to one other field in other models. on_delete=models.CASCADE -> parent deletion means all related children will be deleted too

    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=128)

    age = models.IntegerField()
    sex = models.CharField(max_length=1)
    weight = models.FloatField()
    height = models.FloatField(max_length=3)

class Macros(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    calories = models.IntegerField()
    protein = models.IntegerField()
    carbs = models.IntegerField()
    fats = models.IntegerField()
    sugars = models.IntegerField()            

class NutritionStats(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    maintenance_calories = models.IntegerField()
    avg_surplus_calories = models.IntegerField()
    avg_deficit_calories = models.IntegerField()

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name
