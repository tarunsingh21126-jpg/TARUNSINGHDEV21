from django.db import models

class Experience(models.Model):
    company = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    description = models.TextField()
    technologies = models.CharField(max_length=255, help_text="Comma separated technologies")
    achievement = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return f"{self.role} at {self.company}"
