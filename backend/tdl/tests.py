from django.test import TestCase
from django.shortcuts import get_object_or_404

from .models import Todos

class TodoTest(TestCase):
    def setUp(self):
        Todos.objects.create(title="To buy a pair of shoes", progress="None")

    # def test_add_content_to_title(self):
    #     print("asas")
    #     todo=get_object_or_404(Todos,id=1)
    #     exp_obj_name = f'{todo.title}'
    #     self.assertEquals(exp_obj_name,"To buy a pair of shoes")

    def test_add_content_to_progress(self):
        todo=get_object_or_404(Todos,id=1)
        exp_obj_pgs=f'{todo.progress}'
        self.assertEquals(exp_obj_pgs,"None")
