from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Farmer, Scheme, Disease
from .serializers import FarmerSerializer, SchemeSerializer, DiseaseSerializer
import random
import os
import google.generativeai as genai

# Initialize the Gemini Client
genai.configure(api_key=os.environ.get("GEMINI_API_KEY", "AIzaSyDOmjY4bz_MRjWh_1DIR-o99BWUSWYIhZo"))

class SchemeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Scheme.objects.all()
    serializer_class = SchemeSerializer

class DiseaseViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Disease.objects.all()
    serializer_class = DiseaseSerializer

# Mock Auth Views
@api_view(['POST'])
def send_otp(request):
    kisan_id = request.data.get('kisan_id')
    mobile = request.data.get('mobile_number')
    
    if not kisan_id or not mobile:
        return Response({'error': 'Please provide Kisan ID and Mobile Number'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Check or create farmer
    farmer, created = Farmer.objects.get_or_create(
        kisan_id=kisan_id,
        defaults={'mobile_number': mobile}
    )
    
    # In a real app, integrate an SMS Gateway here
    mock_otp = "1234"
    return Response({'message': 'OTP sent successfully. (Use 1234 for testing)', 'kisan_id': farmer.kisan_id})

@api_view(['POST'])
def verify_otp(request):
    kisan_id = request.data.get('kisan_id')
    otp = request.data.get('otp')
    
    if otp == "1234":
        try:
            farmer = Farmer.objects.get(kisan_id=kisan_id)
            # In a real app, generate a JWT token here
            serializer = FarmerSerializer(farmer)
            return Response({
                'message': 'Login successful',
                'token': 'mock_jwt_token_12345',
                'farmer': serializer.data
            })
        except Farmer.DoesNotExist:
            return Response({'error': 'Farmer not found'}, status=status.HTTP_404_NOT_FOUND)
    
    return Response({'error': 'Invalid OTP'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def analyze_disease(request):
    image_base64 = request.data.get('image_data')
    language = request.data.get('language', 'en')

    if not image_base64:
        return Response({'error': 'No image data provided'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Strip the prefix if it's there (e.g., "data:image/jpeg;base64,")
    if 'base64,' in image_base64:
        # Extract everything after the comma
        image_base64 = image_base64.split('base64,')[1]

    # Map language codes to language names for the prompt
    lang_map = {
        'en': 'English', 'hi': 'Hindi', 'te': 'Telugu', 'ta': 'Tamil', 
        'kn': 'Kannada', 'mr': 'Marathi', 'pa': 'Punjabi', 'bn': 'Bengali'
    }
    target_lang = lang_map.get(language, 'English')

    prompt = f"""
    Act as an expert agricultural scientist and plant pathologist. 
    Analyze the crop image provided to detect any diseases, pests, or nutrient deficiencies.
    
    CRITICAL INSTRUCTIONS:
    1. You MUST respond entirely in {target_lang}.
    2. Your response MUST be incredibly detailed and comprehensive, exceeding 200 lines of information.
    3. Include the following precise sections:
       - **Disease Identification**: Name of the disease/pest, confidence score.
       - **Detailed Symptoms**: A very thorough breakdown of what visual indicators led to this conclusion.
       - **Root Causes**: Environmental, biological, or soil factors causing this.
       - **Immediate Actions & Treatment**: Chemical (include exact dosages of medicines/fungicides/pesticides) and organic treatments.
       - **Long Term Prevention Strategy**: Crop rotation strategies, soil management, watering techniques.
       - **Impact on Yield**: What the farmer can expect in terms of loss if untreated.
    4. Format your response clearly with Markdown headers, bullet points, and bold text for readability.
    5. Even when providing 200+ lines, ensure the information is highly valuable and practically useful for an Indian farmer.
    
    If the image is not a plant/crop, state clearly in {target_lang} that the image is invalid and ask for a crop photo.
    """

    try:
        model = genai.GenerativeModel('gemini-2.5-flash')
        
        response = model.generate_content([
            prompt,
            {
                "mime_type": "image/jpeg",
                "data": image_base64
            }
        ])
        
        analysis_result = response.text
        return Response({
            'message': 'Analysis complete',
            'analysis': analysis_result
        })

    except Exception as e:
        print(f"Error calling Gemini API: {str(e)}")
        return Response({'error': f'Failed to analyze image: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def fassi_chat(request):
    message = request.data.get('message')
    profile_context = request.data.get('profile_context', '{}')
    language = request.data.get('language', 'en')

    if not message:
        return Response({'error': 'No message provided'}, status=status.HTTP_400_BAD_REQUEST)

    lang_map = {
        'en': 'English', 'hi': 'Hindi', 'te': 'Telugu', 'ta': 'Tamil', 
        'kn': 'Kannada', 'mr': 'Marathi', 'pa': 'Punjabi', 'bn': 'Bengali'
    }
    target_lang = lang_map.get(language, 'English')

    system_prompt = f"""
    You are F.A.S.S.I (Farmer Artificial Super-intelligence Support Interface), an advanced, highly specialized agricultural AI assistant designed specifically for Indian farmers. 
    
    You are speaking directly to a farmer with the following profile: {profile_context}.
    
    CRITICAL INSTRUCTIONS:
    1. Base all your advice on their specific location, soil type, water availability, and machinery listed in their profile.
    2. Be concise but highly tactical and actionable.
    3. You MUST respond entirely in {target_lang}.
    4. Use Markdown formatting (bolding, lists) to make it easy to read on a mobile phone.
    5. Always be encouraging and respectful.
    """
    
    try:
        model = genai.GenerativeModel('gemini-2.5-flash')
        
        response = model.generate_content([
            system_prompt,
            f"Farmer's query: {message}"
        ])
        
        return Response({
            'message': 'Chat response generated',
            'reply': response.text
        })
        
    except Exception as e:
        print(f"Error calling Gemini API for chat: {str(e)}")
        return Response({'error': f'Failed to process chat: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
