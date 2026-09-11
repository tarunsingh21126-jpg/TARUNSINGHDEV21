from django.contrib import admin
from .models import Project, Technology, ProjectTechnology

admin.site.register(Technology)
admin.site.register(ProjectTechnology)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'featured', 'created_at')
    prepopulated_fields = {'slug': ('title',)}
