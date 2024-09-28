from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer

@api_view(['GET'])
def api_overview(request):
    return Response({
        "task-list": "/tasks/",
        "task-detail": "/tasks/<id>/"
    })

@api_view(['GET'])
def task_list(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data) 

@api_view(['GET'])
def task_detail(request, pk):
    try:
        task = Task.objects.get(id=pk)
        serializer = TaskSerializer(task, many=False)
        return Response(serializer.data)
    except Task.DoesNotExist:
        return Response(status=404)

        

