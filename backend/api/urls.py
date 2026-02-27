from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SchemeViewSet, DiseaseViewSet, send_otp, verify_otp, analyze_disease, fassi_chat

router = DefaultRouter()
router.register(r'schemes', SchemeViewSet)
router.register(r'diseases', DiseaseViewSet)

urlpatterns = [
    path('auth/send-otp/', send_otp, name='send_otp'),
    path('auth/verify-otp/', verify_otp, name='verify_otp'),
    path('analyze-disease/', analyze_disease, name='analyze_disease'),
    path('fassi-chat/', fassi_chat, name='fassi_chat'),
    path('', include(router.urls)),
]
