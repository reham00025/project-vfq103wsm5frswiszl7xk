import React, { useEffect, useRef } from 'react';

const Index = () => {
  const homeMapRef = useRef(null);
  const findCareMapRef = useRef(null);

  useEffect(() => {
    // Initialize the application after component mounts
    initializeApp();
  }, []);

  const initializeApp = () => {
    // Mobile menu toggle functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
      });
    }

    // Client-side routing for single page application
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');

    function showPage(pageId) {
      pageSections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
      });

      const targetPage = document.getElementById(pageId);
      if (targetPage) {
        targetPage.classList.remove('hidden');
        targetPage.classList.add('active');

        // Initialize maps if needed
        const officeLocation = { lat: 33.8704, lng: -117.9304 };

        if (pageId === 'home' && window.L) {
          initLeafletMap('home-map', officeLocation.lat, officeLocation.lng, 'At Home VA Staffing - Home Page');
        } else if (pageId === 'find-care' && window.L) {
          initLeafletMap('find-care-map', officeLocation.lat, officeLocation.lng, 'At Home VA Staffing - Find Care Page');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    function initLeafletMap(mapId, lat, lng, title) {
      const mapElement = document.getElementById(mapId);
      if (mapElement && window.L && !window[mapId + 'MapInstance']) {
        const map = window.L.map(mapId).setView([lat, lng], 14);
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        window.L.marker([lat, lng]).addTo(map).bindPopup(title).openPopup();
        window[mapId + 'MapInstance'] = map;
      }
    }

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        showPage(targetId);
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          if (mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Handle initial page load
    const initialPageId = window.location.hash ? window.location.hash.substring(1) : 'home';
    showPage(initialPageId);

    // Get Started modal functionality
    const getStartedBtn = document.getElementById('get-started-btn');
    const getStartedModal = document.getElementById('get-started-modal');
    const closeGetStartedModalButton = document.getElementById('close-get-started-modal');

    if (getStartedBtn && getStartedModal && closeGetStartedModalButton) {
      getStartedBtn.addEventListener('click', () => {
        getStartedModal.classList.remove('hidden');
      });

      closeGetStartedModalButton.addEventListener('click', () => {
        getStartedModal.classList.add('hidden');
      });

      getStartedModal.addEventListener('click', (e) => {
        if (e.target === getStartedModal) {
          getStartedModal.classList.add('hidden');
        }
      });
    }

    // Cookie consent functionality
    const cookieConsentModal = document.getElementById('cookie-consent-modal');
    const customizeCookiesModal = document.getElementById('customize-cookies-modal');
    const acceptCookies = document.getElementById('accept-cookies');
    const cookieSettings = document.getElementById('cookie-settings');
    const closeCookieSettings = document.getElementById('close-cookie-settings');
    const saveCookieSettings = document.getElementById('save-cookie-settings');
    const closeCookieConsentModal = document.getElementById('close-cookie-consent-modal');

    if (!localStorage.getItem('cookieConsent') && cookieConsentModal) {
      cookieConsentModal.classList.remove('hidden');
    }

    if (acceptCookies) {
      acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        if (cookieConsentModal) cookieConsentModal.classList.add('hidden');
      });
    }

    if (customizeCookiesModal && cookieSettings) {
      customizeCookiesModal.addEventListener('click', () => {
        cookieSettings.classList.toggle('hidden');
      });
    }

    if (closeCookieSettings && cookieSettings) {
      closeCookieSettings.addEventListener('click', () => {
        cookieSettings.classList.add('hidden');
      });
    }

    if (saveCookieSettings) {
      saveCookieSettings.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'customized');
        if (cookieConsentModal) cookieConsentModal.classList.add('hidden');
        if (cookieSettings) cookieSettings.classList.add('hidden');
      });
    }

    if (closeCookieConsentModal && cookieConsentModal) {
      closeCookieConsentModal.addEventListener('click', () => {
        cookieConsentModal.classList.add('hidden');
      });
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
    const htmlElement = document.documentElement;

    function setTheme(theme) {
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      updateDarkModeIcons();
    }

    function updateDarkModeIcons() {
      const isDark = htmlElement.classList.contains('dark');
      const icon = darkModeToggle?.querySelector('i');
      const mobileIcon = mobileDarkModeToggle?.querySelector('i');

      if (icon) {
        icon.classList.toggle('fa-sun', isDark);
        icon.classList.toggle('fa-moon', !isDark);
      }
      if (mobileIcon) {
        mobileIcon.classList.toggle('fa-sun', isDark);
        mobileIcon.classList.toggle('fa-moon', !isDark);
      }
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
      });
    }

    if (mobileDarkModeToggle) {
      mobileDarkModeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          if (mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'false');
        }
      });
    }
  };

  return (
    <div className="font-sans leading-relaxed antialiased">
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en" class="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>At Home VA Staffing - Compassionate Home Care</title>
    <meta name="description" content="At Home VA Staffing provides compassionate and professional in-home care services in Orange County, CA. Explore our services, careers, and investor opportunities.">
    <meta name="keywords" content="home care, in-home care, respite care, special needs care, elderly care, behavioral support, caregiver jobs, Orange County CA, AHVA Staffing, investor relations">
    <link rel="canonical" href="https://demo-7077fd.ingress-daribow.ewp.live/">

    <!-- Open Graph / Twitter Card Meta Tags -->
    <meta property="og:title" content="At Home VA Staffing - Compassionate Home Care">
    <meta property="og:description" content="Providing compassionate and professional home care services in Orange County, CA, specializing in respite care, special needs support, elderly care, and behavioral support staffing.">
    <meta property="og:image" content="https://res.cloudinary.com/dltz1kxqq/image/upload/q_auto/v1751731192/AdobeStock_120567859_j9x0gi.jpg">
    <meta property="og:url" content="https://demo-7077fd.ingress-daribow.ewp.live/">
    <meta name="twitter:card" content="summary_large_image">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="At Home VA Staffing">

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts - Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- Leaflet CSS for interactive maps -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="">

    <style>
        /* CSS Variables for Light and Dark Mode */
        :root {
            --bg-light: #FFFFFF;
            --text-primary-light: #3b6255;
            --text-body-light: #8ba49a;
            --button-bg-main-light: #cbded3;
            --button-text-main-light: #3b6255;
            --button-bg-accent-light: #d2c49e;
            --button-text-accent-light: #3b6255;
            --border-light: #e2e8f0;
            --card-bg-light: #FFFFFF;
            --section-bg-light: #f9f9f9;
            --hover-scale: scale(1.03);
            --hover-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            --footer-bg: #1a202c;
            --footer-link-color: #cbd5e0;
        }

        html.dark {
            --bg-light: #1a202c;
            --text-primary-light: #cbded3;
            --text-body-light: #a0aec0;
            --button-bg-main-light: #3b6255;
            --button-text-main-light: #FFFFFF;
            --button-bg-accent-light: #8ba49a;
            --button-text-accent-light: #FFFFFF;
            --border-light: #4a5568;
            --card-bg-light: #2d3748;
            --section-bg-light: #242c38;
            --footer-bg: #000000;
            --footer-link-color: #a0aec0;
        }

        body {
            background-color: var(--bg-light);
            color: var(--text-body-light);
            font-family: 'Inter', sans-serif;
            transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
        }

        .text-primary { color: var(--text-primary-light); }
        .text-body-color { color: var(--text-body-light); }
        .bg-card { background-color: var(--card-bg-light); }
        .bg-section { background-color: var(--section-bg-light); }

        .btn-main {
            background-color: var(--button-bg-main-light);
            color: var(--button-text-main-light);
            transition: all 0.3s ease;
        }
        .btn-main:hover {
            transform: var(--hover-scale);
            box-shadow: var(--hover-shadow);
            opacity: 0.9;
        }

        .btn-accent {
            background-color: var(--button-bg-accent-light);
            color: var(--button-text-accent-light);
            transition: all 0.3s ease;
        }
        .btn-accent:hover {
            transform: var(--hover-scale);
            box-shadow: var(--hover-shadow);
            opacity: 0.9;
        }

        .btn-outline-white {
            border: 2px solid #FFFFFF;
            color: #FFFFFF;
            transition: all 0.3s ease;
        }
        .btn-outline-white:hover {
            background-color: #FFFFFF;
            color: var(--button-text-accent-light);
            transform: var(--hover-scale);
            box-shadow: var(--hover-shadow);
        }

        .dark-mode-toggle-button-bg {
            background-color: white;
            color: var(--button-text-accent-light);
        }
        html.dark .dark-mode-toggle-button-bg {
            background-color: black;
            color: white;
        }

        .header-bg-color { background-color: var(--bg-light); }
        .footer-bg-color { background-color: var(--footer-bg); }
        .text-footer-link { color: var(--footer-link-color); }
        .border-color-default { border-color: var(--border-light); }

        .header-logo-img {
            transition: transform 0.3s ease, filter 0.3s ease;
        }
        .header-logo-img:hover {
            transform: scale(1.05);
        }

        .site-logo {
            background-image: url('https://res.cloudinary.com/dltz1kxqq/image/upload/v1752868430/AHVA_3.1_Logo_1_qzepyq.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: left center;
        }
        html.dark .site-logo {
            background-image: url('https://res.cloudinary.com/dltz1kxqq/image/upload/v1752868431/AHVA_3.1_Logo_2_kdy2gh.png');
        }

        @keyframes fadeInUptoTop {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .animate-on-load {
            opacity: 0;
            animation: fadeInUptoTop 0.8s ease-out forwards;
        }

        .animation-delay-100 { animation-delay: 0.1s; }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }

        .card-hover-effect:hover {
            transform: var(--hover-scale);
            box-shadow: var(--hover-shadow);
        }
        .card-hover-effect {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .video-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            border-radius: 0.75rem;
            box-shadow: var(--hover-shadow);
        }
        .video-container iframe,
        .video-container video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        textarea {
            background-color: var(--card-bg-light);
            border: 1px solid var(--border-light);
            color: var(--text-body-light);
            padding: 0.75rem 1rem;
            border-radius: 0.375rem;
            width: 100%;
            box-sizing: border-box;
            transition: border-color 0.3s ease, background-color 0.3s ease;
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="tel"]:focus,
        textarea:focus {
            outline: none;
            border-color: var(--text-primary-light);
            box-shadow: 0 0 0 2px rgba(59, 98, 85, 0.2);
        }

        .map-container {
            height: 400px;
            width: 100%;
            border-radius: 8px;
            border: 1px solid var(--border-light);
            margin-top: 2rem;
        }

        .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: var(--text-primary-light);
            border-radius: 50%;
            width: 24px;
            height: 24px;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        /* Responsive improvements */
        @media (max-width: 768px) {
            .container {
                padding-left: 1rem;
                padding-right: 1rem;
            }
            
            .text-5xl {
                font-size: 2.5rem;
            }
            
            .text-7xl {
                font-size: 3.5rem;
            }
        }
    </style>
</head>

<body class="font-sans leading-relaxed antialiased">
    <!-- Header Section -->
    <header class="header-bg-color shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-4 py-2">
            <nav class="flex items-center justify-between py-4" aria-label="Main Navigation">
                <a href="#home" class="flex items-center flex-shrink-0" aria-label="At Home VA Staffing Home">
                    <div class="h-10 w-52 mr-2 header-logo-img site-logo"></div>
                </a>
                
                <div class="hidden md:flex items-center space-x-6">
                    <a href="#home" class="text-primary hover:text-primary transition-colors duration-200 nav-link">Home</a>
                    <a href="#services" class="text-primary hover:text-primary transition-colors duration-200 nav-link">Services</a>
                    <a href="#about" class="text-primary hover:text-primary transition-colors duration-200 nav-link">About Us</a>
                    <a href="#blog" class="text-primary hover:text-primary transition-colors duration-200 nav-link">Blog</a>
                    <a href="#find-care" class="text-primary hover:text-primary transition-colors duration-200 nav-link">Find Care</a>
                </div>
                
                <div class="flex items-center space-x-4">
                    <a href="tel:213-326-7452" class="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md btn-main hover:opacity-90 transition duration-300" aria-label="Call At Home VA Staffing">
                        <i class="fas fa-phone-alt mr-2" aria-hidden="true"></i> (213) 326-7452
                    </a>
                    <button id="get-started-btn" class="px-4 py-2 rounded-md transition duration-300 btn-accent hover:opacity-90" aria-label="Get Started with At Home VA Staffing">Get Started</button>
                    <button id="dark-mode-toggle" class="px-4 py-2 rounded-md transition duration-300 flex items-center justify-center dark-mode-toggle-button-bg" aria-label="Toggle dark mode">
                        <i class="fas fa-moon text-lg" aria-hidden="true"></i>
                    </button>
                    <button id="mobile-menu-button" class="md:hidden p-2 text-primary" aria-label="Toggle mobile menu" aria-expanded="false">
                        <i class="fas fa-bars text-2xl" aria-hidden="true"></i>
                    </button>
                </div>
            </nav>
            
            <div id="mobile-menu" class="hidden md:hidden bg-card p-4 rounded-b-lg shadow-md">
                <a href="#home" class="block py-2 text-primary hover:text-primary transition-colors duration-200 nav-link">Home</a>
                <a href="#services" class="block py-2 text-primary hover:text-primary transition-colors duration-200 nav-link">Services</a>
                <a href="#about" class="block py-2 text-primary hover:text-primary transition-colors duration-200 nav-link">About Us</a>
                <a href="#blog" class="block py-2 text-primary hover:text-primary transition-colors duration-200 nav-link">Blog</a>
                <a href="#find-care" class="block py-2 text-primary hover:text-primary transition-colors duration-200 nav-link">Find Care</a>
                <a href="tel:213-326-7452" class="block py-2 text-primary hover:text-primary transition-colors duration-200">
                    <i class="fas fa-phone-alt mr-2" aria-hidden="true"></i> (213) 326-7452
                </a>
                <button id="mobile-dark-mode-toggle" class="block w-full py-2 text-primary hover:text-primary transition-colors duration-200 text-left">
                    <i class="fas fa-moon mr-2" aria-hidden="true"></i> Toggle Dark Mode
                </button>
            </div>
        </div>
    </header>

    <main id="content-area">
        <!-- Home Section -->
        <section id="home" class="page-section active">
            <div class="relative h-screen max-h-[700px] text-white text-center flex flex-col justify-center items-center overflow-hidden">
                <video autoplay muted loop playsinline poster="https://via.placeholder.co/1920x1080/000000/FFFFFF?text=Video+Loading" class="absolute top-0 left-0 w-full h-full object-cover z-0" aria-label="Video showing compassionate home care services">
                    <source src="https://res.cloudinary.com/dltz1kxqq/video/upload/v1751731150/HomeVastaffing01.commercial_zxlmzk.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
                <div class="relative z-20 p-4 max-w-4xl mx-auto animate-on-load">
                    <h1 class="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg">Compassionate Care, Right at Home</h1>
                    <p class="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md">Providing professional and personalized in-home care services in Orange County, CA.</p>
                    <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#find-care" class="btn-main px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 animate-on-load animation-delay-100 nav-link">Find Care Now</a>
                        <a href="#careers" class="btn-outline-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 animate-on-load animation-delay-200 nav-link">Join Our Team</a>
                    </div>
                </div>
            </div>

            <!-- Services Overview Section -->
            <section class="container mx-auto px-4 py-16 bg-section rounded-lg shadow-lg my-12 animate-on-load">
                <h2 class="text-4xl font-bold text-center text-primary mb-12">Our Services</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-100 text-left">
                        <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204572/respite.2._ukevnb.jpg" alt="Caregiver providing respite care" class="rounded-md mb-4 w-full h-40 object-cover">
                        <h3 class="text-xl font-semibold text-primary mb-3">Respite Care</h3>
                        <p class="text-body-color mb-4">Temporary relief for primary caregivers, ensuring continuous excellent care.</p>
                        <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Enquiry &rarr;</a>
                    </div>
                    <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-200 text-left">
                        <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204537/baby.sitter_xatka5.jpg" alt="Caregiver with child with special needs" class="rounded-md mb-4 w-full h-40 object-cover">
                        <h3 class="text-xl font-semibold text-primary mb-3">Children with Special Needs</h3>
                        <p class="text-body-color mb-4">Specialized support focusing on development and well-being.</p>
                        <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Enquiry &rarr;</a>
                    </div>
                    <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-300 text-left">
                        <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1751731247/AdobeStock_120567825_wvkout.jpg" alt="Caregiver assisting elderly person" class="rounded-md mb-4 w-full h-40 object-cover">
                        <h3 class="text-xl font-semibold text-primary mb-3">Elderly Support</h3>
                        <p class="text-body-color mb-4">Dedicated assistance promoting independence and quality of life.</p>
                        <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Enquiry &rarr;</a>
                    </div>
                    <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-400 text-left">
                        <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204524/AdobeStock_453300692_xuy2ll.jpg" alt="Caregiver providing behavioral support" class="rounded-md mb-4 w-full h-40 object-cover">
                        <h3 class="text-xl font-semibold text-primary mb-3">Behavioral Support Staffing</h3>
                        <p class="text-body-color mb-4">Skilled staff to assist with behavioral challenges, ensuring a safe environment.</p>
                        <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Enquiry &rarr;</a>
                    </div>
                    <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-500 text-left">
                        <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204545/breakfast.AdobeStock_494170726_pwq8ec.jpg" alt="Caregiver assisting with personal supports" class="rounded-md mb-4 w-full h-40 object-cover">
                        <h3 class="text-xl font-semibold text-primary mb-3">Personal Supports</h3>
                        <p class="text-body-color mb-4">Assistance with daily living activities, including personal care and housekeeping.</p>
                        <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Enquiry &rarr;</a>
                    </div>
                    <div class="bg-card rounded-lg p-6 border border-color-default flex flex-col justify-center items-center text-center card-hover-effect animate-on-load animation-delay-600">
                        <h3 class="text-xl font-semibold text-primary mb-3">Ready to Find Care?</h3>
                        <p class="text-body-color mb-4">Contact us for a personalized consultation to discuss your care needs.</p>
                        <a href="#find-care" class="btn-main px-6 py-2 rounded-full font-semibold nav-link">Request Consultation</a>
                    </div>
                </div>
            </section>

            <!-- About Us Section (Brief) -->
            <section class="container mx-auto px-4 py-16 text-center animate-on-load">
                <h2 class="text-4xl font-bold text-primary mb-6">About At Home VA Staffing</h2>
                <p class="text-lg text-body-color max-w-3xl mx-auto mb-8">At Home VA Staffing is dedicated to providing exceptional in-home care services in Orange County, CA. Our mission is to enhance the quality of life for our clients by delivering compassionate, professional, and personalized care tailored to their unique needs.</p>
                <a href="#about" class="btn-accent px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 animate-on-load animation-delay-100 nav-link">Learn More About Us</a>
            </section>

            <!-- Testimonials Section -->
            <section class="bg-section py-16 animate-on-load">
                <div class="container mx-auto px-4">
                    <h2 class="text-4xl font-bold text-center text-primary mb-12">What Our Clients Say</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-100">
                            <i class="fas fa-quote-left text-primary text-3xl mb-4"></i>
                            <p class="text-body-color italic mb-4">"At Home VA Staffing provided excellent care for my mother. The caregivers were compassionate and highly professional. We couldn't be happier with their services."</p>
                            <p class="font-semibold text-primary">- Sarah M., Client's Daughter</p>
                        </div>
                        <div class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-200">
                            <i class="fas fa-quote-left text-primary text-3xl mb-4"></i>
                            <p class="text-body-color italic mb-4">"The team at At Home VA Staffing truly understands the needs of children with special needs. Their support has been invaluable to our family."</p>
                            <p class="font-semibold text-primary">- David L., Parent</p>
                        </div>
                        <div class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-300">
                            <i class="fas fa-quote-left text-primary text-3xl mb-4"></i>
                            <p class="text-body-color italic mb-4">"I highly recommend At Home VA Staffing. They made it possible for my father to stay comfortably at home, maintaining his independence."</p>
                            <p class="font-semibold text-primary">- Emily R., Client's Daughter</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Home Page Map Section -->
            <section class="container mx-auto px-4 py-16 text-center animate-on-load">
                <h2 class="text-4xl font-bold text-primary mb-6">Find Our Office</h2>
                <p class="text-lg text-body-color max-w-3xl mx-auto mb-8">Visit us at our Orange County location for a personal consultation.</p>
                <div id="home-map" class="map-container shadow-lg"></div>
            </section>

            <!-- Call to Action Section -->
            <section class="container mx-auto px-4 py-16 text-center animate-on-load">
                <h2 class="text-4xl font-bold text-primary mb-6">Ready to Experience Compassionate Care?</h2>
                <p class="text-lg text-body-color max-w-3xl mx-auto mb-8">Contact us today to learn more about our services and how we can support your family's unique needs.</p>
                <a href="#find-care" class="btn-main px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 animate-on-load animation-delay-100 nav-link">Get a Free Consultation</a>
            </section>
        </section>

        <!-- Services Page Section -->
        <section id="services" class="page-section hidden">
            <div class="container mx-auto px-4 py-12">
                <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Our Compassionate Care Services</h1>
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Tailored in-home care solutions to support your loved ones in Orange County, CA.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-on-load">Our Core Services</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-100 text-left">
                                <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204572/respite.2._ukevnb.jpg" alt="Caregiver providing respite care" class="rounded-md mb-4 w-full h-40 object-cover">
                                <h3 class="text-xl font-semibold text-primary mb-3">Respite Care</h3>
                                <p class="text-body-color mb-4">Temporary relief for primary caregivers, ensuring continuous excellent care.</p>
                                <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Enquiry &rarr;</a>
                            </div>
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-200 text-left">
                                <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204537/baby.sitter_xatka5.jpg" alt="Caregiver with child with special needs" class="rounded-md mb-4 w-full h-40 object-cover">
                                <h3 class="text-xl font-semibold text-primary mb-3">Children with Special Needs</h3>
                                <p class="text-body-color mb-4">Specialized support focusing on development and well-being.</p>
                                <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Enquiry &rarr;</a>
                            </div>
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-300 text-left">
                                <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1751731247/AdobeStock_120567825_wvkout.jpg" alt="Caregiver assisting elderly person" class="rounded-md mb-4 w-full h-40 object-cover">
                                <h3 class="text-xl font-semibold text-primary mb-3">Elderly Support</h3>
                                <p class="text-body-color mb-4">Dedicated assistance promoting independence and quality of life.</p>
                                <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Enquiry &rarr;</a>
                            </div>
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-400 text-left">
                                <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204524/AdobeStock_453300692_xuy2ll.jpg" alt="Caregiver providing behavioral support" class="rounded-md mb-4 w-full h-40 object-cover">
                                <h3 class="text-xl font-semibold text-primary mb-3">Behavioral Support Staffing</h3>
                                <p class="text-body-color mb-4">Skilled staff to assist with behavioral challenges, ensuring a safe environment.</p>
                                <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Enquiry &rarr;</a>
                            </div>
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-500 text-left">
                                <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204545/breakfast.AdobeStock_494170726_pwq8ec.jpg" alt="Caregiver assisting with personal supports" class="rounded-md mb-4 w-full h-40 object-cover">
                                <h3 class="text-xl font-semibold text-primary mb-3">Personal Supports</h3>
                                <p class="text-body-color mb-4">Assistance with daily living activities, including personal care and housekeeping.</p>
                                <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Enquiry &rarr;</a>
                            </div>
                            <div class="bg-card rounded-lg p-6 border border-color-default flex flex-col justify-center items-center text-center card-hover-effect animate-on-load animation-delay-600">
                                <h3 class="text-xl font-semibold text-primary mb-3">Ready to Find Care?</h3>
                                <p class="text-body-color mb-4">Contact us for a personalized consultation to discuss your care needs.</p>
                                <a href="#find-care" class="btn-main px-6 py-2 rounded-full font-semibold nav-link">Request Consultation</a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Detailed Service Sections -->
                <section class="bg-section py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Respite Care</h2>
                        <div class="flex flex-col md:flex-row gap-8">
                            <div class="md:w-1/2">
                                <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204572/respite.2._ukevnb.jpg" alt="Caregiver providing respite care" class="rounded-lg shadow-lg w-full">
                            </div>
                            <div class="md:w-1/2 text-left">
                                <p class="text-body-color mb-4">Our respite care services provide temporary relief for primary caregivers, allowing you to rest while we ensure your loved one receives exceptional care.</p>
                                <h3 class="text-xl font-semibold text-primary mb-2">Key Benefits:</h3>
                                <ul class="list-disc list-inside text-body-color mb-4">
                                    <li>Relief for caregivers to recharge</li>
                                    <li>Compassionate, professional care for your loved one</li>
                                    <li>Flexible scheduling to fit your needs</li>
                                </ul>
                                <h3 class="text-xl font-semibold text-primary mb-2">Who Can Benefit?</h3>
                                <p class="text-body-color mb-4">Families with primary caregivers needing a break from caregiving duties.</p>
                                <a href="#find-care" class="btn-accent px-6 py-2 rounded-full font-semibold nav-link">Enquiry</a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Client Responsibilities -->
                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Client Responsibilities</h2>
                        <p class="text-lg text-body-color text-center max-w-3xl mx-auto mb-8">To ensure the best care experience, we ask our clients to adhere to the following responsibilities:</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-100 text-left">
                                <h3 class="text-xl font-semibold text-primary mb-3">Open Communication</h3>
                                <p class="text-body-color">Share updates on health, preferences, or care needs with our team.</p>
                            </div>
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-200 text-left">
                                <h3 class="text-xl font-semibold text-primary mb-3">Safe Environment</h3>
                                <p class="text-body-color">Provide a safe, clean, and respectful space for our caregivers.</p>
                            </div>
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-300 text-left">
                                <h3 class="text-xl font-semibold text-primary mb-3">Adherence to Care Plan</h3>
                                <p class="text-body-color">Collaborate with our team to follow the agreed-upon care plan.</p>
                            </div>
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-400 text-left">
                                <h3 class="text-xl font-semibold text-primary mb-3">Financial Responsibilities</h3>
                                <p class="text-body-color">Ensure timely payment for services as per agreed terms.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Call to Action -->
                <section class="bg-section py-12 text-center">
                    <h2 class="text-3xl font-bold text-primary mb-4 animate-on-load">Ready to Find the Right Care?</h2>
                    <p class="text-body-color mb-6 max-w-2xl mx-auto">Contact us today to discuss your specific care needs and schedule a free consultation.</p>
                    <a href="#find-care" class="btn-main px-8 py-3 rounded-full text-lg font-semibold animate-on-load animation-delay-100 nav-link">Request a Consultation</a>
                </section>
            </div>
        </section>

        <!-- About Us Page Section -->
        <section id="about" class="page-section hidden">
            <div class="container mx-auto px-4 py-12">
                <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">About At Home VA Staffing</h1>
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Our mission is to provide compassionate, high-quality in-home care services.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Our Mission & Values</h2>
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="md:w-1/2">
                                <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204541/AdobeStock_498975417_nv5rpn.jpg" alt="Caregiver assisting elderly person" class="rounded-lg shadow-lg w-full">
                            </div>
                            <div class="md:w-1/2">
                                <p class="text-body-color mb-4">At Home VA Staffing is committed to delivering exceptional in-home care that prioritizes the dignity, comfort, and well-being of every individual we serve. We believe in fostering independence and enhancing the quality of life for our clients and their families.</p>
                                <h3 class="text-xl font-semibold text-primary mb-2">Our Core Values:</h3>
                                <ul class="list-disc list-inside text-body-color mb-4">
                                    <li><strong>Compassion:</strong> Approaching every interaction with empathy and kindness.</li>
                                    <li><strong>Integrity:</strong> Upholding the highest ethical standards in all our services.</li>
                                    <li><strong>Professionalism:</strong> Delivering expert care with respect and dedication.</li>
                                    <li><strong>Personalization:</strong> Tailoring care plans to meet unique individual needs.</li>
                                    <li><strong>Excellence:</strong> Continuously striving for the highest quality of care and service.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-section py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-on-load">Meet Our Dedicated Team</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default text-center animate-on-load animation-delay-100">
                                <img src="https://placehold.co/150x150/cbded3/3b6255?text=CEO" alt="CEO Portrait" class="rounded-full w-32 h-32 object-cover mx-auto mb-4">
                                <h3 class="text-xl font-semibold text-primary mb-1">CEO & Founder</h3>
                                <p class="text-body-color mb-3">Leadership</p>
                                <p class="text-sm text-body-color">With over 20 years in healthcare, our CEO founded AHVA with a vision for compassionate home care.</p>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default text-center animate-on-load animation-delay-200">
                                <img src="https://placehold.co/150x150/d2c49e/3b6255?text=COO" alt="Director of Operations Portrait" class="rounded-full w-32 h-32 object-cover mx-auto mb-4">
                                <h3 class="text-xl font-semibold text-primary mb-1">Director of Operations</h3>
                                <p class="text-body-color mb-3">Operations</p>
                                <p class="text-sm text-body-color">Our Director ensures smooth operations and high-quality service delivery for all our clients.</p>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default text-center animate-on-load animation-delay-300">
                                <img src="https://placehold.co/150x150/8ba49a/FFFFFF?text=HEAD" alt="Head of Care Services Portrait" class="rounded-full w-32 h-32 object-cover mx-auto mb-4">
                                <h3 class="text-xl font-semibold text-primary mb-1">Head of Care Services</h3>
                                <p class="text-body-color mb-3">Care Services</p>
                                <p class="text-sm text-body-color">Our Head of Care leads our team of dedicated caregivers, ensuring personalized and effective care.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-on-load">Why Choose At Home VA Staffing?</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="flex items-start bg-section p-6 rounded-lg shadow-md border border-color-default animate-on-load animation-delay-100">
                                <i class="fas fa-hand-holding-heart text-primary text-4xl mr-4"></i>
                                <div>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Personalized Care Plans</h3>
                                    <p class="text-body-color">We develop customized care plans tailored to the unique needs and preferences of each client.</p>
                                </div>
                            </div>
                            <div class="flex items-start bg-section p-6 rounded-lg shadow-md border border-color-default animate-on-load animation-delay-200">
                                <i class="fas fa-user-shield text-primary text-4xl mr-4"></i>
                                <div>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Experienced & Vetted Caregivers</h3>
                                    <p class="text-body-color">Our team consists of highly trained, compassionate, and thoroughly vetted professionals.</p>
                                </div>
                            </div>
                            <div class="flex items-start bg-section p-6 rounded-lg shadow-md border border-color-default animate-on-load animation-delay-300">
                                <i class="fas fa-headset text-primary text-4xl mr-4"></i>
                                <div>
                                    <h3 class="text-xl font-semibold text-primary mb-2">24/7 Support</h3>
                                    <p class="text-body-color">We provide continuous support and are always available to address your concerns.</p>
                                </div>
                            </div>
                            <div class="flex items-start bg-section p-6 rounded-lg shadow-md border border-color-default animate-on-load animation-delay-400">
                                <i class="fas fa-lightbulb text-primary text-4xl mr-4"></i>
                                <div>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Commitment to Excellence</h3>
                                    <p class="text-body-color">We are dedicated to maintaining the highest standards of care and client satisfaction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-section py-12 text-center">
                    <h2 class="text-3xl font-bold text-primary mb-4 animate-on-load">Have Questions About Our Care?</h2>
                    <p class="text-body-color mb-6 max-w-2xl mx-auto">Our team is ready to provide the answers and support you need.</p>
                    <a href="#find-care" class="btn-main px-8 py-3 rounded-full text-lg font-semibold animate-on-load animation-delay-100 nav-link">Contact Us Today</a>
                </section>
            </div>
        </section>

        <!-- Blog Page Section -->
        <section id="blog" class="page-section hidden">
            <div class="container mx-auto px-4 py-12">
                <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Our Blog: Insights on Home Care</h1>
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Stay informed with the latest news, tips, and insights on home care, elderly support, and special needs care.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-on-load">Latest Articles</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-100">
                                <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204572/respite.2._ukevnb.jpg" alt="Benefits of Respite Care" class="rounded-md mb-4 w-full h-40 object-cover">
                                <h3 class="text-xl font-semibold text-primary mb-3">The Benefits of Respite Care for Caregivers</h3>
                                <p class="text-body-color text-sm mb-2">July 10, 2025 | By Admin</p>
                                <p class="text-body-color mb-4">Discover how respite care provides essential breaks for primary caregivers, preventing burnout and promoting well-being.</p>
                                <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-200">
                                <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204537/baby.sitter_xatka5.jpg" alt="Supporting Children with Special Needs" class="rounded-md mb-4 w-full h-40 object-cover">
                                <h3 class="text-xl font-semibold text-primary mb-3">Effective Strategies for Supporting Children with Special Needs</h3>
                                <p class="text-body-color text-sm mb-2">July 5, 2025 | By Admin</p>
                                <p class="text-body-color mb-4">Learn about personalized approaches and resources to support the growth and development of children with special needs.</p>
                                <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-300">
                                <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1751731247/AdobeStock_120567825_wvkout.jpg" alt="Aging in Place" class="rounded-md mb-4 w-full h-40 object-cover">
                                <h3 class="text-xl font-semibold text-primary mb-3">Aging in Place: Tips for a Comfortable and Safe Home Environment</h3>
                                <p class="text-body-color text-sm mb-2">June 28, 2025 | By Admin</p>
                                <p class="text-body-color mb-4">Practical advice for seniors and their families to ensure a safe and supportive living space for independent aging.</p>
                                <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-400">
                                <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204524/AdobeStock_453300692_xuy2ll.jpg" alt="Behavioral Support" class="rounded-md mb-4 w-full h-40 object-cover">
                                <h3 class="text-xl font-semibold text-primary mb-3">Understanding Behavioral Support: A Guide for Families</h3>
                                <p class="text-body-color text-sm mb-2">June 20, 2025 | By Admin</p>
                                <p class="text-body-color mb-4">Gain insights into effective behavioral support strategies and how professional staffing can make a difference.</p>
                                <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-500">
                                <img src="https://res.cloudinary.com/dltz1kxqq/image/upload/v1752204545/breakfast.AdobeStock_494170726_pwq8ec.jpg" alt="Personal Care" class="rounded-md mb-4 w-full h-40 object-cover">
                                <h3 class="text-xl font-semibold text-primary mb-3">The Importance of Personalized Home Care</h3>
                                <p class="text-body-color text-sm mb-2">June 15, 2025 | By Admin</p>
                                <p class="text-body-color mb-4">Understanding how personalized care plans make a significant difference in client outcomes and satisfaction.</p>
                                <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-section py-12 text-center">
                    <h2 class="text-3xl font-bold text-primary mb-4 animate-on-load">Looking for More Information?</h2>
                    <p class="text-body-color mb-6 max-w-2xl mx-auto">Browse our full archive of articles or contact us with your specific questions.</p>
                    <a href="#find-care" class="btn-main px-8 py-3 rounded-full text-lg font-semibold animate-on-load animation-delay-100 nav-link">Contact Us</a>
                </section>
            </div>
        </section>

        <!-- Find Care Page Section -->
        <section id="find-care" class="page-section hidden">
            <div class="container mx-auto px-4 py-12">
                <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Find Care Today</h1>
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Reach out to discuss your family's care needs or submit an inquiry below. We're here to help you find the right care solution.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div class="animate-on-load animation-delay-100">
                            <h2 class="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                            <ul class="space-y-4 text-body-color text-lg">
                                <li><i class="fas fa-map-marker-alt text-primary mr-3"></i>1303 W Valencia Dr., #319, Fullerton, CA 92833</li>
                                <li><i class="fas fa-phone-alt text-primary mr-3"></i><a href="tel:213-326-7452" class="hover:text-primary transition-colors duration-200">(213) 326-7452</a></li>
                                <li><i class="fas fa-envelope text-primary mr-3"></i><a href="mailto:info@athomevastaffing.com" class="hover:text-primary transition-colors duration-200">info@athomevastaffing.com</a></li>
                                <li><i class="fas fa-clock text-primary mr-3"></i>Mon-Fri: 9:00 AM - 5:00 PM</li>
                            </ul>
                            <h3 class="text-2xl font-bold text-primary mt-10 mb-6">Our Location</h3>
                            <div id="find-care-map" class="map-container shadow-lg"></div>
                        </div>

                        <div class="animate-on-load animation-delay-200">
                            <h2 class="text-3xl font-bold text-primary mb-6">Send Us an Inquiry</h2>
                            <form id="inquiry-form" action="https://formspree.io/f/xzblnyvw" method="POST" class="space-y-6">
                                <div>
                                    <label for="name" class="block text-primary text-sm font-semibold mb-2">Name</label>
                                    <input type="text" id="name" name="name" required class="w-full">
                                </div>
                                <div>
                                    <label for="email" class="block text-primary text-sm font-semibold mb-2">Email</label>
                                    <input type="email" id="email" name="email" required class="w-full">
                                </div>
                                <div>
                                    <label for="phone" class="block text-primary text-sm font-semibold mb-2">Phone (Optional)</label>
                                    <input type="tel" id="phone" name="phone" class="w-full">
                                </div>
                                <div>
                                    <label for="message" class="block text-primary text-sm font-semibold mb-2">Message</label>
                                    <textarea id="message" name="message" required rows="4" class="w-full"></textarea>
                                </div>
                                <button type="submit" class="btn-main px-8 py-3 rounded-md font-semibold w-full shadow-md hover:opacity-90">Submit Inquiry</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <!-- Careers Page Section -->
        <section id="careers" class="page-section hidden">
            <div class="container mx-auto px-4 py-12">
                <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Careers at At Home VA Staffing</h1>
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Join our compassionate team and make a difference in the lives of others.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-on-load">Why Join Our Team?</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-100">
                                <i class="fas fa-hand-holding-heart text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Rewarding Work</h3>
                                <p class="text-body-color">Make a tangible difference in the lives of clients and their families every day.</p>
                            </div>
                            <div class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-200">
                                <i class="fas fa-users text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Supportive Environment</h3>
                                <p class="text-body-color">Work with a team that values collaboration, respect, and mutual support.</p>
                            </div>
                            <div class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-300">
                                <i class="fas fa-graduation-cap text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Professional Growth</h3>
                                <p class="text-body-color">Access ongoing training and development opportunities to enhance your skills.</p>
                            </div>
                            <div class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-400">
                                <i class="fas fa-dollar-sign text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Competitive Compensation</h3>
                                <p class="text-body-color">Receive competitive pay and benefits for your dedicated service.</p>
                            </div>
                            <div class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-500">
                                <i class="fas fa-calendar-alt text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Flexible Scheduling</h3>
                                <p class="text-body-color">Enjoy flexible work schedules that fit your lifestyle and needs.</p>
                            </div>
                            <div class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-600">
                                <i class="fas fa-map-marker-alt text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Local Impact</h3>
                                <p class="text-body-color">Serve your local Orange County community and build meaningful connections.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-section py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Our Simple Application Process</h2>
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="md:w-1/2">
                                <img src="https://placehold.co/600x400/cbded3/3b6255?text=Caregiver+Application" alt="Caregiver application process" class="rounded-lg shadow-lg w-full">
                            </div>
                            <div class="md:w-1/2">
                                <p class="text-body-color mb-4">Joining our team is simple. Follow these steps to start your caregiving career with At Home VA Staffing:</p>
                                <ol class="list-decimal list-inside text-body-color mb-4 space-y-2">
                                    <li>Click the "Apply Online" button to access our application portal.</li>
                                    <li>Complete the application form with your details and experience.</li>
                                    <li>Submit your application and await a response from our HR team.</li>
                                </ol>
                                <a href="https://14608.axiscare.com/?caregivers-applications.php" target="_blank" rel="noopener noreferrer" class="btn-accent px-6 py-2 rounded-full font-semibold shadow-md hover:opacity-90">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-section py-12 text-center">
                    <h2 class="text-3xl font-bold text-primary mb-4 animate-on-load">Ready to Make a Difference?</h2>
                    <p class="text-body-color mb-6 max-w-2xl mx-auto">Join our team and start a rewarding career in caregiving. Apply today!</p>
                    <a href="https://14608.axiscare.com/?caregivers-applications.php" target="_blank" rel="noopener noreferrer" class="btn-main px-8 py-3 rounded-full text-lg font-semibold animate-on-load animation-delay-100">Apply Online</a>
                </section>
            </div>
        </section>

        <!-- Investors Page Section -->
        <section id="investors" class="page-section hidden">
            <div class="container mx-auto px-4 py-12">
                <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Investors & Partnership Opportunities</h1>
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Partner with At Home VA Staffing and invest in the future of compassionate in-home care in Orange County, CA.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div class="animate-on-load animation-delay-100">
                            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">Our Growth Story & Vision</h2>
                            <p class="text-body-color mb-4">At Home VA Staffing has established itself as a trusted provider of in-home care services in Orange County, California. Our commitment to compassionate, personalized care has fueled consistent growth and a strong reputation within the community.</p>
                            <p class="text-body-color mb-4">Our vision extends beyond current services; we aim to innovate and set new standards in the home care industry, leveraging technology and best practices to deliver superior client outcomes and operational efficiency.</p>
                            <p class="text-body-color">We believe in a future where every individual has access to the highest quality of care in the comfort of their own home, and we invite partners who share this vision to join us.</p>
                        </div>
                        <div class="animate-on-load animation-delay-200">
                            <img src="https://placehold.co/600x400/d2c49e/3b6255?text=Growth+Chart" alt="Abstract image representing business growth and investment" class="rounded-lg shadow-lg w-full">
                        </div>
                    </div>
                </section>

                <section class="bg-section py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-on-load">Why Invest in At Home VA Staffing?</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-100">
                                <i class="fas fa-chart-line text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Growing Market Demand</h3>
                                <p class="text-body-color">Tap into a rapidly expanding market with increasing need for in-home care services.</p>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-200">
                                <i class="fas fa-check-circle text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Proven Business Model</h3>
                                <p class="text-body-color">Benefit from a successful operational framework and a strong client acquisition strategy.</p>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-300">
                                <i class="fas fa-star text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Strong Reputation</h3>
                                <p class="text-body-color">Leverage our established trust and positive reputation within the Orange County community.</p>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-400">
                                <i class="fas fa-handshake text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Dedicated Leadership</h3>
                                <p class="text-body-color">Guided by experienced leadership committed to sustainable growth and ethical practices.</p>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-500">
                                <i class="fas fa-users-medical text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Social Impact</h3>
                                <p class="text-body-color">Invest in a business that not only generates returns but also makes a positive social impact.</p>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-600">
                                <i class="fas fa-expand-alt text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Scalable Operations</h3>
                                <p class="text-body-color">Our model is designed for scalability, allowing for efficient expansion into new areas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Investor Inquiries</h2>
                        <p class="text-lg text-body-color text-center max-w-3xl mx-auto mb-8">For detailed financial information, partnership proposals, or to schedule a discussion with our leadership team, please contact us using the form below.</p>
                        <form id="investor-form" action="https://formspree.io/f/xzblnyvw" method="POST" class="max-w-2xl mx-auto space-y-6 animate-on-load animation-delay-100">
                            <div>
                                <label for="investor-name" class="block text-primary text-sm font-semibold mb-2">Your Name</label>
                                <input type="text" id="investor-name" name="name" required class="w-full">
                            </div>
                            <div>
                                <label for="investor-email" class="block text-primary text-sm font-semibold mb-2">Your Email</label>
                                <input type="email" id="investor-email" name="email" required class="w-full">
                            </div>
                            <div>
                                <label for="investor-company" class="block text-primary text-sm font-semibold mb-2">Company/Organization (Optional)</label>
                                <input type="text" id="investor-company" name="company" class="w-full">
                            </div>
                            <div>
                                <label for="investor-interest" class="block text-primary text-sm font-semibold mb-2">Area of Interest</label>
                                <textarea id="investor-interest" name="interest" rows="5" required class="w-full"></textarea>
                            </div>
                            <button type="submit" class="btn-main px-8 py-3 rounded-md font-semibold w-full shadow-md hover:opacity-90">Submit Inquiry</button>
                        </form>
                    </div>
                </section>
            </div>
        </section>

        <!-- Privacy Policy Page Section -->
        <section id="privacy-policy" class="page-section hidden">
            <div class="container mx-auto px-4 py-12">
                <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Privacy Policy</h1>
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Understanding how we protect your personal information.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <div class="bg-card rounded-lg p-6 border border-color-default animate-on-load animation-delay-100">
                            <p class="text-body-color mb-4">Last updated: July 17, 2025</p>
                            <p class="text-body-color mb-4">At Home VA Staffing ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">1. Information We Collect</h3>
                            <p class="text-body-color mb-4">We may collect personal information such as your name, email address, phone number, and address when you contact us, request services, or apply for a job. We also collect non-personal information like browser type and IP address through cookies and analytics tools.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">2. How We Use Your Information</h3>
                            <p class="text-body-color mb-4">We use your information to:</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li>Provide and improve our services</li>
                                <li>Respond to inquiries and provide customer support</li>
                                <li>Process job applications</li>
                                <li>Send promotional materials (with your consent)</li>
                                <li>Analyze website usage to enhance user experience</li>
                            </ul>

                            <h3 class="text-xl font-semibold text-primary mb-3">3. Sharing Your Information</h3>
                            <p class="text-body-color mb-4">We do not sell your personal information. We may share your information with:</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li>Service providers who assist with our operations (e.g., payment processors, analytics providers)</li>
                                <li>Law enforcement or regulatory authorities when required by law</li>
                            </ul>

                            <h3 class="text-xl font-semibold text-primary mb-3">4. Cookies and Tracking</h3>
                            <p class="text-body-color mb-4">Our website uses cookies to enhance functionality and analyze traffic. You can manage cookie preferences through your browser settings.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">5. Data Security</h3>
                            <p class="text-body-color mb-4">We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is completely secure.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">6. Your Rights</h3>
                            <p class="text-body-color mb-4">You may request access, correction, or deletion of your personal information by contacting us at <a href="mailto:info@athomevastaffing.com" class="text-primary hover:underline">info@athomevastaffing.com</a>.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">7. Third-Party Links</h3>
                            <p class="text-body-color mb-4">Our website may contain links to third-party sites. We are not responsible for their privacy practices.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">8. Changes to This Policy</h3>
                            <p class="text-body-color mb-4">We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">9. Contact Us</h3>
                            <p class="text-body-color">For questions about this Privacy Policy, please contact us:</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li>Email: <a href="mailto:info@athomevastaffing.com" class="text-primary hover:underline">info@athomevastaffing.com</a></li>
                                <li>Phone: <a href="tel:213-326-7452" class="text-primary hover:underline">(213) 326-7452</a></li>
                                <li>Address: 1303 W Valencia Dr., #319, Fullerton, CA 92833</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <!-- Terms of Service Page Section -->
        <section id="terms-of-service" class="page-section hidden">
            <div class="container mx-auto px-4 py-12">
                <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Terms of Service</h1>
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Understanding the terms and conditions for using our services.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <div class="bg-card rounded-lg p-6 border border-color-default animate-on-load animation-delay-100">
                            <p class="text-body-color mb-4">Last updated: July 17, 2025</p>
                            <p class="text-body-color mb-4">Welcome to At Home VA Staffing. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website and services, you agree to be bound by these Terms.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">1. Acceptance of Terms</h3>
                            <p class="text-body-color mb-4">By using our website, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use our services.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">2. Services Provided</h3>
                            <p class="text-body-color mb-4">At Home VA Staffing provides in-home care services, including but not limited to respite care, special needs support, elderly care, and behavioral support staffing. Services are provided based on individual care plans agreed upon with clients.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">3. User Responsibilities</h3>
                            <p class="text-body-color mb-4">Users agree to provide accurate information, maintain a safe environment for caregivers, and adhere to agreed-upon care plans and payment terms.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">4. Intellectual Property</h3>
                            <p class="text-body-color mb-4">All content on this website, including text, graphics, logos, and images, is the property of At Home VA Staffing or its content suppliers and protected by intellectual property laws.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">5. Limitation of Liability</h3>
                            <p class="text-body-color mb-4">At Home VA Staffing will not be liable for any damages arising from the use or inability to use our website or services, except where prohibited by law.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">6. Governing Law</h3>
                            <p class="text-body-color mb-4">These Terms are governed by the laws of the State of California, without regard to its conflict of law principles.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">7. Changes to Terms</h3>
                            <p class="text-body-color mb-4">We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">8. Contact Information</h3>
                            <p class="text-body-color">For any questions regarding these Terms, please contact us:</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li>Email: <a href="mailto:info@athomevastaffing.com" class="text-primary hover:underline">info@athomevastaffing.com</a></li>
                                <li>Phone: <a href="tel:213-326-7452" class="text-primary hover:underline">(213) 326-7452</a></li>
                                <li>Address: 1303 W Valencia Dr., #319, Fullerton, CA 92833</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </section>

        <!-- Accessibility Statement Page Section -->
        <section id="accessibility-statement" class="page-section hidden">
            <div class="container mx-auto px-4 py-12">
                <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Accessibility Statement</h1>
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Our commitment to ensuring digital accessibility for everyone.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <div class="bg-card rounded-lg p-6 border border-color-default animate-on-load animation-delay-100">
                            <p class="text-body-color mb-4">Last updated: July 17, 2025</p>
                            <p class="text-body-color mb-4">At Home VA Staffing is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">1. Conformance Status</h3>
                            <p class="text-body-color mb-4">The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: A, AA, and AAA. At Home VA Staffing is partially conformant with WCAG 2.1 AA. Partially conformant means that some parts of the content do not yet fully conform to the accessibility standard.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">2. Feedback</h3>
                            <p class="text-body-color mb-4">We welcome your feedback on the accessibility of At Home VA Staffing. Please let us know if you encounter accessibility barriers on At Home VA Staffing:</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li>E-mail: <a href="mailto:info@athomevastaffing.com" class="text-primary hover:underline">info@athomevastaffing.com</a></li>
                                <li>Phone: <a href="tel:213-326-7452" class="text-primary hover:underline">(213) 326-7452</a></li>
                            </ul>

                            <h3 class="text-xl font-semibold text-primary mb-3">3. Technical Specifications</h3>
                            <p class="text-body-color mb-4">Accessibility of At Home VA Staffing relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li>HTML</li>
                                <li>WAI-ARIA</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                            <p class="text-body-color mb-4">These technologies are relied upon for conformance with the accessibility standards used.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">4. Limitations and Alternatives</h3>
                            <p class="text-body-color mb-4">Despite our best efforts to ensure accessibility of At Home VA Staffing, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li><strong>Older browsers:</strong> Some older browser versions may not fully support modern accessibility features. We recommend using up-to-date browsers for the best experience.</li>
                                <li><strong>User-uploaded content:</strong> Some images or videos uploaded by users might not have proper alt text or captions. We encourage users to provide accessible content.</li>
                            </ul>

                            <h3 class="text-xl font-semibold text-primary mb-3">5. Assessment Approach</h3>
                            <p class="text-body-color mb-4">At Home VA Staffing assessed the accessibility of At Home VA Staffing by the following approaches:</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li>Self-evaluation</li>
                                <li>External evaluation</li>
                            </ul>

                            <h3 class="text-xl font-semibold text-primary mb-3">6. Date</h3>
                            <p class="text-body-color mb-4">This statement was created on 17 July 2025.</p>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer-bg-color text-white py-12">
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-2">
                <h3 class="text-2xl font-bold mb-4 text-primary">At Home VA Staffing</h3>
                <p class="text-footer-link mb-4">Compassionate and professional in-home care services in Orange County, CA.</p>
                <div class="flex space-x-4">
                    <a href="https://www.facebook.com/athomevastaffing" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Facebook" class="text-footer-link hover:text-primary transition-colors duration-200">
                        <i class="fab fa-facebook-f text-xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/athomevastaffing" target="_blank" rel="noopener noreferrer" aria-label="Visit us on LinkedIn" class="text-footer-link hover:text-primary transition-colors duration-200">
                        <i class="fab fa-linkedin-in text-xl"></i>
                    </a>
                </div>
                <div class="flex flex-col space-y-3 mt-4">
                    <a href="#" class="btn-main px-8 py-3 rounded-md font-semibold text-center text-base">Sign Up for Newsletter</a>
                    <a href="https://14608.axiscare.com/?caregivers-applications.php" target="_blank" rel="noopener noreferrer" class="btn-accent px-8 py-3 rounded-md font-semibold text-center text-base">Apply Now</a>
                </div>
            </div>
            <div>
                <h3 class="text-xl font-semibold mb-4 text-primary">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="#home" class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Home</a></li>
                    <li><a href="#services" class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Services</a></li>
                    <li><a href="#about" class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">About Us</a></li>
                    <li><a href="#blog" class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Blog</a></li>
                    <li><a href="#find-care" class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Find Care</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-xl font-semibold mb-4 text-primary">Contact Info</h3>
                <ul class="space-y-2 text-footer-link">
                    <li><i class="fas fa-map-marker-alt mr-2"></i> 1303 W Valencia Dr., #319, Fullerton, CA 92833</li>
                    <li><i class="fas fa-phone-alt mr-2"></i> <a href="tel:213-326-7452" class="hover:text-primary transition-colors duration-200">(213) 326-7452</a></li>
                    <li><i class="fas fa-envelope mr-2"></i> <a href="mailto:info@athomevastaffing.com" class="hover:text-primary transition-colors duration-200">info@athomevastaffing.com</a></li>
                    <li><i class="fas fa-clock mr-2"></i> Mon-Fri: 9:00 AM - 5:00 PM</li>
                </ul>
            </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-footer-link text-sm">
            <p>© 2025 At Home VA Staffing. All rights reserved.</p>
            <ul class="flex justify-center space-x-4 mt-2">
                <li><a href="#privacy-policy" class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Privacy Policy</a></li>
                <li><a href="#terms-of-service" class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Terms of Service</a></li>
                <li><a href="#accessibility-statement" class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Accessibility Statement</a></li>
                <li><a href="#careers" class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Careers</a></li>
                <li><a href="#investors" class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Investors</a></li>
                <li><a href="#find-care" class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Contact Us</a></li>
            </ul>
        </div>
    </footer>

    <!-- Get Started Modal -->
    <div id="get-started-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden z-[100]">
        <div class="bg-card p-8 rounded-lg shadow-xl max-w-sm w-full m-4 relative">
            <button id="close-get-started-modal" class="absolute top-4 right-4 text-primary hover:text-gray-700 transition-colors duration-200" aria-label="Close Get Started modal">
                <i class="fas fa-times text-xl"></i>
            </button>
            <h3 class="text-2xl font-bold mb-6 text-primary text-center">What are you looking for?</h3>
            <div class="flex flex-col space-y-4">
                <a href="https://14608.axiscare.com/?caregivers-applications.php" target="_blank" rel="noopener noreferrer" class="btn-main py-4 px-6 rounded-md font-semibold text-center flex items-center justify-center hover:opacity-90">
                    <i class="fas fa-briefcase mr-3"></i> A Job
                </a>
                <a href="#find-care" class="btn-main py-4 px-6 rounded-md font-semibold text-center flex items-center justify-center hover:opacity-90 nav-link">
                    <i class="fas fa-hand-holding-heart mr-3"></i> Care for an Adult
                </a>
            </div>
        </div>
    </div>

    <!-- Cookie Consent Modal -->
    <div id="cookie-consent-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden z-[100]">
        <div class="bg-card p-8 rounded-lg shadow-xl max-w-sm w-full m-4 relative">
            <button id="close-cookie-consent-modal" class="absolute top-4 right-4 text-primary hover:text-gray-700 transition-colors duration-200" aria-label="Close cookie consent modal">
                <i class="fas fa-times text-xl"></i>
            </button>
            <h3 class="text-2xl font-bold mb-6 text-primary text-center">Cookie Preferences</h3>
            <p class="text-body-color text-sm mb-4">We use cookies to ensure you get the best experience on our website. By clicking "Accept All Cookies", you agree to the storing of cookies on your device.</p>

            <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
                <button id="customize-cookies-modal" class="btn-main px-4 py-2 rounded-md font-semibold text-sm">Customize</button>
                <button id="accept-cookies" class="btn-main px-4 py-2 rounded-md font-semibold text-sm">Accept All Cookies</button>
            </div>
            
            <div id="cookie-settings" class="mt-6 hidden">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-xl font-semibold text-primary">Detailed Cookie Settings</h4>
                    <button id="close-cookie-settings" class="text-primary hover:opacity-70 text-2xl" aria-label="Close cookie preferences"><i class="fas fa-times"></i></button>
                </div>
                <p class="text-body-color text-sm">When you visit websites, they may store or retrieve data about you using cookies and similar technologies ("cookies"). Cookies may be necessary for the basic functionality of the website. You have the option of disabling certain types of cookies, though doing so may impact your experience on the website.</p>

                <div class="mb-4">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-semibold text-primary">Essential</span>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" checked disabled>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-light"></div>
                        </label>
                    </div>
                    <p class="text-body-color text-sm">Required to enable basic website functionality. You may not disable essential cookies.</p>
                </div>

                <div class="mb-4 opacity-50 cursor-not-allowed">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-semibold text-primary">Targeted Advertising</span>
                        <label class="relative inline-flex items-center cursor-not-allowed">
                            <input type="checkbox" value="" class="sr-only peer" disabled>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                    </div>
                    <p class="text-body-color text-sm">Used to deliver advertising that is more relevant to you and your interests. At Home VA Staffing does NOT use targeted advertising.</p>
                </div>

                <div class="mb-4 opacity-50 cursor-not-allowed">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-semibold text-primary">Personalization</span>
                        <label class="relative inline-flex items-center cursor-not-allowed">
                            <input type="checkbox" value="" class="sr-only peer" disabled>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                        </label>
                    </div>
                    <p class="text-body-color text-sm">Allow the website to remember choices you make (such as your username, language, or the region you are in) and provide enhanced, more personal features. At Home VA Staffing does NOT use personalization tools.</p>
                </div>

                <div class="text-right mt-6">
                    <button id="save-cookie-settings" class="btn-main py-2 px-6 rounded-md font-semibold">Save Preferences</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Leaflet JS for interactive maps -->
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
</body>
</html>
        `
      }} />
    </div>
  );
};

export default Index;