// --- App State ---
const state = {
    user: null, // { kisan_id, token, language }
    currentPath: '/login', // initial path
};

// --- Language Dictionary (i18n mock) ---
const translations = {
    en: {
        welcome: "Welcome to Kisan Mitra",
        loginDesc: "Enter your details to access farmer services",
        kisanIdLabel: "Kisan ID (e.g. KISAN123)",
        mobileLabel: "Mobile Number",
        sendOtp: "Send OTP",
        verifyOtp: "Verify OTP",
        otpLabel: "Enter 4-digit OTP (Try 1234)",
        selectLang: "Select your preferred language",
        voiceAssist: "Voice Assistant",
        voiceDesc: "Tap the microphone and speak your problem",
        dashboard: "Dashboard",
        schemes: "Government Schemes",
        weather: "Weather Updates",
        disease: "Disease Detection",
        disease: "Disease Detection",
        uploadPhoto: "Upload Crop Photo",
        detectBtn: "Analyze Disease",
        back: "Back to Dashboard",
        schemesDesc: "Available Schemes for You",
        applyNow: "Apply Now",
        analyzing: "Analyzing...",
        diseaseFound: "Disease Detected",
        medicine: "Suggested Medicine",
        precautions: "Precautions",
        unknownDisease: "Could not identify disease. Please upload a clearer picture."
    },
    hi: {
        welcome: "किसान मित्र में आपका स्वागत है",
        loginDesc: "किसान सेवाओं तक पहुंचने के लिए अपना विवरण दर्ज करें",
        kisanIdLabel: "किसान आईडी (उदा. KISAN123)",
        mobileLabel: "मोबाइल नंबर",
        sendOtp: "OTP भेजें",
        verifyOtp: "OTP सत्यापित करें",
        otpLabel: "4-अंकीय OTP दर्ज करें",
        selectLang: "अपनी पसंदीदा भाषा चुनें",
        voiceAssist: "वॉयस असिस्टेंट",
        voiceDesc: "माइक्रोफोन पर टैप करें और अपनी समस्या बोलें",
        dashboard: "डैशबोर्ड",
        schemes: "सरकारी योजनाएं",
        weather: "मौसम के अपडेट",
        disease: "रोग का पता लगाना",
        uploadPhoto: "फसल की तस्वीर अपलोड करें",
        detectBtn: "रोग का विश्लेषण करें",
        back: "डैशबोर्ड पर वापस",
        schemesDesc: "आपके लिए उपलब्ध योजनाएं",
        applyNow: "अभी आवेदन करें",
        analyzing: "विश्लेषण कर रहा है...",
        diseaseFound: "रोग पहचाना गया",
        medicine: "सुझाई गई दवा",
        precautions: "सावधानियां",
        unknownDisease: "रोग की पहचान नहीं हो सकी। कृपया स्पष्ट चित्र अपलोड करें।"
    },
    te: {
        welcome: "కిసాన్ మిత్రకు స్వాగతం",
        loginDesc: "రైతు సేవలను పొందడానికి మీ వివరాలను నమోదు చేయండి",
        kisanIdLabel: "కిసాన్ ID (ఉదా. KISAN123)",
        mobileLabel: "మొబైల్ నంబర్",
        sendOtp: "OTP పంపండి",
        verifyOtp: "OTPని ధృవీకరించండి",
        otpLabel: "4-అంకెల OTP నమోదు చేయండి",
        selectLang: "మీకు ఇష్టమైన భాషను ఎంచుకోండి",
        voiceAssist: "వాయిస్ అసిస్టెంట్",
        voiceDesc: "మైక్రోఫోన్‌ను నొక్కి మీ సమస్యను చెప్పండి",
        dashboard: "డాష్‌బోర్డ్",
        schemes: "ప్రభుత్వ పథకాలు",
        weather: "వాతావరణ నవీకరణలు",
        disease: "వ్యాధి గుర్తింపు",
        uploadPhoto: "పంట ఫోటోను అప్‌లోడ్ చేయండి",
        detectBtn: "వ్యాధిని విశ్లేషించండి",
        back: "డాష్‌బోర్డ్‌కు తిరిగి వెళ్లండి",
        schemesDesc: "మీకు అందుబాటులో ఉన్న పథకాలు",
        applyNow: "ఇప్పుడే దరఖాస్తు చేయండి",
        analyzing: "విశ్లేషించబడుతోంది...",
        diseaseFound: "వ్యాధి కనుగొనబడింది",
        medicine: "సూచించిన మందు",
        precautions: "జాగ్రత్తలు",
        unknownDisease: "వ్యాధిని గుర్తించలేకపోయాము. దయచేసి స్పష్టమైన చిత్రాన్ని అప్‌లోడ్ చేయండి."
    },
    ta: {
        welcome: "கிசான் மித்ராவுக்கு வரவேற்கிறோம்",
        loginDesc: "விவசாயி சேவைகளை அணுக உங்கள் விவரங்களை உள்ளிடவும்",
        kisanIdLabel: "கிசான் ஐடி (உதா. KISAN123)",
        mobileLabel: "மொபைல் எண்",
        sendOtp: "OTP ஐ அனுப்பவும்",
        verifyOtp: "OTP ஐ சரிபார்க்கவும்",
        otpLabel: "4-இலக்க OTP ஐ உள்ளிடவும்",
        selectLang: "உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்",
        voiceAssist: "குரல் உதவியாளர்",
        voiceDesc: "மைக்ரோஃபோனைத் தட்டி உங்கள் பிரச்சனையைப் பேசுங்கள்",
        dashboard: "முகப்புப்பலகை",
        schemes: "அரசு திட்டங்கள்",
        weather: "வானிலை புதுப்பிப்புகள்",
        disease: "நோய் கண்டறிதல்",
        uploadPhoto: "பயிர் புகைப்படத்தை பதிவேற்றவும்",
        detectBtn: "நோயை பகுப்பாய்வு செய்",
        back: "முகப்புப்பலகைக்குத் திரும்பு",
        schemesDesc: "உங்களுக்காக கிடைக்கும் திட்டங்கள்",
        applyNow: "இப்போது விண்ணப்பிக்கவும்",
        analyzing: "பகுப்பாய்வு செய்யப்படுகிறது...",
        diseaseFound: "நோய் கண்டறியப்பட்டது",
        medicine: "பரிந்துரைக்கப்பட்ட மருந்து",
        precautions: "முன்னெச்சரிக்கைகள்",
        unknownDisease: "நோயைக் கண்டறிய முடியவில்லை. தெளிவான படத்தைப் பதிவேற்றவும்."
    },
    kn: {
        welcome: "ಕಿಸಾನ್ ಮಿತ್ರಗೆ ಸುಸ್ವಾಗತ",
        loginDesc: "ರೈತ ಸೇವೆಗಳನ್ನು ಪ್ರವೇಶಿಸಲು ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ",
        kisanIdLabel: "ಕಿಸಾನ್ ID (ಉದಾ. KISAN123)",
        mobileLabel: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        sendOtp: "OTP ಕಳುಹಿಸಿ",
        verifyOtp: "OTP ಪರಿಶೀಲಿಸಿ",
        otpLabel: "4-ಅಂಕಿಯ OTP ನಮೂದಿಸಿ",
        selectLang: "ನಿಮ್ಮ ಆದ್ಯತೆಯ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        voiceAssist: "ಧ್ವನಿ ಸಹಾಯಕ",
        voiceDesc: "ಮೈಕ್ರೊಫೋನ್ ಟ್ಯಾಪ್ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಮಾತನಾಡಿ",
        dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        weather: "ಹವಾಮಾನ ನವೀಕರಣಗಳು",
        disease: "ರೋಗ ಪತ್ತೆ",
        uploadPhoto: "ಬೆಳೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        detectBtn: "ರೋಗವನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
        back: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",
        schemesDesc: "ನಿಮಗಾಗಿ ಲಭ್ಯವಿರುವ ಯೋಜನೆಗಳು",
        applyNow: "ಈಗಲೇ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
        analyzing: "ವಿಶ್ಲೇಷಿಸುತ್ತಿದೆ...",
        diseaseFound: "ರೋಗ ಪತ್ತೆಯಾಗಿದೆ",
        medicine: "ಸೂಚಿಸಲಾದ ಔಷಧ",
        precautions: "ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು",
        unknownDisease: "ರೋಗವನ್ನು ಗುರುತಿಸಲಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಸ್ಪಷ್ಟವಾದ ಚಿತ್ರವನ್ನು ಅಪ್ಲೋಡ್ ಮಾಡಿ."
    },
    mr: {
        welcome: "किसान मित्र मध्ये आपले स्वागत आहे",
        loginDesc: "शेतकरी सेवांमध्ये प्रवेश करण्यासाठी आपले तपशील प्रविष्ट करा",
        kisanIdLabel: "किसान आयडी (उदा. KISAN123)",
        mobileLabel: "मोबाईल नंबर",
        sendOtp: "OTP पाठवा",
        verifyOtp: "OTP सत्यापित करा",
        otpLabel: "4-अंकी OTP प्रविष्ट करा",
        selectLang: "आपली पसंतीची भाषा निवडा",
        voiceAssist: "व्हॉइस असिस्टंट",
        voiceDesc: "मायक्रोफोनवर टॅप करा आणि आपली समस्या सांगा",
        dashboard: "डॅशबोर्ड",
        schemes: "सरकारी योजना",
        weather: "हवामानाचे अपडेट्स",
        disease: "रोग ओळख",
        uploadPhoto: "पिकाचा फोटो अपलोड करा",
        detectBtn: "रोगाचे विश्लेषण करा",
        back: "डॅशबोर्डवर परत जा",
        schemesDesc: "तुमच्यासाठी उपलब्ध योजना",
        applyNow: "आता अर्ज करा",
        analyzing: "विश्लेषण करत आहे...",
        diseaseFound: "रोग आढळला",
        medicine: "सुचविलेले औषध",
        precautions: "काळजी",
        unknownDisease: "रोग ओळखू शकलो नाही. कृपया स्पष्ट चित्र अपलोड करा."
    },
    pa: {
        welcome: "ਕਿਸਾਨ ਮਿੱਤਰ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ",
        loginDesc: "ਕਿਸਾਨ ਸੇਵਾਵਾਂ ਤੱਕ ਪਹੁੰਚਣ ਲਈ ਆਪਣੇ ਵੇਰਵੇ ਦਾਖਲ ਕਰੋ",
        kisanIdLabel: "ਕਿਸਾਨ ਆਈਡੀ (ਜਿਵੇਂ ਕਿ KISAN123)",
        mobileLabel: "ਮੋਬਾਈਲ ਨੰਬਰ",
        sendOtp: "OTP ਭੇਜੋ",
        verifyOtp: "OTP ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
        otpLabel: "4-ਅੰਕ ਦਾ OTP ਦਾਖਲ ਕਰੋ",
        selectLang: "ਆਪਣੀ ਪਸੰਦੀਦਾ ਭਾഷਾ ਚੁਣੋ",
        voiceAssist: "ਵੌਇਸ ਅਸਿਸਟੈਂਟ",
        voiceDesc: "ਮਾਈਕ੍ਰੋਫੋਨ 'ਤੇ ਟੈਪ ਕਰੋ ਅਤੇ ਆਪਣੀ ਸਮੱਸਿਆ ਬੋਲੋ",
        dashboard: "ਡੈਸ਼ਬੋਰਡ",
        schemes: "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ",
        weather: "ਮੌਸਮ ਦੇ ਅਪਡੇਟਸ",
        disease: "ਬਿਮਾਰੀ ਦੀ ਪਛਾਣ",
        uploadPhoto: "ਫਸਲ ਦੀ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ",
        detectBtn: "ਬਿਮਾਰੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ",
        back: "ਡੈਸ਼ਬੋਰਡ ਤੇ ਵਾਪਸ ਜਾਓ",
        schemesDesc: "ਤੁਹਾਡੇ ਲਈ ਉਪਲਬਧ ਯੋਜਨਾਵਾਂ",
        applyNow: "ਹੁਣੇ ਅਪਲਾਈ ਕਰੋ",
        analyzing: "ਵਿਸ਼ਲੇਸ਼ਣ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...",
        diseaseFound: "ਬਿਮਾਰੀ ਮਿਲੀ",
        medicine: "ਦਵਾਈ ਦਾ ਸੁਝਾਅ ਦਿੱਤਾ",
        precautions: "ਸਾਵਧਾਨੀਆਂ",
        unknownDisease: "ਬਿਮਾਰੀ ਦੀ ਪਛয়াਣ ਨਹੀਂ ਹੋ ਸਕੀ। ਕਿਰਪਾ ਕਰਕੇ ਸਾਫ਼ ਤਸਵੀਰ ਅਪਲੋਡ ਕਰੋ।"
    },
    bn: {
        welcome: "কিসান মিত্র-তে আপনাকে স্বাগতম",
        loginDesc: "কৃষক পরিষেবাগুলি অ্যাক্সেস করতে আপনার বিবরণ লিখুন",
        kisanIdLabel: "কিসান আইডি (উদাঃ KISAN123)",
        mobileLabel: "মোবাইল নম্বর",
        sendOtp: "OTP পাঠান",
        verifyOtp: "OTP যাচাই করুন",
        otpLabel: "৪-সংখ্যার OTP লিখুন",
        selectLang: "আপনার পছন্দের ভাষা নির্বাচন করুন",
        voiceAssist: "ভয়েস অ্যাসিস্ট্যান্ট",
        voiceDesc: "মাইক্রোফোনে ট্যাপ করুন এবং আপনার সমস্যাটি বলুন",
        dashboard: "ড্যাশবোর্ড",
        schemes: "সরকারি স্কিম",
        weather: "আবহাওয়ার আপডেট",
        disease: "রোগ নির্ণয়",
        uploadPhoto: "ফসলের ছবি আপলোড রেন",
        detectBtn: "রোগ বিশ্লেষণ করুন",
        back: "ড্যাশবোর্ডে ফিরে যান",
        schemesDesc: "আপনার জন্য উপলব্ধ স্কিম",
        applyNow: "এখনই আবেদন করুন",
        analyzing: "বিশ্লেষণ করা হচ্ছে...",
        diseaseFound: "রোগ সনাক্ত করা হয়েছে",
        medicine: "পরামর্শিত ওষুধ",
        precautions: "সতর্কতা",
        unknownDisease: "রোগ সনাক্ত করা যায়নি। দয়া করে একটি পরিষ্কার ছবি আপলোড করুন।"
    }
};

