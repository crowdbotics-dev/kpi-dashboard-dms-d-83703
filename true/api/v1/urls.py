
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import Test2ViewSet
router = DefaultRouter()
router.register('test2', Test2ViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
