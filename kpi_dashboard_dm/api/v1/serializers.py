from rest_framework import serializers
from kpi_dashboard_dm.models import Art

class ArtSerializer(serializers.ModelSerializer):

    class Meta:
        model = Art
        fields = "__all__"