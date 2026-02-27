from django.db import models

class Farmer(models.Model):
    kisan_id = models.CharField(max_length=50, unique=True)
    mobile_number = models.CharField(max_length=15)
    role = models.CharField(max_length=20, choices=[('farmer', 'Farmer'), ('admin', 'Admin')], default='farmer')
    language_preference = models.CharField(max_length=10, default='en')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.kisan_id

class Scheme(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    eligibility = models.TextField()
    application_url = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

class Disease(models.Model):
    crop_name = models.CharField(max_length=100)
    disease_name = models.CharField(max_length=100)
    symptoms = models.JSONField(default=list)
    treatments = models.JSONField(default=list)

    def __str__(self):
        return f"{self.crop_name} - {self.disease_name}"
