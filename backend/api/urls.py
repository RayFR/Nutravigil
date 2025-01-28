from django.urls import path
from .views import *

urlpatterns = [
    path('items/', ItemListView.as_view(), name='item-list'),
    path('test/', TestView.as_view(), name='test-view'),
]
