// Internationalization Object
const i18n = {
    en: {
        // UI Elements
        siteTitle: "Solar Solutions",
        skipToContent: "Skip to main content",
        heroTitle: "Smart Solar Solutions for Your Home",
        heroSubtitle: "Automated, efficient and cost-effective solar systems with maximum ROI",
        heroFeature1: "+5% More Power",
        heroFeature2: "20-30% ROI",
        heroFeature3: "Zero Maintenance",
        contactUs: "Contact Us",
        
        // Language buttons
        langEnglish: "English",
        langHindi: "हिंदी",
        langMarathi: "मराठी",
        
        // Solar Info Section
        solarInfoTitle: "Complete Solar System Information",
        info1Title: "Fully Automated Cleaning",
        info1Desc: "Daily automatic cleaning at 6:00 AM with zero manual effort",
        info2Title: "+5% More Power",
        info2Desc: "Increased power generation compared to manual cleaning",
        info3Title: "20-30% ROI",
        info3Desc: "High annual return on investment with 3-3.5 years payback",
        info4Title: "Strong Warranties",
        info4Desc: "12+30 years panel warranty, 10 years inverter warranty",
        
        // Benefits Section
        benefitsTitle: "Key Benefits",
        benefit1: "Government subsidy available up to ₹78,000 + ₹20,000 Extra Discount",
        benefit2: "24×7 system monitoring with mobile app",
        benefit3: "Free comprehensive system insurance",
        benefit4: "Net metering application support included",
        benefit5: "48-hour service response guarantee",
        
        // Footer
        footerTagline: "Smart Solar Solutions for a Sustainable Future",
        getConsultation: "Get Free Consultation",
        footerNote: "Fill form for personalized solar solution",
        
        // Form Elements
        formTitle: "Get Your Solar Consultation",
        formSubtitle: "Fill in your details and we'll contact you within 24 hours",
        fullName: "Full Name",
        fullNamePlaceholder: "Enter your full name",
        whatsappNumber: "WhatsApp Number",
        whatsappPlaceholder: "e.g., 9876543210",
        address: "Address",
        addressPlaceholder: "Enter complete address",
        monthlyBill: "Monthly Average Electricity Bill (INR)",
        monthlyBillPlaceholder: "Enter monthly bill amount",
        systemSize: "Interested System Size",
        selectOption: "Select an option",
        systemSize1kW: "1 kW",
        systemSize2kW: "2 kW",
        systemSize3kW: "3 kW",
        systemSize4kW: "4 kW",
        systemSize5kW: "5 kW",
        custom: "Custom",
        location: "Select Your Location (Optional)",
        selectLocation: "Select nearest city",
        otherCity: "Other City",
        locationHelp: "Helps us provide accurate service estimates",
        systemSizeHelp: "Choose based on your monthly consumption",
        consentText: "I agree to be contacted via WhatsApp for solar consultation",
        submitBtn: "Submit & Chat on WhatsApp",
        formNote: "Your data is secure and will only be used for solar consultation",
        loading: "Processing your request...",
        successMessage: "Form submitted successfully! Opening WhatsApp...",
        errorMessage: "Please check all fields and try again",
        
        // City names
        cityMumbai: "Mumbai",
        cityDelhi: "Delhi",
        cityBangalore: "Bangalore",
        cityPune: "Pune",
        cityHyderabad: "Hyderabad",
        cityAhmedabad: "Ahmedabad",
        cityChennai: "Chennai",
        cityKolkata: "Kolkata",
        cityNagpur: "Nagpur",
        cityNashik: "Nashik",
        cityAurangabad: "Aurangabad",
        citySolapur: "Solapur",
        cityAmravati: "Amravati",
        cityNanded: "Nanded",
        cityKolhapur: "Kolhapur",
        citySangli: "Sangli-Miraj",
        cityAkola: "Akola",
        cityJalgaon: "Jalgaon",
        cityLatur: "Latur",
        cityDhule: "Dhule",
        cityChandrapur: "Chandrapur",
        cityParbhani: "Parbhani",
        cityJalna: "Jalna",
        cityBhusawal: "Bhusawal",
        cityPanvel: "Panvel",
        cityThane: "Thane",
        cityNaviMumbai: "Navi Mumbai",
        cityVasai: "Vasai-Virar",
        cityUlhasnagar: "Ulhasnagar",
        citySatara: "Satara",
        cityWardha: "Wardha",
        cityGondia: "Gondia",
        cityYeotmal: "Yeotmal",
        cityNandurbar: "Nandurbar"
    },
    
    hi: {
        siteTitle: "सोलर समाधान",
        skipToContent: "मुख्य सामग्री पर जाएं",
        heroTitle: "आपके घर के लिए स्मार्ट सोलर समाधान",
        heroSubtitle: "स्वचालित, कुशल और लागत प्रभावी सौर प्रणाली अधिकतम ROI के साथ",
        heroFeature1: "+5% ज्यादा बिजली",
        heroFeature2: "20-30% ROI",
        heroFeature3: "जीरो मेंटेनेंस",
        contactUs: "संपर्क करें",
        
        langEnglish: "English",
        langHindi: "हिंदी",
        langMarathi: "मराठी",
        
        solarInfoTitle: "पूर्ण सोलर सिस्टम जानकारी",
        info1Title: "पूरी तरह स्वचालित सफाई",
        info1Desc: "रोज सुबह 6:00 बजे स्वचालित सफाई, बिना किसी मेहनत के",
        info2Title: "+5% ज्यादा बिजली",
        info2Desc: "मैनुअल सफाई के मुकाबले ज्यादा बिजली उत्पादन",
        info3Title: "20-30% ROI",
        info3Desc: "3-3.5 साल में पूरा पैसा वसूल, उच्च वार्षिक रिटर्न",
        info4Title: "मजबूत वारंटी",
        info4Desc: "12+30 साल पैनल वारंटी, 10 साल इन्वर्टर वारंटी",
        
        benefitsTitle: "मुख्य लाभ",
        benefit1: "सरकारी सब्सिडी उपलब्ध ₹78,000 तक + ₹20,000 अतिरिक्त छूट",
        benefit2: "24×7 सिस्टम मॉनिटरिंग मोबाइल ऐप के साथ",
        benefit3: "मुफ्त व्यापक सिस्टम बीमा",
        benefit4: "नेट मीटरिंग एप्लीकेशन सपोर्ट शामिल",
        benefit5: "48-घंटे सर्विस रिस्पॉन्स गारंटी",
        
        footerTagline: "टिकाऊ भविष्य के लिए स्मार्ट सोलर समाधान",
        getConsultation: "मुफ्त परामर्श लें",
        footerNote: "व्यक्तिगत सोलर समाधान के लिए फॉर्म भरें",
        
        formTitle: "अपनी सोलर कंसल्टेशन प्राप्त करें",
        formSubtitle: "अपना विवरण भरें और हम 24 घंटे के भीतर संपर्क करेंगे",
        fullName: "पूरा नाम",
        fullNamePlaceholder: "अपना पूरा नाम दर्ज करें",
        whatsappNumber: "व्हाट्सएप नंबर",
        whatsappPlaceholder: "उदा., 9876543210",
        address: "पता",
        addressPlaceholder: "पूरा पता दर्ज करें",
        monthlyBill: "मासिक औसत बिजली बिल (INR)",
        monthlyBillPlaceholder: "मासिक बिल राशि दर्ज करें",
        systemSize: "इच्छित सिस्टम आकार",
        selectOption: "एक विकल्प चुनें",
        systemSize1kW: "1 किलोवाट",
        systemSize2kW: "2 किलोवाट",
        systemSize3kW: "3 किलोवाट",
        systemSize4kW: "4 किलोवाट",
        systemSize5kW: "5 किलोवाट",
        custom: "कस्टम",
        location: "अपना स्थान चुनें (वैकल्पिक)",
        selectLocation: "नजदीकी शहर चुनें",
        otherCity: "अन्य शहर",
        locationHelp: "सटीक सेवा अनुमान प्रदान करने में मदद करता है",
        systemSizeHelp: "अपने मासिक खपत के आधार पर चुनें",
        consentText: "मैं सोलर कंसल्टेशन के लिए WhatsApp के माध्यम से संपर्क किए जाने से सहमत हूं",
        submitBtn: "सबमिट करें और WhatsApp पर चैट करें",
        formNote: "आपका डेटा सुरक्षित है और केवल सोलर कंसल्टेशन के लिए उपयोग किया जाएगा",
        loading: "आपका अनुरोध प्रोसेस हो रहा है...",
        successMessage: "फॉर्म सफलतापूर्वक सबमिट हो गया! WhatsApp खोला जा रहा है...",
        errorMessage: "कृपया सभी फ़ील्ड्स जांचें और पुनः प्रयास करें",
        
        cityMumbai: "मुंबई",
        cityDelhi: "दिल्ली",
        cityBangalore: "बेंगलुरु",
        cityPune: "पुणे",
        cityHyderabad: "हैदराबाद",
        cityAhmedabad: "अहमदाबाद",
        cityChennai: "चेन्नई",
        cityKolkata: "कोलकाता",
        cityNagpur: "नागपुर",
        cityNashik: "नाशिक",
        cityAurangabad: "औरंगाबाद",
        citySolapur: "सोलापुर",
        cityAmravati: "अमरावती",
        cityNanded: "नांदेड़",
        cityKolhapur: "कोल्हापुर",
        citySangli: "सांगली-मिरज",
        cityAkola: "अकोला",
        cityJalgaon: "जलगाँव",
        cityLatur: "लातूर",
        cityDhule: "धुले",
        cityChandrapur: "चंद्रपुर",
        cityParbhani: "परभणी",
        cityJalna: "जालना",
        cityBhusawal: "भुसावल",
        cityPanvel: "पनवेल",
        cityThane: "ठाणे",
        cityNaviMumbai: "नवी मुंबई",
        cityVasai: "वसई-विरार",
        cityUlhasnagar: "उल्हासनगर",
        citySatara: "सतारा",
        cityWardha: "वर्धा",
        cityGondia: "गोंदिया",
        cityYeotmal: "यवतमाल",
        cityNandurbar: "नंदुरबार"
    },
    
    mr: {
        siteTitle: "सोलार सोल्युशन्स",
        skipToContent: "मुख्य मजकूरावर जा",
        heroTitle: "तुमच्या घरासाठी स्मार्ट सोलार सोल्युशन्स",
        heroSubtitle: "स्वयंचलित, कार्यक्षम आणि किफायतशीर सौर प्रणाली जास्तीत जास्त ROI सह",
        heroFeature1: "+5% जास्त वीज",
        heroFeature2: "20-30% ROI",
        heroFeature3: "शून्य देखभाल",
        contactUs: "संपर्क साधा",
        
        langEnglish: "English",
        langHindi: "हिंदी",
        langMarathi: "मराठी",
        
        solarInfoTitle: "संपूर्ण सोलार सिस्टम माहिती",
        info1Title: "पूर्णपणे स्वयंचलित स्वच्छता",
        info1Desc: "रोज सकाळी 6:00 वाजता स्वयंचलित स्वच्छता, शून्य हस्तचालित प्रयत्न",
        info2Title: "+5% जास्त वीज",
        info2Desc: "हस्तचालित स्वच्छतेपेक्षा जास्त वीज निर्मिती",
        info3Title: "20-30% ROI",
        info3Desc: "3-3.5 वर्षात पूर्ण परतावा, उच्च वार्षिक रिटर्न",
        info4Title: "मजबूत हमी",
        info4Desc: "12+30 वर्ष पॅनेल हमी, 10 वर्ष इन्व्हर्टर हमी",
        
        benefitsTitle: "मुख्य फायदे",
        benefit1: "सरकारी अनुदान उपलब्ध ₹78,000 पर्यंत + ₹20,000 अतिरिक्त छूट",
        benefit2: "24×7 सिस्टम देखरेख मोबाइल अॅप सह",
        benefit3: "विनामूल्य व्यापक सिस्टम विमा",
        benefit4: "नेट मीटरिंग अर्ज सपोर्ट समाविष्ट",
        benefit5: "48-तास सेवा प्रतिसाद हमी",
        
        footerTagline: "शाश्वत भविष्यासाठी स्मार्ट सोलार सोल्युशन्स",
        getConsultation: "मोफत सल्ला घ्या",
        footerNote: "वैयक्तिकृत सोलार सोल्युशनसाठी फॉर्म भरा",
        
        formTitle: "तुमची सोलार सल्ला मिळवा",
        formSubtitle: "तुमचा तपशील भरा आणि आम्ही 24 तासांत संपर्क साधू",
        fullName: "पूर्ण नाव",
        fullNamePlaceholder: "तुमचे पूर्ण नाव प्रविष्ट करा",
        whatsappNumber: "व्हाट्सएप क्रमांक",
        whatsappPlaceholder: "उदा., 9876543210",
        address: "पत्ता",
        addressPlaceholder: "पूर्ण पत्ता प्रविष्ट करा",
        monthlyBill: "मासिक सरासरी वीज बिल (INR)",
        monthlyBillPlaceholder: "मासिक बिल रक्कम प्रविष्ट करा",
        systemSize: "इच्छित सिस्टम आकार",
        selectOption: "एक पर्याय निवडा",
        systemSize1kW: "1 किलोवॅट",
        systemSize2kW: "2 किलोवॅट",
        systemSize3kW: "3 किलोवॅट",
        systemSize4kW: "4 किलोवॅट",
        systemSize5kW: "5 किलोवॅट",
        custom: "सानुकूल",
        location: "तुमचे स्थान निवडा (वैकल्पिक)",
        selectLocation: "जवळचे शहर निवडा",
        otherCity: "इतर शहर",
        locationHelp: "अचूक सेवा अंदाज प्रदान करण्यास मदत करते",
        systemSizeHelp: "तुमच्या मासिक वापरावर आधारित निवडा",
        consentText: "सौर सल्लामसलत करिता WhatsApp मार्फत संपर्क साधण्यास मी सहमत आहे",
        submitBtn: "सबमिट करा आणि WhatsApp वर चॅट करा",
        formNote: "तुमचा डेटा सुरक्षित आहे आणि फक्त सोलार सल्लामसलत करिता वापरला जाईल",
        loading: "तुमची विनंती प्रक्रिया करत आहे...",
        successMessage: "फॉर्म यशस्वीरित्या सबमिट झाला! WhatsApp उघडले जात आहे...",
        errorMessage: "कृपया सर्व फील्ड तपासा आणि पुन्हा प्रयत्न करा",
        
        cityMumbai: "मुंबई",
        cityDelhi: "दिल्ली",
        cityBangalore: "बेंगळुरू",
        cityPune: "पुणे",
        cityHyderabad: "हैदराबाद",
        cityAhmedabad: "अहमदाबाद",
        cityChennai: "चेन्नई",
        cityKolkata: "कोलकाता",
        cityNagpur: "नागपूर",
        cityNashik: "नाशिक",
        cityAurangabad: "औरंगाबाद",
        citySolapur: "सोलापूर",
        cityAmravati: "अमरावती",
        cityNanded: "नांदेड",
        cityKolhapur: "कोल्हापूर",
        citySangli: "सांगली-मिरज",
        cityAkola: "अकोला",
        cityJalgaon: "जळगाव",
        cityLatur: "लातूर",
        cityDhule: "धुळे",
        cityChandrapur: "चंद्रपूर",
        cityParbhani: "परभणी",
        cityJalna: "जालना",
        cityBhusawal: "भुसावळ",
        cityPanvel: "पनवेल",
        cityThane: "ठाणे",
        cityNaviMumbai: "नवी मुंबई",
        cityVasai: "वसई-विरार",
        cityUlhasnagar: "उल्हासनगर",
        citySatara: "सातारा",
        cityWardha: "वर्धा",
        cityGondia: "गोंदिया",
        cityYeotmal: "यवतमाळ",
        cityNandurbar: "नंदुरबार"
    }
};

