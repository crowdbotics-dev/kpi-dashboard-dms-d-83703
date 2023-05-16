from rest_framework import authentication
from kpi_dashboar_dm.models import Article
from .serializers import ArticleSerializer
from rest_framework import viewsets

class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Article.objects.all()