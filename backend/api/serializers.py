from rest_framework import serializers
from .models import *

class ItemSerializer(serializers.ModelSerializer): # converts items into JSON data to be sent as a response to the frontend
    class Meta:
        model = Item
        fields = '__all__'