// Current Language
let currentLang = localStorage.getItem('preferredLanguage') || 'en';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby98cpaDxsrCq7_dYFBoXWxEUhX3Mo9jk3tZg8PHQffbKYCDpbhLG3XWgwbmmAfNnAy/exec';

// DOM Elements
const langButtons = document.querySelectorAll('.lang-btn');
const leadForm = document.getElementById('leadForm');
const toast = document.getElementById('toast');
const loadingOverlay = document.getElementById('loadingOverlay');
const formModal = document.getElementById('formModal');
const contactBtn = document.getElementById('contactBtn');
const footerContactBtn = document.getElementById('footerContactBtn');
const modalClose = document.getElementById('modalClose');

// User tracking variables
let formSubmitted = false;
let userVisitedTime = null;
let popupTimer = null;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
    initFormValidation();
    initModal();
    setLanguage(currentLang);
    
    // Track user visit time
    userVisitedTime = Date.now();
    
    // Start popup timer if form not submitted
    if (!formSubmitted) {
        startPopupTimer();
    }
});

// Language Switcher
function initLanguageSwitcher() {
    // Set active button based on saved preference
    langButtons.forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        btn.classList.toggle('active', lang === currentLang);
        
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            
            // Save preference
            localStorage.setItem('preferredLanguage', lang);
        });
    });
}

