from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *
import requests
from django.http import JsonResponse

class ItemListView(APIView):
    def get(self, request):
        items = Item.objects.all() # fetches all Item objects from db
        serializer = ItemSerializer(items, many=True) # serializes them into JSON
        return Response(serializer.data)

class TestView(APIView):
    def get(self, request):
        return Response({"message": "REST Framework is working!"})
    
def search_food(request):
    query = request.GET.get('query', '') # get the search query from the request URL

    # openfoodfacts API url that finds JSON data for search terms
    url = f"https://world.openfoodfacts.org/api/v2/search?search_terms={query}&fields=product_name,nutriments"

    response = requests.get(url) # response gets url term search requests
    data = response.json() # data stores the response in JSON python dictionary format

    return JsonResponse(data)
