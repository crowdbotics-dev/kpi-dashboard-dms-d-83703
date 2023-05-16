
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import HomeViewSet
router = DefaultRouter()
router.register('home', HomeViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
