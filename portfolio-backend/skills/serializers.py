from rest_framework import serializers
from .models import SkillCategory

class SkillCategorySerializer(serializers.ModelSerializer):
    skills = serializers.StringRelatedField(many=True)
    category = serializers.CharField(source='name')

    class Meta:
        model = SkillCategory
        fields = ['category', 'skills']
