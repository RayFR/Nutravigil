from django.urls import path # defines url routes in django
from . import views

urlpatterns = [
    path('', views.api_overview, name="api-overview"), # maps the root URL to the api_overview func
    path('tasks/', views.task_list, name="task-list"), # maps task/ to task_list func
    path('tasks/<int:pk>/', views.task_detail, name="task-detail"), # maps task/<id>/ to the task_detail function
]
