from django.urls import path
from .views import calculate_loads

urlpatterns = [
    path("calculate_loads/", calculate_loads),
]
