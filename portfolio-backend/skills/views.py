from rest_framework import viewsets
from .models import SkillCategory
from .serializers import SkillCategorySerializer

class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SkillCategory.objects.all().order_by('order')
    serializer_class = SkillCategorySerializer