const t = (key) => {
    const lang = state.user?.language || 'en';
    return translations[lang][key] || key;
};

// --- Routing System ---
const navigateTo = (path) => {
    state.currentPath = path;
    window.location.hash = path;
    // render will be called by hashchange listener, but if we are already on that hash, it won't trigger
    render();
};

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && hash !== state.currentPath) {
        state.currentPath = hash;
        render();
    }
});

// --- API Service (Mocking connection to Django backend) ---
const API_URL = 'http://127.0.0.1:8000/api';

const api = {
    sendOtp: async (kisan_id, mobile_number) => {
        // Mock connection since we might not have the backend running instantly during dev tests
        // return fetch(`${API_URL}/auth/send-otp/`, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ kisan_id, mobile_number })
        // }).then(res => res.json());

        return new Promise(resolve => setTimeout(() => resolve({ message: 'OTP Sent' }), 1000));
    },
    verifyOtp: async (kisan_id, otp) => {
        if (otp === '1234') {
            return new Promise(resolve => setTimeout(() => resolve({ token: 'mock-token', farmer: { kisan_id } }), 1000));
        } else {
            return Promise.reject(new Error("Invalid OTP"));
        }
    }
}

// --- Views ---
const loginView = () => {
    return `
    <div class="flex items-center justify-center min-h-screen p-4 fade-in">
        <div class="glass-card max-w-md w-full p-8 rounded-2xl text-center">
            <div class="mb-6 flex justify-center">
                <div class="bg-green-100 p-4 rounded-full">
                    <i class="fa-solid fa-seedling text-4xl text-green-600"></i>
                </div>
            </div>
            <h1 class="text-3xl font-bold text-green-900 mb-2">${t('welcome')}</h1>
            <p class="text-gray-600 mb-8">${t('loginDesc')}</p>
            
            <form id="login-form">
                <div id="step-1">
                    <div class="text-left mb-4">
                        <label class="block text-sm font-semibold text-gray-700 mb-1">${t('kisanIdLabel')}</label>
                        <input type="text" id="kisan-id" class="input-field" placeholder="KISAN123" required>
                    </div>
                    <div class="text-left mb-6">
                        <label class="block text-sm font-semibold text-gray-700 mb-1">${t('mobileLabel')}</label>
                        <input type="tel" id="mobile" class="input-field" placeholder="9876543210" required>
                    </div>
                    <button type="button" id="btn-send-otp" class="btn-primary w-full py-3 rounded-xl font-bold text-lg shadow-lg flex justify-center items-center gap-2">
                        <span>${t('sendOtp')}</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>

                <div id="step-2" class="hidden">
                    <div class="text-left mb-6">
                        <label class="block text-sm font-semibold text-gray-700 mb-1">${t('otpLabel')}</label>
                        <input type="text" id="otp" class="input-field text-center text-2xl tracking-widest" placeholder="----" maxlength="4">
                    </div>
                    <button type="button" id="btn-verify-otp" class="btn-primary w-full py-3 rounded-xl font-bold text-lg shadow-lg flex justify-center items-center gap-2">
                        <span>${t('verifyOtp')}</span>
                        <i class="fa-solid fa-check-circle"></i>
                    </button>
                </div>
            </form>
            
            <div id="error-msg" class="text-red-500 mt-4 text-sm hidden font-medium"></div>
        </div>
    </div>
    `;
};