// Set Language
function setLanguage(lang) {
    currentLang = lang;
    const translations = i18n[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[key];
            } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[key];
            } else if (element.tagName === 'LABEL') {
                element.textContent = translations[key];
            } else {
                element.textContent = translations[key];
            }
        }
    });
    
    // Update data-i18n-placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[key]) {
            element.placeholder = translations[key];
        }
    });
    
    // Update active language button
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Initialize Modal
function initModal() {
    // Contact button click
    contactBtn.addEventListener('click', () => {
        openModal();
        resetPopupTimer();
    });
    
    // Footer contact button click
    footerContactBtn.addEventListener('click', () => {
        openModal();
        resetPopupTimer();
    });
    
    // Close modal button
    modalClose.addEventListener('click', closeModal);
    
    // Close modal on overlay click
    formModal.addEventListener('click', (e) => {
        if (e.target === formModal) {
            closeModal();
        }
    });
    
    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && formModal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal() {
    formModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    formModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Popup Timer Functions
function startPopupTimer() {
    popupTimer = setTimeout(() => {
        if (!formSubmitted && !formModal.classList.contains('active')) {
            openModal();
        }
    }, 10000); // 10 seconds
}

function resetPopupTimer() {
    if (popupTimer) {
        clearTimeout(popupTimer);
        popupTimer = null;
    }
}

// Get Google Maps Link for City
function getCityMapLink(city) {
    const cityCoordinates = {
        mumbai: "19.0760,72.8777",
        delhi: "28.7041,77.1025",
        bangalore: "12.9716,77.5946",
        pune: "18.5204,73.8567",
        hyderabad: "17.3850,78.4867",
        ahmedabad: "23.0225,72.5714",
        chennai: "13.0827,80.2707",
        kolkata: "22.5726,88.3639",
        nagpur: "21.1458,79.0882",
        nashik: "19.9975,73.7898",
        aurangabad: "19.8762,75.3433",
        solapur: "17.6599,75.9064",
        amravati: "20.9374,77.7796",
        nanded: "19.1383,77.3210",
        kolhapur: "16.7050,74.2433",
        sangli: "16.8524,74.5815",
        akola: "20.7030,77.0233",
        jalgaon: "21.0077,75.5626",
        latur: "18.4088,76.5604",
        dhule: "20.9020,74.7774",
        chandrapur: "19.9608,79.2951",
        parbhani: "19.2686,76.7708",
        jalna: "19.8413,75.8860",
        bhusawal: "21.0486,75.7854",
        panvel: "18.9881,73.1100",
        thane: "19.2183,72.9781",
        navi_mumbai: "19.0330,73.0297",
        vasai: "19.3919,72.8397",
        ulhasnagar: "19.2167,73.1500",
        satara: "17.6805,74.0183",
        wardha: "20.7453,78.6022",
        gondia: "21.4625,80.1920",
        yeotmal: "20.3888,78.1204",
        nandurbar: "21.3707,74.2409"
    };
    
    if (cityCoordinates[city]) {
        return `https://maps.google.com/maps?q=${cityCoordinates[city]}`;
    }
    return null;
}

// Form Validation
function initFormValidation() {
    const whatsappInput = document.getElementById('whatsapp');
    const nameInput = document.getElementById('name');
    const addressInput = document.getElementById('address');
    const monthlyBillInput = document.getElementById('monthlyBill');
    
    // WhatsApp validation
    whatsappInput.addEventListener('input', function() {
        const value = this.value.replace(/\D/g, '');
        this.value = value;
        
        if (value.length === 10) {
            const isValid = /^[6-9]\d{9}$/.test(value);
            document.getElementById('whatsappError').textContent = isValid ? '' : 'Please enter a valid Indian mobile number';
        }
    });
    
    // Name validation
    nameInput.addEventListener('input', function() {
        const isValid = this.value.trim().length >= 2;
        document.getElementById('nameError').textContent = isValid ? '' : 'Name must be at least 2 characters';
    });
    
    // Address validation
    addressInput.addEventListener('input', function() {
        const isValid = this.value.trim().length >= 10;
        document.getElementById('addressError').textContent = isValid ? '' : 'Please enter a complete address';
    });
    
    // Monthly bill validation
    monthlyBillInput.addEventListener('input', function() {
        const value = parseInt(this.value);
        const isValid = !isNaN(value) && value >= 500;
        document.getElementById('billError').textContent = isValid ? '' : 'Minimum bill amount is ₹500';
    });
}

// Show Toast
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Show Loading
function showLoading(show) {
    if (show) {
        loadingOverlay.classList.add('active');
    } else {
        loadingOverlay.classList.remove('active');
    }
}

// Generate WhatsApp Message with Clean Lead Information
function generateWhatsAppMessage(formData) {
    const translations = i18n[currentLang];
    const cityName = formData.location ? translations[`city${formData.location.charAt(0).toUpperCase() + formData.location.slice(1).replace('_', '')}`] || formData.location : 'Not specified';
    const submissionTime = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'short'
    });
    
    const message = `🔵 New Solar Lead Request

📋 *Customer Information:*
• Name: ${formData.name}
• WhatsApp: ${formData.whatsapp}
• City: ${cityName}
• Address: ${formData.address}

💡 *Energy Requirements:*
• Monthly Electricity Bill: ₹${formData.monthly_bill}
• Interested System Size: ${formData.system_size} kW

📅 *Submission Details:*
• Language: ${currentLang.toUpperCase()}
• Submitted on: ${submissionTime}
• Location: ${cityName}`;
    
    return encodeURIComponent(message);
}

