from rest_framework import serializers
from kpi_dashboar_dm.models import Article

class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = "__all__"