# Kisan Mitra - Indian Farmer Assistant

Kisan Mitra is a full-stack web application designed for Indian farmers. It features multi-language support, a voice-first interface, and essential services like crop disease detection, weather updates, and information on government schemes.

## Technical Stack
- **Frontend**: HTML5, Vanilla JavaScript, CSS3, TailwindCSS (CDN), FontAwesome (Icons)
- **Backend**: Python, Django, Django REST Framework, SQLite
- **APIs**: Web Speech API (Native Browser functionality for Speech-to-Text and Text-to-Speech)

## Features Included
1. **Multilingual Login Page**: Authentication mockup via Kisan ID and OTP password.
2. **Language Selection Page**: Content natively switches based on standard Indian regional languages.
3. **Voice Assistant Dashboard**: Click a microphone to activate Speech-to-Text inference natively via browser. It mocks inference from an AI agent and responds verbally.
4. **Crop Disease Detection Simulator**.
5. **Weather Status Board**.
6. **Government Schemes View**.

## Deployment & Run Instructions

### 1. Start the Backend Server
Navigate into the backend directory and run Django:
\`\`\`bash
cd backend
python manage.py runserver 0.0.0.0:8000
\`\`\`

*(Note: Ensure you have \`django\`, \`djangorestframework\`, and \`django-cors-headers\` installed via pip. Also, ensure you have applied migrations using \`python manage.py migrate\`)*

### 2. View the Frontend App
No build tools are required for the frontend. You can serve it using Python's built-in HTTP server:
\`\`\`bash
cd frontend
python -m http.server 3000
\`\`\`
Access the application at \`http://127.0.0.1:3000\`.

*Alternatively, you can just open \`frontend/index.html\` directly in your browser!*

## Security Note
For production use:
- Implement secure JWTs.
- Store sensitive values in `.env`.
- Route the SMS verification through a real gateway like Twilio.
- Swap SQLite with PostgreSQL or MySQL.
