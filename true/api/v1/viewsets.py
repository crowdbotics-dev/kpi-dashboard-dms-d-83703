from rest_framework import authentication
from true.models import Test2
from .serializers import Test2Serializer
from rest_framework import viewsets

class Test2ViewSet(viewsets.ModelViewSet):
    serializer_class = Test2Serializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Test2.objects.all()