from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'todos', views.TodoView)

urlpatterns = router.urls