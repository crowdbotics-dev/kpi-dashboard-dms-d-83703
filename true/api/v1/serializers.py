from rest_framework import serializers
from true.models import Test2

class Test2Serializer(serializers.ModelSerializer):

    class Meta:
        model = Test2
        fields = "__all__"