from rest_framework import serializers
from .models import Todos

class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Todos
        fields=['id','title','notes','created_at','completed',]