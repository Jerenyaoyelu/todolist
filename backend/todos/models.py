from django.db import models

class Todos(models.Model):
    title = models.CharField(max_length=100,blank=False)
    notes = models.CharField(max_length=1000, blank=True)
    #have to format the datetime, otherwise when the date was entered as an input, error will occur because of wrong format
    due = models.DateTimeField(auto_now_add=False)
    completed = models.BooleanField(default=False)


    def __str__(self):
        # display todos brief
        return self.title