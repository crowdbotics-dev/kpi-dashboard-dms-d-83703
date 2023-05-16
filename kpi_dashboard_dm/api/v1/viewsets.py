from rest_framework import authentication
from kpi_dashboard_dm.models import Art
from .serializers import ArtSerializer
from rest_framework import viewsets

class ArtViewSet(viewsets.ModelViewSet):
    serializer_class = ArtSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Art.objects.all()