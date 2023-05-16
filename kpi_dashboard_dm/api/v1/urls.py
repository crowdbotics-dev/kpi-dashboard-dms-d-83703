
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ArtViewSet
router = DefaultRouter()
router.register('art', ArtViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