const languageView = () => {
    return `
    <div class="flex items-center justify-center min-h-screen p-4 fade-in">
        <div class="glass-card max-w-lg w-full p-8 rounded-2xl text-center">
            <h1 class="text-3xl font-bold text-green-900 mb-6">${t('selectLang')}</h1>
            
            <div class="grid grid-cols-2 gap-4">
                <button onclick="selectLanguage('en')" class="p-4 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-lg font-bold text-gray-800">English</button>
                <button onclick="selectLanguage('hi')" class="p-4 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-lg font-bold text-gray-800">हिंदी</button>
                <button onclick="selectLanguage('te')" class="p-4 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-lg font-bold text-gray-800">తెలుగు</button>
                <button onclick="selectLanguage('ta')" class="p-4 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-lg font-bold text-gray-800">தமிழ்</button>
                <button onclick="selectLanguage('kn')" class="p-4 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-lg font-bold text-gray-800">ಕನ್ನಡ</button>
                <button onclick="selectLanguage('mr')" class="p-4 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-lg font-bold text-gray-800">मराठी</button>
                <button onclick="selectLanguage('pa')" class="p-4 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-lg font-bold text-gray-800">ਪੰਜਾਬੀ</button>
                <button onclick="selectLanguage('bn')" class="p-4 border-2 border-green-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-lg font-bold text-gray-800">বাংলা</button>
            </div>
        </div>
    </div>
    `;
};

const dashboardView = () => {
    return `
    <div class="fade-in max-w-6xl mx-auto p-4 sm:p-8">
        <header class="flex justify-between items-center mb-8 glass-card p-4 rounded-xl">
            <div class="flex items-center gap-3">
                <div class="bg-green-100 p-2 rounded-full">
                    <i class="fa-solid fa-leaf text-2xl text-green-600"></i>
                </div>
                <h1 class="text-2xl font-bold text-green-900">Kisan Mitra</h1>
            </div>
            <button onclick="logout()" class="text-gray-500 hover:text-red-500 transition font-medium">
                Logout <i class="fa-solid fa-sign-out-alt ml-1"></i>
            </button>
        </header>

        <!-- Voice Assistant Section -->
        <div class="glass-card mb-8 p-8 flex flex-col items-center justify-center text-center rounded-2xl border-t-4 border-t-green-500">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">${t('voiceAssist')}</h2>
            <p class="text-gray-600 mb-6">${t('voiceDesc')}</p>
            
            <button id="btn-voice" class="bg-green-500 hover:bg-green-600 text-white w-24 h-24 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 transition-transform transform hover:scale-110 mb-6">
                <i class="fa-solid fa-microphone text-4xl"></i>
            </button>
            
            <div id="voice-status" class="text-lg font-medium text-green-700 min-h-[30px]"></div>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div onclick="navigateTo('/disease')" class="glass-card p-6 rounded-xl cursor-pointer hover:border-green-400 group">
                <div class="text-green-600 bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <i class="fa-solid fa-bug text-xl"></i>
                </div>
                <h3 class="font-bold text-lg mb-2">${t('disease')}</h3>
                <p class="text-sm text-gray-500">Upload crop photo to identify disease and remedies.</p>
            </div>
            <div onclick="navigateTo('/weather')" class="glass-card p-6 rounded-xl cursor-pointer hover:border-green-400 group">
                <div class="text-blue-600 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <i class="fa-solid fa-cloud-sun text-xl"></i>
                </div>
                <h3 class="font-bold text-lg mb-2">${t('weather')}</h3>
                <p class="text-sm text-gray-500">Check current weather and forecasts for your region.</p>
            </div>
            <div onclick="navigateTo('/schemes')" class="glass-card p-6 rounded-xl cursor-pointer hover:border-green-400 group">
                <div class="text-yellow-600 bg-yellow-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <i class="fa-solid fa-file-invoice text-xl"></i>
                </div>
                <h3 class="font-bold text-lg mb-2">${t('schemes')}</h3>
                <p class="text-sm text-gray-500">Explore eligible government benefits and subsidies.</p>
            </div>
            <div onclick="navigateTo('/fassi-chat')" class="glass-card p-6 rounded-xl cursor-pointer hover:border-green-400 group relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 border border-green-200 shadow-md">
                <div class="absolute -right-3 -top-3 text-green-200 opacity-40 group-hover:scale-110 transition duration-500">
                    <i class="fa-solid fa-robot text-7xl"></i>
                </div>
                <div class="text-white bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition relative z-10 shadow-sm">
                    <i class="fa-solid fa-message text-xl"></i>
                </div>
                <h3 class="font-bold text-lg mb-2 relative z-10 text-green-900">F.A.S.S.I Chat</h3>
                <p class="text-sm text-green-700 relative z-10">Ask our AI assistant any farming questions, tailored to your profile.</p>
            </div>
            <div onclick="navigateTo('/profile-summary')" class="glass-card p-6 rounded-xl cursor-pointer hover:border-green-400 group relative overflow-hidden">
                <div class="absolute -right-3 -top-3 text-purple-100 opacity-50 group-hover:scale-110 transition duration-500">
                    <i class="fa-solid fa-address-card text-7xl"></i>
                </div>
                <div class="text-purple-600 bg-purple-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition relative z-10">
                    <i class="fa-solid fa-user-check text-xl"></i>
                </div>
                <h3 class="font-bold text-lg mb-2 relative z-10">My Profile</h3>
                <p class="text-sm text-gray-500 relative z-10">View your detailed farm profile and AI risk analysis.</p>
            </div>
        </div>
    </div>
    `;
}

