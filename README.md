# Solar System Features & Lead Collection Website

A fully responsive single-page website for displaying solar system features and collecting leads with WhatsApp integration and Google Sheets storage.

## Features

- 🌍 **Multi-language Support** (English, Hindi, Marathi)
- 📱 **Fully Responsive Design** (mobile-first approach)
- 🔧 **20 Solar System Features** in accordion view
- 📝 **Lead Form** with validation
- 💬 **WhatsApp Integration** for instant lead forwarding
- 📊 **Google Sheets Integration** for data storage
- 🗺️ **Google Maps Preview** for location links
- 🎨 **Modern UI** with dark mode friendly colors
- ⚡ **Fast & Lightweight** (no external dependencies)

## Setup Instructions

### 1. Google Apps Script Deployment

1. **Create Google Sheet:**
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new spreadsheet
   - Name it "Solar Leads"

2. **Set up Apps Script:**
   - Click `Extensions` → `Apps Script`
   - Delete any existing code
   - Copy the entire content from `google-apps-script.gs`
   - Paste it into the editor
   - Save the project (Ctrl+S / Cmd+S)

3. **Deploy as Web App:**
   - Click `Deploy` → `New deployment`
   - Select type: `Web app`
   - Configuration:
     - Description: `Solar Leads Webhook`
     - Execute as: `Me`
     - Who has access: `Anyone`
   - Click `Deploy`
   - Copy the generated Web App URL

### 2. Update Configuration

In `script.js`, update the following:

```javascript
// Line 76 in script.js
const GOOGLE_SCRIPT_URL = 'YOUR_COPIED_WEB_APP_URL_HERE';

// Line 270 in script.js - WhatsApp number (if needed)
const whatsappUrl = `https://wa.me/919766893279?text=${whatsappMessage}`;