from rest_framework import routers
from . import views

# generate url directing all todo items grabbed by view
router = routers.DefaultRouter()
router.register(r'todos', views.TodoView)

urlpatterns = router.urls