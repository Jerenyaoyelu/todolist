from django.db import models

class Todos(models.Model):
    title = models.CharField(max_length=100,blank=False)
    notes = models.CharField(max_length=1000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)


    def __str__(self):
        # display todos brief
        return self.title