const diseaseView = () => {
    return `
    <div class="fade-in max-w-4xl mx-auto p-4 sm:p-8">
        <button onclick="navigateTo('/dashboard')" class="text-green-700 hover:text-green-900 mb-6 font-bold flex items-center gap-2">
            <i class="fa-solid fa-arrow-left"></i> ${t('back')}
        </button>
        <div class="glass-card p-8 rounded-2xl text-center">
            <h2 class="text-3xl font-bold text-green-900 mb-6">${t('disease')}</h2>
            
            <div id="upload-container" class="border-4 border-dashed border-green-200 rounded-xl p-10 mb-6 bg-green-50 flex flex-col items-center justify-center cursor-pointer hover:bg-green-100 transition" onclick="document.getElementById('photo-upload').click()">
                <div id="upload-placeholder">
                    <i class="fa-solid fa-camera text-5xl text-green-400 mb-4"></i>
                    <p class="text-gray-600 font-medium">${t('uploadPhoto')}</p>
                </div>
                <img id="image-preview" class="hidden rounded-lg max-h-64 object-contain shadow-md" />
                <input type="file" class="hidden" id="photo-upload" accept="image/*">
            </div>
            
            <button id="btn-analyze" class="btn-primary py-3 px-8 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed">
                <span>${t('detectBtn')}</span>
                <i class="fa-solid fa-microscope"></i>
            </button>
            
            <!-- Analysis Result Box -->
            <div id="analysis-result" class="hidden mt-8 text-left bg-white p-6 rounded-xl border border-green-200 shadow-sm transition-all">
                <div id="analysis-loading" class="text-center py-4">
                    <i class="fa-solid fa-spinner fa-spin text-4xl text-green-500 mb-3"></i>
                    <p class="text-gray-600 font-medium">${t('analyzing')}</p>
                    <p class="text-xs text-gray-400 mt-2">Connecting to Agrarian AI Engine...</p>
                </div>
                
                <div id="analysis-content" class="hidden prose prose-green max-w-none text-gray-800 whitespace-pre-wrap leading-relaxed">
                    <!-- ChatGPT Markdown Response Will Go Here -->
                </div>
            </div>
            
        </div>
    </div>
    `;
}

const weatherView = () => {
    return `
    <div class="fade-in max-w-4xl mx-auto p-4 sm:p-8">
        <button onclick="navigateTo('/dashboard')" class="text-green-700 hover:text-green-900 mb-6 font-bold flex items-center gap-2">
            <i class="fa-solid fa-arrow-left"></i> ${t('back')}
        </button>
        <div class="glass-card p-8 rounded-2xl text-center bg-blue-50">
            <h2 class="text-3xl font-bold text-blue-900 mb-6">${t('weather')}</h2>
            <div class="flex items-center justify-center gap-6 mb-8">
                <i class="fa-solid fa-cloud-sun text-6xl text-blue-500"></i>
                <div class="text-left">
                    <p class="text-5xl font-bold text-gray-800">32°C</p>
                    <p class="text-gray-600 text-lg">Partly Cloudy</p>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4 border-t border-blue-200 pt-6">
                <div><p class="text-gray-500">Humidity</p><p class="font-bold">65%</p></div>
                <div><p class="text-gray-500">Wind</p><p class="font-bold">12 km/h</p></div>
                <div><p class="text-gray-500">Rain Prob.</p><p class="font-bold">20%</p></div>
            </div>
        </div>
    </div>
    `;
}

const schemesView = () => {
    return `
    <div class="fade-in max-w-4xl mx-auto p-4 sm:p-8">
        <button onclick="navigateTo('/dashboard')" class="text-green-700 hover:text-green-900 mb-6 font-bold flex items-center gap-2">
            <i class="fa-solid fa-arrow-left"></i> ${t('back')}
        </button>
        <h2 class="text-3xl font-bold text-green-900 mb-6">${t('schemesDesc')}</h2>
        
        <div class="grid gap-6">
            <div class="glass-card p-6 rounded-xl border-l-4 border-l-yellow-500">
                <h3 class="font-bold text-xl text-gray-800 mb-2">Pradhan Mantri Fasal Bima Yojana</h3>
                <p class="text-gray-600 mb-4">Crop insurance scheme for farmers to cover crop failures.</p>
                <button class="bg-green-100 text-green-800 px-4 py-2 font-bold rounded-lg hover:bg-green-200 transition">${t('applyNow')}</button>
            </div>
        </div>
    </div>
    `;
}

// --- FASSI Chat View ---
const fassiChatView = () => {
    return `
    <div class="fade-in max-w-4xl mx-auto p-4 sm:p-8 flex flex-col h-[85vh]">
        <button onclick="navigateTo('/dashboard')" class="text-green-700 hover:text-green-900 mb-4 font-bold flex items-center gap-2">
            <i class="fa-solid fa-arrow-left"></i> ${t('back')}
        </button>
        
        <div class="glass-card rounded-2xl flex-grow flex flex-col overflow-hidden border border-green-200 shadow-xl bg-white">
            <!-- Header -->
            <div class="bg-gradient-to-r from-green-600 to-green-700 p-4 flex items-center gap-4 text-white">
                <div class="bg-white text-green-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-md">
                    <i class="fa-solid fa-robot"></i>
                </div>
                <div>
                    <h2 class="text-xl font-bold">F.A.S.S.I</h2>
                    <p class="text-green-100 text-sm">Farmer AI Support Interface</p>
                </div>
            </div>
            
            <!-- Chat History Area -->
            <div id="fassi-chat-history" class="flex-grow p-6 overflow-y-auto bg-gray-50 flex flex-col gap-4">
                <div class="flex items-start gap-4">
                    <div class="bg-green-100 text-green-800 w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-lg"><i class="fa-solid fa-robot"></i></div>
                    <div class="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm max-w-[85%]">
                        <p class="text-gray-800 leading-relaxed">Namaste! I am FASSI. I have securely loaded your Farm Profile (including your Soil, Water Resources, and Acreage). What agricultural advice can I help you with today?</p>
                    </div>
                </div>
            </div>
            
            <!-- Context Indicator -->
            <div class="px-6 py-2 bg-gray-100 text-xs text-gray-500 font-medium border-t border-gray-200 flex justify-between items-center">
                <span><i class="fa-solid fa-link text-green-500 mr-1"></i> Profile Context Linked</span>
                <span id="fassi-lang-indicator" class="uppercase bg-white px-2 py-1 rounded shadow-sm">EN</span>
            </div>

            <!-- Input Area -->
            <div class="p-4 bg-white border-t border-gray-200 flex gap-3 items-end">
                <textarea id="fassi-input" rows="1" class="flex-grow p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white resize-none transition-all mr-2" placeholder="Ask about crops, timing, diseases..."></textarea>
                <button id="fassi-send" class="bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-xl flex items-center justify-center shadow-md transition-transform transform hover:scale-105 flex-shrink-0">
                    <i class="fa-solid fa-paper-plane text-xl"></i>
                </button>
            </div>
        </div>
    </div>
    `;
};

