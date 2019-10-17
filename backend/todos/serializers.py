from rest_framework import serializers
from .models import Todos
import datetime
from rest_framework.settings import api_settings

class TodoSerializer(serializers.ModelSerializer):
    due=serializers.DateField(format="%Y-%m-%d",input_formats=['%Y-%m-%d',])
    class Meta:
        model=Todos
        fields=['id','title','notes','due','completed',]