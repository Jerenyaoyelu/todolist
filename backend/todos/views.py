from django.shortcuts import render

from rest_framework import viewsets
from .serializers import TodoSerializer 
from .models import Todos

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer         
    queryset = Todos.objects.all() 