// Submit to Google Sheets
async function submitToGoogleSheets(formData) {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                ...formData,
                lang: currentLang,
                timestamp: new Date().toISOString()
            })
        });
        return true;
    } catch (error) {
        console.error('Google Sheets submission error:', error);
        return false;
    }
}

// Form Submission
leadForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Validate form
    const name = document.getElementById('name').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const address = document.getElementById('address').value.trim();
    const monthlyBill = document.getElementById('monthlyBill').value.trim();
    const systemSize = document.getElementById('systemSize').value;
    const location = document.getElementById('location').value;
    const consent = document.getElementById('consent').checked;
    
    // Basic validation
    if (!name || !whatsapp || !address || !monthlyBill || !systemSize || !consent) {
        showToast(i18n[currentLang].errorMessage, 'error');
        return;
    }
    
    if (!/^[6-9]\d{9}$/.test(whatsapp)) {
        showToast('Please enter a valid 10-digit Indian mobile number', 'error');
        return;
    }
    
    // Prepare form data
    const formData = {
        name,
        whatsapp: `+91${whatsapp}`,
        address,
        monthly_bill: monthlyBill,
        system_size: systemSize,
        location: location || 'Not specified'
    };
    
    // Show loading
    showLoading(true);
    
    try {
        // Submit to Google Sheets in background
        submitToGoogleSheets(formData);
        
        // Generate WhatsApp URL
        const whatsappMessage = generateWhatsAppMessage(formData);
        const whatsappUrl = `https://wa.me/919766893279?text=${whatsappMessage}`;
        
        // Show success message
        showToast(i18n[currentLang].successMessage, 'success');
        
        // Mark form as submitted
        formSubmitted = true;
        
        // Clear popup timer
        resetPopupTimer();
        
        // Open WhatsApp after a short delay
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            showLoading(false);
            
            // Reset form
            leadForm.reset();
            
            // Close modal
            closeModal();
            
        }, 1500);
        
    } catch (error) {
        showLoading(false);
        showToast('An error occurred. Please try again.', 'error');
        console.error('Form submission error:', error);
    }
});

// Track form submission for new page loads
if (localStorage.getItem('solarFormSubmitted')) {
    formSubmitted = true;
}

// Store submission status
leadForm.addEventListener('submit', () => {
    localStorage.setItem('solarFormSubmitted', 'true');
    formSubmitted = true;
});

// Clear submission status after 24 hours
setInterval(() => {
    localStorage.removeItem('solarFormSubmitted');
    formSubmitted = false;
}, 24 * 60 * 60 * 1000);
