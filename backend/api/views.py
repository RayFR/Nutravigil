from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *

class ItemListView(APIView):
    def get(self, request):
        items = Item.objects.all() # fetches all Item objects from db
        serializer = ItemSerializer(items, many=True) # serializes them into JSON
        return Response(serializer.data)

class TestView(APIView):
    def get(self, request):
        return Response({"message": "REST Framework is working!"})