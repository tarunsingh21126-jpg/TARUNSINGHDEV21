from rest_framework import serializers
from .models import Project, Technology

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ['name']

class ProjectSerializer(serializers.ModelSerializer):
    technologies = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'title', 'slug', 'description', 'problem', 'solution', 'technologies', 'github_url', 'live_url', 'featured']

    def get_technologies(self, obj):
        return [pt.technology.name for pt in obj.technologies.all()]
