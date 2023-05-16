from rest_framework import authentication
from test_home.models import Home
from .serializers import HomeSerializer
from rest_framework import viewsets

class HomeViewSet(viewsets.ModelViewSet):
    serializer_class = HomeSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Home.objects.all()