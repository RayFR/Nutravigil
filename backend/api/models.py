from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE) # OneToOne field relates to one other field in other models. on_delete=models.CASCADE -> parent deletion means all related children will be deleted too

    age = models.IntegerField()
    sex = models.CharField(max_length=1)
    weight = models.FloatField()
    height = models.FloatField()

class Food(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="foods")  # Each user can have multiple foods
    open_food_facts_id = models.CharField(max_length=100, unique=True)  # Unique ID from Open Food Facts
    name = models.CharField(max_length=255)  # Food name
    calories = models.FloatField(null=True, blank=True)  # Calories
    protein = models.FloatField(null=True, blank=True)  # Protein (grams)
    carbs = models.FloatField(null=True, blank=True)  # Carbohydrates (grams)
    fat = models.FloatField(null=True, blank=True)  # Fat (grams)
    added_at = models.DateTimeField(auto_now_add=True)  # When the user added this food

    def __str__(self):
        return f"{self.name} ({self.user.username})"
    
class UserFoodEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="food_entries")  # Each user can have multiple foods
    food = models.ForeignKey(Food, on_delete=models.CASCADE)  # ForeignKey originates from here

    date = models.DateField()
    quantity = models.IntegerField(default=1)

    def total_calories(self):
        return self.food.calories * self.quantity if self.food.calories else 0

    def total_protein(self):
        return self.food.protein * self.quantity if self.food.protein else 0

    def total_carbs(self):
        return self.food.carbs * self.quantity if self.food.carbs else 0

    def total_fat(self):
        return self.food.fat * self.quantity if self.food.fat else 0

    def __str__(self):
        return f"{self.food.name} ({self.date})"

class Macros(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    macroDate = models.DateField(unique=True)
    dailyCalories = models.IntegerField()
    dailyProtein = models.IntegerField()
    dailyCarbs = models.IntegerField()
    dailyFats = models.IntegerField()
    dailySugars = models.IntegerField()    

    def __str__(self):
        return f"{self.user.username} - {self.macroDate}"        

class NutritionStats(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    maintenance_calories = models.IntegerField()
    avg_surplus_calories = models.IntegerField()
    avg_deficit_calories = models.IntegerField()

    def __str__(self):
        return f"{self.user.username} - {self.maintenance_calories}"    

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name