// --- Farmer Onboarding Wizard View ---
const onboardingWizardView = () => {
    return `
    <div class="fade-in max-w-3xl mx-auto p-4 sm:p-8">
        <div class="glass-card p-8 rounded-2xl w-full relative">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-bold text-green-900">Farmer Registration</h2>
                <span id="wizard-counter" class="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">Step 1 of 8</span>
            </div>
            
            <div class="wizard-progress-bar">
                <div id="wizard-progress" class="wizard-progress-fill" style="width: 12.5%;"></div>
            </div>

            <form id="onboarding-form">
                
                <!-- STEP 1: Basic Details -->
                <div class="wizard-step active" id="wizard-step-1">
                    <h3 class="text-xl font-bold text-gray-800 mb-6">1. Basic Details</h3>
                    <div class="space-y-4 text-left">
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                            <input type="text" id="ob-name" class="input-field" placeholder="E.g. Ramesh Kumar" required>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-1">Age</label>
                                <input type="number" id="ob-age" class="input-field" placeholder="Years" required min="18">
                            </div>
                            <div>
                                <label class="block text-sm font-semibold text-gray-700 mb-1">State</label>
                                <select id="ob-state" class="input-field" required>
                                    <option value="">Select State</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- STEP 2: Land & Irrigation -->
                <div class="wizard-step" id="wizard-step-2">
                    <h3 class="text-xl font-bold text-gray-800 mb-6">2. Land Holdings</h3>
                    <div class="space-y-6 text-left">
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-1">Total Farmland (Acres)</label>
                            <input type="number" step="0.5" id="ob-acres" class="input-field" placeholder="E.g. 5" required min="0.1">
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Ownership Type</label>
                            <div class="grid grid-cols-2 gap-4">
                                <label>
                                    <input type="radio" name="ob-owner" value="Owned" class="radio-card-input" required>
                                    <div class="radio-card-label"><i class="fa-solid fa-house-user text-2xl text-green-600"></i>Self-Owned</div>
                                </label>
                                <label>
                                    <input type="radio" name="ob-owner" value="Leased" class="radio-card-input">
                                    <div class="radio-card-label"><i class="fa-solid fa-file-signature text-2xl text-blue-600"></i>Leased (Tenant)</div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- STEP 3: Soil Data -->
                <div class="wizard-step" id="wizard-step-3">
                    <h3 class="text-xl font-bold text-gray-800 mb-6">3. Soil Information</h3>
                    <div class="space-y-6 text-left">
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Primary Soil Type</label>
                            <select id="ob-soil" class="input-field" required>
                                <option value="">Select Soil Type</option>
                                <option value="Alluvial">Alluvial (Loamy)</option>
                                <option value="Black">Black (Cotton Soil)</option>
                                <option value="Red">Red & Yellow</option>
                                <option value="Laterite">Laterite</option>
                                <option value="Sandy">Arid/Sandy</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Do you have a Soil Health Card?</label>
                            <div class="grid grid-cols-2 gap-4">
                                <label>
                                    <input type="radio" name="ob-shc" value="Yes" class="radio-card-input" required>
                                    <div class="radio-card-label font-bold text-green-700">Yes</div>
                                </label>
                                <label>
                                    <input type="radio" name="ob-shc" value="No" class="radio-card-input">
                                    <div class="radio-card-label font-bold text-gray-500">No</div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- STEP 4: Water Resources -->
                <div class="wizard-step" id="wizard-step-4">
                    <h3 class="text-xl font-bold text-gray-800 mb-6">4. Water & Irrigation</h3>
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Primary Water Source</label>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <label>
                            <input type="radio" name="ob-water" value="Borewell" class="radio-card-input" required>
                            <div class="radio-card-label"><i class="fa-solid fa-faucet-drip text-2xl text-blue-500"></i>Borewell</div>
                        </label>
                        <label>
                            <input type="radio" name="ob-water" value="Canal" class="radio-card-input">
                            <div class="radio-card-label"><i class="fa-solid fa-water text-2xl text-cyan-500"></i>Canal</div>
                        </label>
                        <label>
                            <input type="radio" name="ob-water" value="Rainfed" class="radio-card-input">
                            <div class="radio-card-label"><i class="fa-solid fa-cloud-rain text-2xl text-gray-500"></i>Rainfed</div>
                        </label>
                    </div>
                </div>

                <!-- STEP 5: Crop History -->
                <div class="wizard-step" id="wizard-step-5">
                    <h3 class="text-xl font-bold text-gray-800 mb-6">5. Crop History</h3>
                    <div class="text-left mb-4">
                        <label class="block text-sm font-semibold text-gray-700 mb-2">What crop did you grow primarily last year?</label>
                        <select id="ob-crop" class="input-field" required>
                            <option value="">Select Primary Crop</option>
                            <option value="Wheat">Wheat</option>
                            <option value="Rice/Paddy">Rice / Paddy</option>
                            <option value="Cotton">Cotton</option>
                            <option value="Sugarcane">Sugarcane</option>
                            <option value="Maize">Maize</option>
                            <option value="Millets">Millets / Jowar</option>
                            <option value="Groundnut">Groundnut</option>
                            <option value="Vegetables">Vegetables / Horticulture</option>
                        </select>
                    </div>
                </div>

                <!-- STEP 6: Machinery & Resources -->
                <div class="wizard-step" id="wizard-step-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-6">6. Machinery & Tech</h3>
                    <label class="block text-sm font-semibold text-gray-700 mb-4 text-left">Select all that you own:</label>
                    <div class="grid grid-cols-2 gap-4">
                        <label>
                            <input type="checkbox" id="ob-mach-tractor" value="Tractor" class="radio-card-input">
                            <div class="radio-card-label"><i class="fa-solid fa-tractor text-2xl text-red-500"></i>Tractor</div>
                        </label>
                        <label>
                            <input type="checkbox" id="ob-mach-drip" value="Drip System" class="radio-card-input">
                            <div class="radio-card-label"><i class="fa-solid fa-droplet text-2xl text-blue-400"></i>Drip System</div>
                        </label>
                    </div>
                </div>

                <!-- STEP 7: Market & Finance -->
                <div class="wizard-step" id="wizard-step-7">
                    <h3 class="text-xl font-bold text-gray-800 mb-6">7. Finance & Markets</h3>
                    <div class="space-y-6 text-left">
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Do you have an active agricultural loan?</label>
                            <div class="grid grid-cols-2 gap-4">
                                <label>
                                    <input type="radio" name="ob-loan" value="Yes" class="radio-card-input" required>
                                    <div class="radio-card-label font-bold text-red-500">Yes, Loan Active</div>
                                </label>
                                <label>
                                    <input type="radio" name="ob-loan" value="No" class="radio-card-input">
                                    <div class="radio-card-label font-bold text-green-500">No Loans</div>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Where do you sell your crop?</label>
                            <select id="ob-market" class="input-field" required>
                                <option value="">Select Market</option>
                                <option value="APMC">Local Mandi (APMC)</option>
                                <option value="Private">Private Traders</option>
                                <option value="Direct">Direct to Consumers/FPO</option>
                                <option value="MSP">Govt. Procurement (MSP)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- STEP 8: Farmer Goals -->
                <div class="wizard-step" id="wizard-step-8">
                    <h3 class="text-xl font-bold text-gray-800 mb-6">8. Farm Goals</h3>
                    <label class="block text-sm font-semibold text-gray-700 mb-4 text-left">What is your primary goal for the next season?</label>
                    <div class="grid gap-3">
                        <label>
                            <input type="radio" name="ob-goal" value="Increase Yield" class="radio-card-input" required>
                            <div class="radio-card-label flex-row justify-start pl-4 py-3"><i class="fa-solid fa-arrow-trend-up text-green-500 w-6"></i> Increase Overall Yield</div>
                        </label>
                        <label>
                            <input type="radio" name="ob-goal" value="Reduce Cost" class="radio-card-input">
                            <div class="radio-card-label flex-row justify-start pl-4 py-3"><i class="fa-solid fa-piggy-bank text-yellow-500 w-6"></i> Reduce Costs (Fertilizer/Water)</div>
                        </label>
                        <label>
                            <input type="radio" name="ob-goal" value="Organic" class="radio-card-input">
                            <div class="radio-card-label flex-row justify-start pl-4 py-3"><i class="fa-solid fa-leaf text-green-600 w-6"></i> Transition to Organic Farming</div>
                        </label>
                    </div>
                </div>

                <!-- Navigation Buttons -->
                <div class="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
                    <button type="button" id="wiz-prev" class="px-6 py-2 rounded-lg font-bold text-gray-500 hover:bg-gray-100 invisible">Back</button>
                    <!-- Spacer if prev is hidden -->
                    <div id="wiz-spacer" class="flex-grow"></div>
                    <button type="button" id="wiz-next" class="btn-primary px-8 py-2 rounded-lg font-bold shadow-md">Next Step</button>
                    <button type="button" id="wiz-submit" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg font-bold shadow-lg hidden">Submit Profile</button>
                </div>
                
                <p id="wiz-error" class="text-red-500 text-sm font-bold mt-4 hidden text-center bg-red-50 p-2 rounded-lg">Please answer all required questions in this step.</p>

            </form>
        </div>
    </div>
    `;
};

