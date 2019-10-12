from django.db import models

class Todos(models.Model):
    title = models.CharField(max_length=48)
    description = models.TextField(max_length=1000)
    completed = models.BooleanField(default=False)

    def __str__(self):
        # display todos brief
        return self.title