// --- Farmer Profile Summary View ---
const profileSummaryView = () => {
    return `
    <div class="fade-in max-w-5xl mx-auto p-4 sm:p-8">
        <h2 class="text-3xl font-bold text-green-900 mb-6 text-center">Your Kisan Profile</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Details Column -->
            <div class="md:col-span-2 glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden bg-white">
                <div class="absolute -right-6 -top-6 text-green-100 opacity-40">
                    <i class="fa-solid fa-id-badge text-[12rem]"></i>
                </div>
                <h3 class="text-xl font-bold border-b pb-2 mb-6 text-gray-800">Farmer Details</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 relative z-10" id="summary-details-grid">
                    <!-- Populated dynamically via JS -->
                </div>
            </div>

            <!-- AI Insight Column -->
            <div class="glass-card p-6 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border border-blue-100 flex flex-col">
                <h3 class="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-robot text-blue-500"></i> AI Farm Analysis
                </h3>
                
                <div class="mb-5 bg-white p-3 rounded-lg shadow-sm">
                    <p class="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">Calculated Risk Profile</p>
                    <div id="ai-risk-badge" class="inline-block px-3 py-1 rounded-md text-sm font-bold">...</div>
                </div>
                
                <div class="mb-5 bg-white p-3 rounded-lg shadow-sm">
                    <p class="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2">Recommended Crops</p>
                    <div id="ai-crops" class="flex flex-wrap gap-2">
                        <!-- Tags inserted by JS -->
                    </div>
                </div>

                <div class="bg-white p-4 rounded-xl shadow-sm text-sm text-gray-700 italic border-l-4 border-l-blue-400 font-medium flex-grow" id="ai-insight-text">
                    Loading AI Insights based on your soil and water constraints...
                </div>
            </div>
        </div>
        
        <div class="text-center">
            <button onclick="navigateTo('/dashboard')" class="bg-green-600 hover:bg-green-700 text-white py-4 px-12 rounded-2xl font-bold text-xl shadow-xl transition-transform hover:scale-105 inline-flex items-center gap-2">
                Enter Dashboard <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
    `;
}

// --- Render Logic ---
const render = () => {
    const app = document.getElementById('app-container');

    if (state.currentPath === '/login' || state.currentPath === '') {
        app.innerHTML = loginView();
        setupLoginEvents();
    } else if (state.currentPath === '/language') {
        app.innerHTML = languageView();
    } else if (state.currentPath === '/dashboard') {
        if (!state.user) {
            navigateTo('/login');
            return;
        }
        app.innerHTML = dashboardView();
        setupVoiceEvents();
    } else if (state.currentPath === '/disease') {
        app.innerHTML = diseaseView();
        setupDiseaseEvents();
    } else if (state.currentPath === '/weather') {
        app.innerHTML = weatherView();
    } else if (state.currentPath === '/schemes') {
        app.innerHTML = schemesView();
    } else if (state.currentPath === '/onboarding') {
        app.innerHTML = onboardingWizardView();
        setupOnboardingEvents();
    } else if (state.currentPath === '/profile-summary') {
        app.innerHTML = profileSummaryView();
        setupSummaryEvents();
    } else {
        app.innerHTML = `<div class="p-10 text-center"><h2>Page Not Found!</h2><button onclick="navigateTo('/login')" class="btn-primary p-2 rounded mt-2">Go Home</button></div>`;
    }
};

// --- View Specific Handlers ---
const setupLoginEvents = () => {
    let currentKisanId = '';

    document.getElementById('btn-send-otp')?.addEventListener('click', async () => {
        const kId = document.getElementById('kisan-id').value;
        const mob = document.getElementById('mobile').value;
        const err = document.getElementById('error-msg');

        if (!kId || !mob) {
            err.innerText = "Please fill all fields.";
            err.classList.remove('hidden');
            return;
        }

        const btn = document.getElementById('btn-send-otp');
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

        try {
            await api.sendOtp(kId, mob);
            currentKisanId = kId;
            document.getElementById('step-1').classList.add('hidden');
            document.getElementById('step-2').classList.remove('hidden');
            err.classList.add('hidden');
        } catch (e) {
            err.innerText = "Failed to send OTP.";
            err.classList.remove('hidden');
        }
        btn.innerHTML = `<span>${t('sendOtp')}</span> <i class="fa-solid fa-arrow-right"></i>`;
    });

    document.getElementById('btn-verify-otp')?.addEventListener('click', async () => {
        const otp = document.getElementById('otp').value;
        const err = document.getElementById('error-msg');

        if (!otp) return;

        const btn = document.getElementById('btn-verify-otp');
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

        try {
            const data = await api.verifyOtp(currentKisanId, otp);
            state.user = { kisan_id: currentKisanId, token: data.token, language: 'en' };

            // Check if profile exists; if not, redirect to Onboarding
            const existingProfile = localStorage.getItem('farmerProfile');
            if (existingProfile) {
                navigateTo('/language');
            } else {
                navigateTo('/onboarding');
            }
        } catch (e) {
            err.innerText = "Invalid OTP. Use 1234.";
            err.classList.remove('hidden');
        }
        btn.innerHTML = `<span>${t('verifyOtp')}</span> <i class="fa-solid fa-check-circle"></i>`;
    });
};

window.selectLanguage = (lang) => {
    state.user.language = lang;
    navigateTo('/dashboard');
};

window.logout = () => {
    state.user = null;
    navigateTo('/login');
};

// --- Disease Detection Logic ---
const setupDiseaseEvents = () => {
    const fileInput = document.getElementById('photo-upload');
    const imagePreview = document.getElementById('image-preview');
    const placeholder = document.getElementById('upload-placeholder');
    const btnAnalyze = document.getElementById('btn-analyze');

    let base64ImageString = "";

    fileInput?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (evt) {
                base64ImageString = evt.target.result;
                imagePreview.src = base64ImageString;
                imagePreview.classList.remove('hidden');
                placeholder.classList.add('hidden');
                // Hide past results if changing image
                document.getElementById('analysis-result').classList.add('hidden');
            }
            reader.readAsDataURL(file);
        }
    });

    btnAnalyze?.addEventListener('click', async () => {
        if (!base64ImageString) {
            alert("Please upload a photo first!");
            return;
        }

        const resultBox = document.getElementById('analysis-result');
        const loadingBox = document.getElementById('analysis-loading');
        const contentBox = document.getElementById('analysis-content');

        // Show loading state
        resultBox.classList.remove('hidden');
        loadingBox.classList.remove('hidden');
        contentBox.classList.add('hidden');
        btnAnalyze.disabled = true;

        try {
            const response = await fetch('http://127.0.0.1:8000/api/analyze-disease/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    image_data: base64ImageString,
                    language: state.user?.language || 'en'
                })
            });

            const data = await response.json();

            if (response.ok) {
                // Formatting the markdown response roughly into HTML for simple rendering
                let htmlText = data.analysis
                    // 1. Replace **bold** text securely
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    // 2. Headings
                    .replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold mt-4 mb-2 text-green-800">$1</h3>')
                    .replace(/## (.*?)\n/g, '<h2 class="text-2xl font-bold mt-6 mb-3 text-green-900 border-b pb-2">$1</h2>')
                    .replace(/# (.*?)\n/g, '<h1 class="text-3xl font-bold mt-8 mb-4 text-green-900">$1</h1>')
                    // 3. Bullet points
                    .replace(/- (.*?)\n/g, '<li class="ml-4 list-disc mb-1">$1</li>')
                    // 4. Asterisk bullet points (Gemini often sends * as bullets)
                    .replace(/\* (.*?)\n/g, '<li class="ml-4 list-disc mb-1">$1</li>')
                    // 5. Line breaks for regular paragraph text
                    .replace(/\n\n/g, '<br><br>');

                contentBox.innerHTML = htmlText;
            } else {
                contentBox.innerHTML = `<p class="text-red-500 font-bold">Error: ${data.error || 'Failed to analyze picture.'}</p>`;
            }
        } catch (e) {
            contentBox.innerHTML = `<p class="text-red-500 font-bold">Network Error: Could not reach the Agrarian AI Assistant backend. Is the server running?</p>`;
            console.error(e);
        } finally {
            loadingBox.classList.add('hidden');
            contentBox.classList.remove('hidden');
            btnAnalyze.disabled = false;
        }
    });
};

// --- Web Speech API (Voice Assistant) ---
const setupVoiceEvents = () => {
    const btnVoice = document.getElementById('btn-voice');
    const statusText = document.getElementById('voice-status');

    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        statusText.innerText = "Speech Recognition API not supported in this browser.";
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = state.user?.language === 'hi' ? 'hi-IN' : 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    btnVoice.addEventListener('click', () => {
        btnVoice.classList.add('animate-pulse', 'bg-red-500');
        statusText.innerText = "Listening... Speak now";
        recognition.start();
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        statusText.innerText = `You said: "${transcript}"`;
        btnVoice.classList.remove('animate-pulse', 'bg-red-500');

        // Mock AI response
        setTimeout(() => {
            const responseText = state.user.language === 'en'
                ? "I am analyzing your query. Please give me a moment."
                : "मैं आपकी प्रश्न का विश्लेषण कर रहा हूँ। कृपया कुछ क्षण दें।";

            statusText.innerText = `Assistant: ${responseText}`;
            speak(responseText, state.user.language);
        }, 1000);
    };

    recognition.onerror = (event) => {
        console.error("Speech error", event);
        btnVoice.classList.remove('animate-pulse', 'bg-red-500');
        statusText.innerText = "Sorry, I couldn't hear you clearly.";
    };
};

const speak = (text, lang) => {
    // Only synthesize if supported
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
        window.speechSynthesis.speak(utterance);
    }
};

// --- Onboarding Logic ---
const setupOnboardingEvents = () => {
    let currentStep = 1;
    const totalSteps = 8;
    const wizardCounter = document.getElementById('wizard-counter');
    const progressBar = document.getElementById('wizard-progress');
    const btnNext = document.getElementById('wiz-next');
    const btnPrev = document.getElementById('wiz-prev');
    const btnSubmit = document.getElementById('wiz-submit');
    const errorMsg = document.getElementById('wiz-error');

    // Attempt to load partial save
    const partialData = JSON.parse(localStorage.getItem('farmerProfileDraft') || '{}');
    if (Object.keys(partialData).length > 0) {
        // Hydrate form
        Object.keys(partialData).forEach(key => {
            const el = document.getElementById(`ob-${key}`);
            if (el) {
                if (el.type === 'checkbox' || el.type === 'radio') {
                    const group = document.getElementsByName(`ob-${key}`);
                    if (group.length > 0) {
                        group.forEach(r => { if (r.value === partialData[key]) r.checked = true; });
                    } else if (el.value === partialData[key]) {
                        el.checked = true;
                    }
                } else {
                    el.value = partialData[key];
                }
            }
        });
    }

    const updateUI = () => {
        // Hide all steps
        for (let i = 1; i <= totalSteps; i++) {
            document.getElementById(`wizard-step-${i}`).classList.remove('active');
        }
        // Show current step
        document.getElementById(`wizard-step-${currentStep}`).classList.add('active');

        // Update progress
        wizardCounter.innerText = `Step ${currentStep} of ${totalSteps}`;
        progressBar.style.width = `${(currentStep / totalSteps) * 100}%`;

        // Buttons visibility
        btnPrev.classList.toggle('hidden', currentStep === 1);
        btnPrev.classList.toggle('invisible', currentStep === 1);

        if (currentStep === totalSteps) {
            btnNext.classList.add('hidden');
            btnSubmit.classList.remove('hidden');
        } else {
            btnNext.classList.remove('hidden');
            btnSubmit.classList.add('hidden');
        }
        errorMsg.classList.add('hidden');
    };

    const validateStep = () => {
        const stepDiv = document.getElementById(`wizard-step-${currentStep}`);
        const inputs = stepDiv.querySelectorAll('input[required], select[required]');

        // Check for empty inputs
        for (let input of inputs) {
            if (input.type === 'radio') {
                const group = document.getElementsByName(input.name);
                let checked = false;
                for (let r of group) { if (r.checked) checked = true; break; }
                if (!checked) return false;
            } else {
                if (!input.value.trim()) return false;
            }
        }
        return true;
    };

    const saveDraft = () => {
        const data = extractFormData();
        localStorage.setItem('farmerProfileDraft', JSON.stringify(data));
    };

    const extractFormData = () => {
        const getVal = (id) => document.getElementById(`ob-${id}`)?.value || '';
        const getRadio = (name) => {
            const el = document.querySelector(`input[name="ob-${name}"]:checked`);
            return el ? el.value : '';
        };
        const getCheck = (id) => document.getElementById(`ob-${id}`)?.checked;

        return {
            name: getVal('name'),
            age: getVal('age'),
            state: getVal('state'),
            acres: getVal('acres'),
            ownership: getRadio('owner'),
            soil: getVal('soil'),
            healthCard: getRadio('shc'),
            water: getRadio('water'),
            crop: getVal('crop'),
            hasTractor: getCheck('mach-tractor'),
            hasDrip: getCheck('mach-drip'),
            loan: getRadio('loan'),
            market: getVal('market'),
            goal: getRadio('goal'),
            dateCollected: new Date().toISOString()
        };
    };

    btnNext?.addEventListener('click', () => {
        if (!validateStep()) {
            errorMsg.classList.remove('hidden');
            return;
        }
        saveDraft();
        if (currentStep < totalSteps) {
            currentStep++;
            updateUI();
        }
    });

    btnPrev?.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateUI();
        }
    });

    btnSubmit?.addEventListener('click', (e) => {
        e.preventDefault();
        if (!validateStep()) {
            errorMsg.classList.remove('hidden');
            return;
        }
        const finalData = extractFormData();
        console.log("Structured Farmer Payload Created:", finalData);

        // Save the completed profile
        localStorage.setItem('farmerProfile', JSON.stringify(finalData));
        // Clear draft
        localStorage.removeItem('farmerProfileDraft');

        navigateTo('/profile-summary');
    });

    updateUI();
};

// --- Profile Summary Logic (AI Heuristics) ---
const setupSummaryEvents = () => {
    const rawData = localStorage.getItem('farmerProfile');
    if (!rawData) {
        navigateTo('/onboarding');
        return;
    }

    const data = JSON.parse(rawData);

    // 1. Fill Grid Details
    const grid = document.getElementById('summary-details-grid');
    if (grid) {
        grid.innerHTML = `
            <div><span class="text-gray-500 block text-xs uppercase mb-1"><i class="fa-solid fa-user mr-1"></i> Name</span> <span class="font-bold text-gray-800 text-lg">${data.name}</span></div>
            <div><span class="text-gray-500 block text-xs uppercase mb-1"><i class="fa-solid fa-map-location-dot mr-1"></i> Location</span> <span class="font-bold text-gray-800 text-lg">${data.state}</span></div>
            <div><span class="text-gray-500 block text-xs uppercase mb-1"><i class="fa-solid fa-layer-group mr-1"></i> Farmland</span> <span class="font-bold text-gray-800 text-lg">${data.acres} Acres (${data.ownership})</span></div>
            <div><span class="text-gray-500 block text-xs uppercase mb-1"><i class="fa-solid fa-mound mr-1"></i> Soil Type</span> <span class="font-bold text-gray-800 text-lg">${data.soil} (Card: ${data.healthCard})</span></div>
            <div><span class="text-gray-500 block text-xs uppercase mb-1"><i class="fa-solid fa-droplet mr-1"></i> Water Source</span> <span class="font-bold text-gray-800 text-lg">${data.water}</span></div>
            <div><span class="text-gray-500 block text-xs uppercase mb-1"><i class="fa-solid fa-bullseye mr-1"></i> Goal</span> <span class="font-bold text-green-700 text-lg">${data.goal}</span></div>
        `;
    }

    // 2. Risk Heuristic Calculation
    let riskScore = 0; // 0 = low, 1-2 = medium, 3+ = high
    if (data.water === 'Rainfed') riskScore += 2;
    if (data.ownership === 'Leased') riskScore += 1;
    if (data.loan === 'Yes') riskScore += 1;
    if (!data.hasTractor && !data.hasDrip) riskScore += 1;

    const riskBadge = document.getElementById('ai-risk-badge');
    if (riskScore === 0) {
        riskBadge.innerHTML = '<i class="fa-solid fa-shield-check mr-1"></i> LOW RISK';
        riskBadge.className = "inline-block px-3 py-1 rounded-md text-sm font-bold bg-green-100 text-green-800 border border-green-200";
    } else if (riskScore <= 2) {
        riskBadge.innerHTML = '<i class="fa-solid fa-triangle-exclamation mr-1"></i> MODERATE RISK';
        riskBadge.className = "inline-block px-3 py-1 rounded-md text-sm font-bold bg-yellow-100 text-yellow-800 border border-yellow-200";
    } else {
        riskBadge.innerHTML = '<i class="fa-solid fa-circle-exclamation mr-1"></i> HIGH RISK';
        riskBadge.className = "inline-block px-3 py-1 rounded-md text-sm font-bold bg-red-100 text-red-800 border border-red-200";
    }

    // 3. Crop Recommendations Heuristic
    let recommendedCrops = ['Wheat', 'Maize']; // defaults
    if (data.soil === 'Black' && data.water !== 'Rainfed') {
        recommendedCrops = ['Cotton', 'Soybean', 'Chilli'];
    } else if ((data.state === 'Maharashtra' || data.state === 'Karnataka') && data.water === 'Rainfed') {
        recommendedCrops = ['Millets', 'Jowar', 'Groundnut'];
    } else if (data.state === 'Punjab' || data.water === 'Canal') {
        recommendedCrops = ['Rice/Paddy', 'Wheat', 'Sugarcane'];
    } else if (data.ownership === 'Owned' && data.hasDrip) {
        recommendedCrops = ['Horticulture / Vegetables', 'Fruits'];
    }

    const cropBox = document.getElementById('ai-crops');
    cropBox.innerHTML = '';
    recommendedCrops.forEach(c => {
        cropBox.innerHTML += `<span class="bg-blue-100 text-blue-800 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold">${c}</span>`;
    });

    // 4. Dynamic AI Insight Generation
    const insightBox = document.getElementById('ai-insight-text');
    let insightStr = `Based on your location in <strong>${data.state}</strong> and primary reliance on ${data.water} for your ${data.soil} soil, `;

    if (data.water === 'Rainfed') {
        insightStr += `we strongly advise transitioning to drought-resistant crops like ${recommendedCrops[0]} to mitigate climate risks. `;
    } else {
        insightStr += `you have an excellent foundation for cultivating ${recommendedCrops[0]}. `;
    }

    if (data.goal === 'Reduce Cost' || data.goal === 'Organic') {
        insightStr += `Since your goal is to ${data.goal.toLowerCase()}, consider joining a local FPO rather than selling directly to ${data.market} to improve margins.`;
    } else if (data.loan === 'Yes') {
        insightStr += `As you have an active loan, adopting PM Fasal Bima Yojana is highly recommended to secure your ${data.acres} acres against unexpected weather events.`;
    } else {
        insightStr += `With your current assets, pursuing high-value crops with proper soil testing is the best path to maximizing yield.`;
    }

    insightBox.innerHTML = `<i class="fa-solid fa-quote-left text-blue-300 mr-2"></i>${insightStr}`;
};

// --- FASSI Chat Logic ---
const setupFassiChatEvents = () => {
    const inputEl = document.getElementById('fassi-input');
    const sendBtn = document.getElementById('fassi-send');
    const historyEl = document.getElementById('fassi-chat-history');
    const langIndicator = document.getElementById('fassi-lang-indicator');

    if (!inputEl || !sendBtn || !historyEl) return;

    // Set Language UI
    langIndicator.innerText = (state.user?.language || 'en').toUpperCase();

    // Check if profile exists
    const rawProfile = localStorage.getItem('farmerProfile');
    const profileContext = rawProfile || "No profile completed yet. General advice only.";

    if (!rawProfile) {
        // Warning if they bypass wizard
        historyEl.innerHTML += `
            <div class="flex items-start gap-4 mb-4">
                <div class="bg-yellow-100 text-yellow-800 w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-lg"><i class="fa-solid fa-triangle-exclamation"></i></div>
                <div class="bg-yellow-50 p-4 rounded-2xl rounded-tl-none border border-yellow-200 shadow-sm max-w-[85%] text-sm text-yellow-800">
                    You have not completed your Farmer Profile Wizard. FASSI's advice will be generic.
                </div>
            </div>`;
    }

    const appendMessage = (sender, text, isMarkdown = false) => {
        const isUser = sender === 'user';
        const avatar = isUser ? '<i class="fa-solid fa-user"></i>' : '<i class="fa-solid fa-robot"></i>';
        const colorClass = isUser ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
        const bubbleStyle = isUser ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-gray-100 rounded-tl-none text-gray-800';

        let formattedText = text;
        if (isMarkdown && !isUser) {
            // Very simple markdown formatting for the chat
            formattedText = text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/\n/g, '<br/>')
                .replace(/- /g, '&bull; ');
        }

        const alignClass = isUser ? 'flex-row-reverse' : '';

        const html = `
            <div class="flex items-start gap-4 ${alignClass} mb-4">
                <div class="${colorClass} w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-lg shadow-sm">${avatar}</div>
                <div class="p-4 rounded-2xl shadow-sm max-w-[85%] ${bubbleStyle} text-sm md:text-base leading-relaxed">
                    ${formattedText}
                </div>
            </div>
        `;
        historyEl.insertAdjacentHTML('beforeend', html);
        historyEl.scrollTop = historyEl.scrollHeight;
    };

    const handleSend = async () => {
        const text = inputEl.value.trim();
        if (!text) return;

        // UI Update
        appendMessage('user', text);
        inputEl.value = '';
        inputEl.style.height = 'auto'; // reset textarea

        // Show loading indicator
        const loadingId = 'loading-' + Date.now();
        historyEl.insertAdjacentHTML('beforeend', `
            <div id="${loadingId}" class="flex items-start gap-4 mb-4 opacity-50">
                <div class="bg-green-100 text-green-800 w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-lg"><i class="fa-solid fa-robot fa-bounce"></i></div>
                <div class="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm"><i class="fa-solid fa-ellipsis fa-fade text-2xl text-gray-400"></i></div>
            </div>
        `);
        historyEl.scrollTop = historyEl.scrollHeight;

        try {
            const response = await fetch(`${API_URL}/fassi-chat/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    profile_context: profileContext,
                    language: state.user?.language || 'en'
                })
            });

            const data = await response.json();
            document.getElementById(loadingId)?.remove();

            if (response.ok) {
                appendMessage('fassi', data.reply, true);
            } else {
                appendMessage('fassi', "I am currently experiencing network interference. Please try asking again later.");
            }
        } catch (error) {
            document.getElementById(loadingId)?.remove();
            appendMessage('fassi', "System Error: Connection to Agrarian Core failed.");
        }
    };

    sendBtn.addEventListener('click', handleSend);
    inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });

    // Auto-resize textarea
    inputEl.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
        if (this.scrollHeight > 120) {
            this.style.overflowY = 'auto';
        } else {
            this.style.overflowY = 'hidden';
        }
    });
};

// --- Init App ---
window.addEventListener('load', () => {
    // Check initial hash
    if (window.location.hash) {
        state.currentPath = window.location.hash.replace('#', '');
    } else {
        state.currentPath = '/login';
    }
    render();
});
