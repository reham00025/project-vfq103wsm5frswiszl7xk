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

        // Update SEO meta tags dynamically
        updateSEOTags(pageId);

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

    function updateSEOTags(pageId) {
      const seoData = {
        'home': {
          title: 'At Home VA Staffing - Compassionate Home Care in Orange County, CA',
          description: 'Professional in-home care services in Orange County, CA. Respite care, special needs support, elderly care, and behavioral support staffing. Call (213) 326-7452.',
          keywords: 'home care Orange County, in-home care California, respite care, elderly care, special needs care, behavioral support, caregiver services'
        },
        'services': {
          title: 'Home Care Services - At Home VA Staffing | Orange County, CA',
          description: 'Comprehensive in-home care services including respite care, special needs support, elderly care, behavioral support staffing, and personal care assistance in Orange County.',
          keywords: 'respite care, special needs care, elderly support, behavioral support staffing, personal care, home care services Orange County'
        },
        'about': {
          title: 'About At Home VA Staffing - Our Mission & Experienced Team',
          description: 'Learn about At Home VA Staffing\'s mission, values, and experienced caregiving team providing compassionate in-home care services in Orange County, California.',
          keywords: 'about At Home VA Staffing, caregiving team, mission values, experienced caregivers, Orange County home care'
        },
        'blog': {
          title: 'Home Care Blog - Tips & Insights | At Home VA Staffing',
          description: 'Expert insights on home care, caregiving tips, elderly support, and special needs care from At Home VA Staffing professionals in Orange County.',
          keywords: 'home care blog, caregiving tips, elderly care advice, special needs support, caregiver resources'
        },
        'find-care': {
          title: 'Find Home Care Services - Contact At Home VA Staffing',
          description: 'Contact At Home VA Staffing for personalized in-home care consultation in Orange County, CA. Call (213) 326-7452 or submit an inquiry online.',
          keywords: 'find home care, contact caregiver services, Orange County home care consultation, hire caregivers'
        },
        'careers': {
          title: 'Caregiver Jobs - Join At Home VA Staffing Team',
          description: 'Join our compassionate caregiving team at At Home VA Staffing. Flexible schedules, competitive pay, and rewarding work in Orange County, CA.',
          keywords: 'caregiver jobs Orange County, home care employment, caregiver careers, healthcare jobs California'
        },
        'investors': {
          title: 'Investment Opportunities - At Home VA Staffing',
          description: 'Explore investment and partnership opportunities with At Home VA Staffing, a growing home care provider in Orange County, California.',
          keywords: 'home care investment, healthcare investment opportunities, Orange County business investment'
        }
      };

      const data = seoData[pageId] || seoData['home'];
      
      // Update title
      document.title = data.title;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute('content', data.description);
      
      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) metaKeywords.setAttribute('content', data.keywords);
      
      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', data.title);
      
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute('content', data.description);
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

    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
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
    <title>At Home VA Staffing - Compassionate Home Care in Orange County, CA</title>
    <meta name="description" content="Professional in-home care services in Orange County, CA. Respite care, special needs support, elderly care, and behavioral support staffing. Call (213) 326-7452.">
    <meta name="keywords" content="home care Orange County, in-home care California, respite care, elderly care, special needs care, behavioral support, caregiver services">
    <meta name="author" content="At Home VA Staffing">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://athomevastaffing.com/">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://athomevastaffing.com/">
    <meta property="og:title" content="At Home VA Staffing - Compassionate Home Care in Orange County, CA">
    <meta property="og:description" content="Professional in-home care services in Orange County, CA. Respite care, special needs support, elderly care, and behavioral support staffing.">
    <meta property="og:image" content="https://ik.imagekit.io/AHVA/AdobeStock_120567859.png">
    <meta property="og:site_name" content="At Home VA Staffing">
    <meta property="og:locale" content="en_US">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://athomevastaffing.com/">
    <meta property="twitter:title" content="At Home VA Staffing - Compassionate Home Care">
    <meta property="twitter:description" content="Professional in-home care services in Orange County, CA. Respite care, special needs support, elderly care, and behavioral support staffing.">
    <meta property="twitter:image" content="https://ik.imagekit.io/AHVA/AdobeStock_120567859.png">

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "At Home VA Staffing",
      "url": "https://athomevastaffing.com",
      "logo": "https://ik.imagekit.io/AHVA/AHVA%203.1%20Transparent%20BG%20-%20Copy.png",
      "description": "Professional in-home care services in Orange County, CA",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1303 W Valencia Dr., #319",
        "addressLocality": "Fullerton",
        "addressRegion": "CA",
        "postalCode": "92833",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-213-326-7452",
        "contactType": "customer service",
        "email": "info@athomevastaffing.com"
      },
      "sameAs": [
        "https://www.facebook.com/athomevastaffing",
        "https://www.linkedin.com/company/athomevastaffing"
      ],
      "serviceArea": {
        "@type": "Place",
        "name": "Orange County, California"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Home Care Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Respite Care",
              "description": "Temporary relief for primary caregivers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Special Needs Care",
              "description": "Specialized support for children with special needs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Elderly Support",
              "description": "Dedicated assistance for seniors"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Behavioral Support Staffing",
              "description": "Professional behavioral support services"
            }
          }
        ]
      }
    }
    </script>

    <!-- Preload critical resources -->
    <link rel="preload" href="https://ik.imagekit.io/AHVA/AHVA%203.1%20Transparent%20BG%20-%20Copy.png" as="image">
    <link rel="preload" href="https://ik.imagekit.io/AHVA/HomeVastaffing01.commercial.mp4" as="video" type="video/mp4">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="https://ik.imagekit.io/AHVA/AHVA%203.1%20Transparent%20BG%20-%20Copy.png">

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
            background-image: url('https://ik.imagekit.io/AHVA/AHVA%203.1%20Transparent%20BG%20-%20Copy.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: left center;
        }
        html.dark .site-logo {
            background-image: url('https://ik.imagekit.io/AHVA/AHVA%203.1%20%20Logo%20(2).png');
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

        /* Lazy loading styles */
        .lazy {
            opacity: 0;
            transition: opacity 0.3s;
        }
        .lazy.loaded {
            opacity: 1;
        }

        /* Parallax hero background */
        .parallax-hero {
            background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://ik.imagekit.io/AHVA/AdobeStock_120567859.png?tr=w-1920,h-1080,q-80');
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
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

            .parallax-hero {
                background-attachment: scroll;
            }
        }

        /* Performance optimizations */
        img {
            max-width: 100%;
            height: auto;
        }

        .aspect-ratio-16-9 {
            aspect-ratio: 16 / 9;
        }

        .aspect-ratio-1-1 {
            aspect-ratio: 1 / 1;
        }

        .object-cover {
            object-fit: cover;
        }

        .object-contain {
            object-fit: contain;
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
                <video autoplay muted loop playsinline poster="https://ik.imagekit.io/AHVA/AdobeStock_120567859.png?tr=w-1920,h-1080,q-60" class="absolute top-0 left-0 w-full h-full object-cover z-0" aria-label="Video showing compassionate home care services">
                    <source src="https://ik.imagekit.io/AHVA/HomeVastaffing01.commercial.mp4" type="video/mp4">
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
                        <img src="https://ik.imagekit.io/AHVA/respite.png?tr=w-400,h-300,q-80" alt="Professional caregiver providing respite care services to elderly client" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                        <h3 class="text-xl font-semibold text-primary mb-3">Respite Care</h3>
                        <p class="text-body-color mb-4">Temporary relief for primary caregivers, ensuring continuous excellent care for your loved ones.</p>
                        <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Learn More &rarr;</a>
                    </div>
                    <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-200 text-left">
                        <img src="https://ik.imagekit.io/AHVA/baby.png?tr=w-400,h-300,q-80" alt="Specialized caregiver working with child with special needs" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                        <h3 class="text-xl font-semibold text-primary mb-3">Children with Special Needs</h3>
                        <p class="text-body-color mb-4">Specialized support focusing on development and well-being of children with unique needs.</p>
                        <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Learn More &rarr;</a>
                    </div>
                    <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-300 text-left">
                        <img src="https://ik.imagekit.io/AHVA/AdobeStock_120567825.png?tr=w-400,h-300,q-80" alt="Compassionate caregiver assisting elderly person with daily activities" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                        <h3 class="text-xl font-semibold text-primary mb-3">Elderly Support</h3>
                        <p class="text-body-color mb-4">Dedicated assistance promoting independence and quality of life for seniors.</p>
                        <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Learn More &rarr;</a>
                    </div>
                    <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-400 text-left">
                        <img src="https://ik.imagekit.io/AHVA/AdobeStock_453300692.png?tr=w-400,h-300,q-80" alt="Professional behavioral support specialist working with client" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                        <h3 class="text-xl font-semibold text-primary mb-3">Behavioral Support Staffing</h3>
                        <p class="text-body-color mb-4">Skilled staff to assist with behavioral challenges, ensuring a safe and supportive environment.</p>
                        <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Learn More &rarr;</a>
                    </div>
                    <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-500 text-left">
                        <img src="https://ik.imagekit.io/AHVA/breakfast.png?tr=w-400,h-300,q-80" alt="Caregiver assisting with personal care and daily living activities" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                        <h3 class="text-xl font-semibold text-primary mb-3">Personal Supports</h3>
                        <p class="text-body-color mb-4">Assistance with daily living activities, including personal care and light housekeeping.</p>
                        <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Learn More &rarr;</a>
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
                <section class="relative parallax-hero p-16 rounded-lg shadow-md text-center mb-16 animate-on-load text-white">
                    <div class="relative z-10">
                        <h1 class="text-4xl md:text-5xl font-extrabold mb-4">Our Compassionate Care Services</h1>
                        <p class="text-xl md:text-2xl max-w-3xl mx-auto">Tailored in-home care solutions to support your loved ones in Orange County, CA.</p>
                    </div>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-on-load">Our Core Services</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-100 text-left">
                                <img src="https://ik.imagekit.io/AHVA/respite.png?tr=w-400,h-300,q-80" alt="Professional caregiver providing respite care services" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-3">Respite Care</h3>
                                <p class="text-body-color mb-4">Temporary relief for primary caregivers, ensuring continuous excellent care.</p>
                                <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Learn More &rarr;</a>
                            </div>
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-200 text-left">
                                <img src="https://ik.imagekit.io/AHVA/baby.png?tr=w-400,h-300,q-80" alt="Specialized care for children with special needs" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-3">Children with Special Needs</h3>
                                <p class="text-body-color mb-4">Specialized support focusing on development and well-being.</p>
                                <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Learn More &rarr;</a>
                            </div>
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-300 text-left">
                                <img src="https://ik.imagekit.io/AHVA/AdobeStock_120567825.png?tr=w-400,h-300,q-80" alt="Elderly support and assistance services" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-3">Elderly Support</h3>
                                <p class="text-body-color mb-4">Dedicated assistance promoting independence and quality of life.</p>
                                <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Learn More &rarr;</a>
                            </div>
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-400 text-left">
                                <img src="https://ik.imagekit.io/AHVA/AdobeStock_453300692.png?tr=w-400,h-300,q-80" alt="Professional behavioral support staffing services" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-3">Behavioral Support Staffing</h3>
                                <p class="text-body-color mb-4">Skilled staff to assist with behavioral challenges, ensuring a safe environment.</p>
                                <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Learn More &rarr;</a>
                            </div>
                            <div class="bg-card rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-500 text-left">
                                <img src="https://ik.imagekit.io/AHVA/breakfast.png?tr=w-400,h-300,q-80" alt="Personal support and daily living assistance" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-3">Personal Supports</h3>
                                <p class="text-body-color mb-4">Assistance with daily living activities, including personal care and housekeeping.</p>
                                <a href="#find-care" class="text-primary font-semibold hover:underline nav-link">Learn More &rarr;</a>
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
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Respite Care Services</h2>
                        <div class="flex flex-col md:flex-row gap-8 items-center">
                            <div class="md:w-1/2">
                                <img src="https://ik.imagekit.io/AHVA/respite.png?tr=w-600,h-400,q-80" alt="Professional respite care services for families" class="rounded-lg shadow-lg w-full aspect-ratio-16-9 object-cover" loading="lazy">
                            </div>
                            <div class="md:w-1/2 text-left">
                                <p class="text-body-color mb-4">Our respite care services provide temporary relief for primary caregivers, allowing you to rest while we ensure your loved one receives exceptional care.</p>
                                <h3 class="text-xl font-semibold text-primary mb-2">Key Benefits:</h3>
                                <ul class="list-disc list-inside text-body-color mb-4">
                                    <li>Relief for caregivers to recharge and prevent burnout</li>
                                    <li>Compassionate, professional care for your loved one</li>
                                    <li>Flexible scheduling to fit your family's needs</li>
                                    <li>Trained caregivers with specialized experience</li>
                                </ul>
                                <h3 class="text-xl font-semibold text-primary mb-2">Who Can Benefit?</h3>
                                <p class="text-body-color mb-4">Families with primary caregivers needing temporary relief from caregiving duties, whether for a few hours or several days.</p>
                                <a href="#find-care" class="btn-accent px-6 py-2 rounded-full font-semibold nav-link">Get Started</a>
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
                            <div class="bg-section rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-100 text-left">
                                <h3 class="text-xl font-semibold text-primary mb-3">Open Communication</h3>
                                <p class="text-body-color">Share updates on health, preferences, or care needs with our team to ensure optimal care delivery.</p>
                            </div>
                            <div class="bg-section rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-200 text-left">
                                <h3 class="text-xl font-semibold text-primary mb-3">Safe Environment</h3>
                                <p class="text-body-color">Provide a safe, clean, and respectful space for our caregivers to work effectively.</p>
                            </div>
                            <div class="bg-section rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-300 text-left">
                                <h3 class="text-xl font-semibold text-primary mb-3">Adherence to Care Plan</h3>
                                <p class="text-body-color">Collaborate with our team to follow the agreed-upon care plan and communicate any changes needed.</p>
                            </div>
                            <div class="bg-section rounded-lg p-6 border border-color-default card-hover-effect animate-on-load animation-delay-400 text-left">
                                <h3 class="text-xl font-semibold text-primary mb-3">Financial Responsibilities</h3>
                                <p class="text-body-color">Ensure timely payment for services as per agreed terms and conditions.</p>
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
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Our mission is to provide compassionate, high-quality in-home care services that enhance the lives of our clients and their families.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Our Mission & Values</h2>
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="md:w-1/2">
                                <img src="https://ik.imagekit.io/AHVA/AdobeStock_498975417.png?tr=w-600,h-400,q-80" alt="Compassionate caregiver assisting elderly person, representing our mission and values" class="rounded-lg shadow-lg w-full aspect-ratio-16-9 object-cover" loading="lazy">
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
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default text-center animate-on-load animation-delay-100">
                                <img src="https://ik.imagekit.io/AHVA/mel.png?tr=w-300,h-300,q-80" alt="Melanie - Professional Caregiver at At Home VA Staffing" class="rounded-full w-32 h-32 object-cover mx-auto mb-4 aspect-ratio-1-1" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-1">Melanie</h3>
                                <p class="text-body-color mb-3">Senior Caregiver</p>
                                <p class="text-sm text-body-color">Melanie brings over 8 years of experience in elderly care and specializes in dementia support.</p>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default text-center animate-on-load animation-delay-200">
                                <img src="https://ik.imagekit.io/AHVA/j.png?tr=w-300,h-300,q-80" alt="Joseph - Professional Caregiver at At Home VA Staffing" class="rounded-full w-32 h-32 object-cover mx-auto mb-4 aspect-ratio-1-1" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-1">Joseph</h3>
                                <p class="text-body-color mb-3">Behavioral Support Specialist</p>
                                <p class="text-sm text-body-color">Joseph specializes in behavioral support and has extensive training in crisis intervention.</p>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default text-center animate-on-load animation-delay-300">
                                <img src="https://ik.imagekit.io/AHVA/kelly.png?tr=w-300,h-300,q-80" alt="Kelly - Professional Caregiver at At Home VA Staffing" class="rounded-full w-32 h-32 object-cover mx-auto mb-4 aspect-ratio-1-1" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-1">Kelly</h3>
                                <p class="text-body-color mb-3">Special Needs Coordinator</p>
                                <p class="text-sm text-body-color">Kelly leads our special needs care team with expertise in developmental disabilities support.</p>
                            </div>
                            <div class="bg-card rounded-lg p-6 shadow-md border border-color-default text-center animate-on-load animation-delay-400">
                                <img src="https://ik.imagekit.io/AHVA/oscar%20port.jpg?tr=w-300,h-300,q-80" alt="Oscar - Professional Caregiver at At Home VA Staffing" class="rounded-full w-32 h-32 object-cover mx-auto mb-4 aspect-ratio-1-1" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-1">Oscar</h3>
                                <p class="text-body-color mb-3">Personal Care Assistant</p>
                                <p class="text-sm text-body-color">Oscar provides compassionate personal care services with a focus on maintaining client dignity.</p>
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
                            <article class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-100">
                                <img src="https://ik.imagekit.io/AHVA/AdobeStock_231170425.png?tr=w-400,h-300,q-80" alt="Benefits of respite care for family caregivers" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-3">The Benefits of Respite Care for Caregivers</h3>
                                <p class="text-body-color text-sm mb-2">January 15, 2025 | By AHVA Team</p>
                                <p class="text-body-color mb-4">Discover how respite care provides essential breaks for primary caregivers, preventing burnout and promoting well-being for the entire family.</p>
                                <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                            </article>
                            <article class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-200">
                                <img src="https://ik.imagekit.io/AHVA/effective.png?tr=w-400,h-300,q-80" alt="Effective strategies for supporting children with special needs" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-3">Effective Strategies for Supporting Children with Special Needs</h3>
                                <p class="text-body-color text-sm mb-2">January 10, 2025 | By AHVA Team</p>
                                <p class="text-body-color mb-4">Learn about personalized approaches and evidence-based resources to support the growth and development of children with special needs.</p>
                                <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                            </article>
                            <article class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-300">
                                <img src="https://ik.imagekit.io/AHVA/shaving.png?tr=w-400,h-300,q-80" alt="Aging in place tips for comfortable and safe home environment" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-3">Aging in Place: Tips for a Comfortable and Safe Home Environment</h3>
                                <p class="text-body-color text-sm mb-2">January 5, 2025 | By AHVA Team</p>
                                <p class="text-body-color mb-4">Practical advice for seniors and their families to ensure a safe and supportive living space for independent aging at home.</p>
                                <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                            </article>
                            <article class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-400">
                                <img src="https://ik.imagekit.io/AHVA/Understanding.png?tr=w-400,h-300,q-80" alt="Understanding behavioral support guide for families" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-3">Understanding Behavioral Support: A Guide for Families</h3>
                                <p class="text-body-color text-sm mb-2">December 28, 2024 | By AHVA Team</p>
                                <p class="text-body-color mb-4">Gain insights into effective behavioral support strategies and how professional staffing can make a meaningful difference.</p>
                                <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                            </article>
                            <article class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-500">
                                <img src="https://ik.imagekit.io/AHVA/Personalized.png?tr=w-400,h-300,q-80" alt="The importance of personalized home care services" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                <h3 class="text-xl font-semibold text-primary mb-3">The Importance of Personalized Home Care</h3>
                                <p class="text-body-color text-sm mb-2">December 20, 2024 | By AHVA Team</p>
                                <p class="text-body-color mb-4">Understanding how personalized care plans make a significant difference in client outcomes, satisfaction, and overall quality of life.</p>
                                <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                            </article>
                        </div>
                    </div>
                </section>

                <section class="bg-section py-12 text-center">
                    <h2 class="text-3xl font-bold text-primary mb-4 animate-on-load">Looking for More Information?</h2>
                    <p class="text-body-color mb-6 max-w-2xl mx-auto">Browse our full archive of articles or contact us with your specific questions about home care services.</p>
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
                    <div class="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div class="animate-on-load animation-delay-100">
                            <h2 class="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                            <ul class="space-y-4 text-body-color text-lg mb-8">
                                <li class="flex items-start">
                                    <i class="fas fa-map-marker-alt text-primary mr-3 mt-1"></i>
                                    <span>1303 W Valencia Dr., #319, Fullerton, CA 92833</span>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-phone-alt text-primary mr-3"></i>
                                    <a href="tel:213-326-7452" class="hover:text-primary transition-colors duration-200">(213) 326-7452</a>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-envelope text-primary mr-3"></i>
                                    <a href="mailto:info@athomevastaffing.com" class="hover:text-primary transition-colors duration-200">info@athomevastaffing.com</a>
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-clock text-primary mr-3"></i>
                                    <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                                </li>
                            </ul>
                            
                            <div class="mb-8">
                                <img src="https://ik.imagekit.io/AHVA/blanket.png?tr=w-600,h-400,q-80" alt="Compassionate caregiver providing comfort and care" class="rounded-lg shadow-lg w-full aspect-ratio-16-9 object-cover" loading="lazy">
                            </div>
                            
                            <h3 class="text-2xl font-bold text-primary mb-6">Our Location</h3>
                            <div id="find-care-map" class="map-container shadow-lg"></div>
                        </div>

                        <div class="animate-on-load animation-delay-200">
                            <h2 class="text-3xl font-bold text-primary mb-6">Send Us an Inquiry</h2>
                            <form id="inquiry-form" action="https://formspree.io/f/xzblnyvw" method="POST" class="space-y-6">
                                <div>
                                    <label for="name" class="block text-primary text-sm font-semibold mb-2">Full Name *</label>
                                    <input type="text" id="name" name="name" required class="w-full" placeholder="Enter your full name">
                                </div>
                                <div>
                                    <label for="email" class="block text-primary text-sm font-semibold mb-2">Email Address *</label>
                                    <input type="email" id="email" name="email" required class="w-full" placeholder="Enter your email address">
                                </div>
                                <div>
                                    <label for="phone" class="block text-primary text-sm font-semibold mb-2">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" class="w-full" placeholder="Enter your phone number">
                                </div>
                                <div>
                                    <label for="care-type" class="block text-primary text-sm font-semibold mb-2">Type of Care Needed</label>
                                    <select id="care-type" name="care-type" class="w-full bg-card border border-color-default text-body-color p-3 rounded">
                                        <option value="">Select care type</option>
                                        <option value="respite-care">Respite Care</option>
                                        <option value="special-needs">Children with Special Needs</option>
                                        <option value="elderly-support">Elderly Support</option>
                                        <option value="behavioral-support">Behavioral Support Staffing</option>
                                        <option value="personal-supports">Personal Supports</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="message" class="block text-primary text-sm font-semibold mb-2">Message *</label>
                                    <textarea id="message" name="message" required rows="4" class="w-full" placeholder="Please describe your care needs and any specific requirements"></textarea>
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
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Join our compassionate team and make a meaningful difference in the lives of others every day.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-on-load">Why Join Our Team?</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-100">
                                <i class="fas fa-hand-holding-heart text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Rewarding Work</h3>
                                <p class="text-body-color">Make a tangible difference in the lives of clients and their families every single day.</p>
                            </div>
                            <div class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-200">
                                <i class="fas fa-users text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Supportive Environment</h3>
                                <p class="text-body-color">Work with a team that values collaboration, respect, and mutual support in all endeavors.</p>
                            </div>
                            <div class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-300">
                                <i class="fas fa-graduation-cap text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Professional Growth</h3>
                                <p class="text-body-color">Access ongoing training and development opportunities to enhance your caregiving skills.</p>
                            </div>
                            <div class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-400">
                                <i class="fas fa-dollar-sign text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Competitive Compensation</h3>
                                <p class="text-body-color">Receive competitive pay and comprehensive benefits for your dedicated service.</p>
                            </div>
                            <div class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-500">
                                <i class="fas fa-calendar-alt text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Flexible Scheduling</h3>
                                <p class="text-body-color">Enjoy flexible work schedules that accommodate your lifestyle and personal needs.</p>
                            </div>
                            <div class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-600">
                                <i class="fas fa-map-marker-alt text-primary text-4xl mb-4"></i>
                                <h3 class="text-xl font-semibold text-primary mb-3">Local Impact</h3>
                                <p class="text-body-color">Serve your local Orange County community and build meaningful, lasting connections.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-section py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Our Simple Application Process</h2>
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="md:w-1/2">
                                <img src="https://ik.imagekit.io/AHVA/Application_406747779.png?tr=w-600,h-400,q-80" alt="Caregiver application process - join our team" class="rounded-lg shadow-lg w-full aspect-ratio-16-9 object-cover" loading="lazy">
                            </div>
                            <div class="md:w-1/2">
                                <p class="text-body-color mb-4">Joining our compassionate caregiving team is simple and straightforward. Follow these steps to start your rewarding career with At Home VA Staffing:</p>
                                <ol class="list-decimal list-inside text-body-color mb-6 space-y-2">
                                    <li>Click the "Apply Online" button to access our secure application portal.</li>
                                    <li>Complete the comprehensive application form with your details and experience.</li>
                                    <li>Submit your application and await a response from our dedicated HR team.</li>
                                    <li>Participate in our interview process and background check.</li>
                                    <li>Complete orientation and training to join our team.</li>
                                </ol>
                                <a href="https://14608.axiscare.com/?caregivers-applications.php" target="_blank" rel="noopener noreferrer" class="btn-accent px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90">Apply Now</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">A Day in the Life of a Caregiver</h2>
                        <div class="flex flex-col md:flex-row items-center gap-8">
                            <div class="md:w-1/2">
                                <img src="https://ik.imagekit.io/AHVA/AdobeStock_390384094.png?tr=w-600,h-400,q-80" alt="Day in the life of a professional caregiver" class="rounded-lg shadow-lg w-full aspect-ratio-16-9 object-cover" loading="lazy">
                            </div>
                            <div class="md:w-1/2">
                                <p class="text-body-color mb-4">Experience the fulfilling daily routine of our professional caregivers:</p>
                                <ul class="list-disc list-inside text-body-color mb-6 space-y-2">
                                    <li>Start your day with meaningful client interactions and care planning</li>
                                    <li>Provide personalized assistance with daily living activities</li>
                                    <li>Engage in companionship and emotional support</li>
                                    <li>Collaborate with healthcare professionals and family members</li>
                                    <li>Document care provided and communicate with supervisors</li>
                                    <li>End your day knowing you've made a real difference</li>
                                </ul>
                                <p class="text-body-color">Every day brings new opportunities to positively impact lives and grow professionally in a supportive environment.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="bg-section py-12 text-center">
                    <h2 class="text-3xl font-bold text-primary mb-4 animate-on-load">Ready to Make a Difference?</h2>
                    <p class="text-body-color mb-6 max-w-2xl mx-auto">Join our team and start a rewarding career in caregiving that truly matters. Apply today and become part of our compassionate community!</p>
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
                            <img src="https://ik.imagekit.io/AHVA/laptop.png?tr=w-600,h-400,q-80" alt="Business growth and investment opportunities in home care industry" class="rounded-lg shadow-lg w-full aspect-ratio-16-9 object-cover" loading="lazy">
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
                                <p class="text-body-color">Tap into a rapidly expanding market with increasing need for quality in-home care services.</p>
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
                                <p class="text-body-color">Our model is designed for scalability, allowing for efficient expansion into new markets.</p>
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
                                <label for="investor-name" class="block text-primary text-sm font-semibold mb-2">Your Name *</label>
                                <input type="text" id="investor-name" name="name" required class="w-full" placeholder="Enter your full name">
                            </div>
                            <div>
                                <label for="investor-email" class="block text-primary text-sm font-semibold mb-2">Your Email *</label>
                                <input type="email" id="investor-email" name="email" required class="w-full" placeholder="Enter your email address">
                            </div>
                            <div>
                                <label for="investor-company" class="block text-primary text-sm font-semibold mb-2">Company/Organization</label>
                                <input type="text" id="investor-company" name="company" class="w-full" placeholder="Enter your company name">
                            </div>
                            <div>
                                <label for="investor-interest" class="block text-primary text-sm font-semibold mb-2">Area of Interest *</label>
                                <textarea id="investor-interest" name="interest" rows="5" required class="w-full" placeholder="Please describe your investment interests and goals"></textarea>
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
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Understanding how we protect your personal information and maintain your privacy.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <div class="bg-card rounded-lg p-6 border border-color-default animate-on-load animation-delay-100">
                            <p class="text-body-color mb-4"><strong>Last updated:</strong> January 17, 2025</p>
                            <p class="text-body-color mb-4">At Home VA Staffing ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">1. Information We Collect</h3>
                            <p class="text-body-color mb-4">We may collect personal information such as your name, email address, phone number, and address when you contact us, request services, or apply for a job. We also collect non-personal information like browser type and IP address through cookies and analytics tools.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">2. How We Use Your Information</h3>
                            <p class="text-body-color mb-4">We use your information to:</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li>Provide and improve our home care services</li>
                                <li>Respond to inquiries and provide customer support</li>
                                <li>Process job applications and employment opportunities</li>
                                <li>Send promotional materials (with your explicit consent)</li>
                                <li>Analyze website usage to enhance user experience</li>
                                <li>Comply with legal and regulatory requirements</li>
                            </ul>

                            <h3 class="text-xl font-semibold text-primary mb-3">3. Sharing Your Information</h3>
                            <p class="text-body-color mb-4">We do not sell your personal information. We may share your information with:</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li>Service providers who assist with our operations (e.g., payment processors, analytics providers)</li>
                                <li>Law enforcement or regulatory authorities when required by law</li>
                                <li>Healthcare professionals involved in your care (with your consent)</li>
                            </ul>

                            <h3 class="text-xl font-semibold text-primary mb-3">4. Cookies and Tracking</h3>
                            <p class="text-body-color mb-4">Our website uses cookies to enhance functionality and analyze traffic. You can manage cookie preferences through your browser settings. Essential cookies are necessary for basic website functionality.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">5. Data Security</h3>
                            <p class="text-body-color mb-4">We implement reasonable security measures to protect your information, including encryption and secure data storage. However, no method of transmission over the Internet is completely secure.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">6. Your Rights</h3>
                            <p class="text-body-color mb-4">You may request access, correction, or deletion of your personal information by contacting us at <a href="mailto:info@athomevastaffing.com" class="text-primary hover:underline">info@athomevastaffing.com</a>.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">7. Third-Party Links</h3>
                            <p class="text-body-color mb-4">Our website may contain links to third-party sites. We are not responsible for their privacy practices and encourage you to review their policies.</p>

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
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Understanding the terms and conditions for using our home care services.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <div class="bg-card rounded-lg p-6 border border-color-default animate-on-load animation-delay-100">
                            <p class="text-body-color mb-4"><strong>Last updated:</strong> January 17, 2025</p>
                            <p class="text-body-color mb-4">Welcome to At Home VA Staffing. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website and services, you agree to be bound by these Terms.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">1. Acceptance of Terms</h3>
                            <p class="text-body-color mb-4">By using our website and services, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use our services.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">2. Services Provided</h3>
                            <p class="text-body-color mb-4">At Home VA Staffing provides in-home care services, including but not limited to respite care, special needs support, elderly care, behavioral support staffing, and personal care assistance. Services are provided based on individual care plans agreed upon with clients.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">3. User Responsibilities</h3>
                            <p class="text-body-color mb-4">Users agree to provide accurate information, maintain a safe environment for caregivers, adhere to agreed-upon care plans, and ensure timely payment for services.</p>

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
                    <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Our commitment to ensuring digital accessibility for everyone in our community.</p>
                </section>

                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <div class="bg-card rounded-lg p-6 border border-color-default animate-on-load animation-delay-100">
                            <p class="text-body-color mb-4"><strong>Last updated:</strong> January 17, 2025</p>
                            <p class="text-body-color mb-4">At Home VA Staffing is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">1. Conformance Status</h3>
                            <p class="text-body-color mb-4">The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: A, AA, and AAA. At Home VA Staffing is partially conformant with WCAG 2.1 AA. Partially conformant means that some parts of the content do not yet fully conform to the accessibility standard.</p>

                            <h3 class="text-xl font-semibold text-primary mb-3">2. Feedback</h3>
                            <p class="text-body-color mb-4">We welcome your feedback on the accessibility of At Home VA Staffing. Please let us know if you encounter accessibility barriers:</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li>E-mail: <a href="mailto:info@athomevastaffing.com" class="text-primary hover:underline">info@athomevastaffing.com</a></li>
                                <li>Phone: <a href="tel:213-326-7452" class="text-primary hover:underline">(213) 326-7452</a></li>
                            </ul>

                            <h3 class="text-xl font-semibold text-primary mb-3">3. Technical Specifications</h3>
                            <p class="text-body-color mb-4">Accessibility of At Home VA Staffing relies on the following technologies:</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li>HTML5 with semantic markup</li>
                                <li>WAI-ARIA for enhanced accessibility</li>
                                <li>CSS3 for responsive design</li>
                                <li>JavaScript for interactive features</li>
                            </ul>

                            <h3 class="text-xl font-semibold text-primary mb-3">4. Limitations and Alternatives</h3>
                            <p class="text-body-color mb-4">Despite our best efforts, there may be some limitations:</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li><strong>Older browsers:</strong> Some features may not work optimally in outdated browsers. We recommend using current browser versions.</li>
                                <li><strong>Third-party content:</strong> Some embedded content may not meet our accessibility standards.</li>
                            </ul>

                            <h3 class="text-xl font-semibold text-primary mb-3">5. Assessment Approach</h3>
                            <p class="text-body-color mb-4">We assess accessibility through:</p>
                            <ul class="text-body-color list-disc list-inside mb-4">
                                <li>Self-evaluation using accessibility tools</li>
                                <li>User testing with assistive technologies</li>
                                <li>Regular accessibility audits</li>
                            </ul>

                            <h3 class="text-xl font-semibold text-primary mb-3">6. Date</h3>
                            <p class="text-body-color mb-4">This statement was created on January 17, 2025.</p>
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
                <p class="text-footer-link mb-4">Compassionate and professional in-home care services in Orange County, CA. Enhancing lives through personalized care solutions.</p>
                <div class="flex space-x-4 mb-4">
                    <a href="https://www.facebook.com/athomevastaffing" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Facebook" class="text-footer-link hover:text-primary transition-colors duration-200">
                        <i class="fab fa-facebook-f text-xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/athomevastaffing" target="_blank" rel="noopener noreferrer" aria-label="Visit us on LinkedIn" class="text-footer-link hover:text-primary transition-colors duration-200">
                        <i class="fab fa-linkedin-in text-xl"></i>
                    </a>
                </div>
                <div class="flex flex-col space-y-3">
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
                    <li class="flex items-start">
                        <i class="fas fa-map-marker-alt mr-2 mt-1"></i>
                        <span>1303 W Valencia Dr., #319, Fullerton, CA 92833</span>
                    </li>
                    <li class="flex items-center">
                        <i class="fas fa-phone-alt mr-2"></i>
                        <a href="tel:213-326-7452" class="hover:text-primary transition-colors duration-200">(213) 326-7452</a>
                    </li>
                    <li class="flex items-center">
                        <i class="fas fa-envelope mr-2"></i>
                        <a href="mailto:info@athomevastaffing.com" class="hover:text-primary transition-colors duration-200">info@athomevastaffing.com</a>
                    </li>
                    <li class="flex items-center">
                        <i class="fas fa-clock mr-2"></i>
                        <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-footer-link text-sm">
            <p>© 2025 At Home VA Staffing. All rights reserved.</p>
            <ul class="flex flex-wrap justify-center space-x-4 mt-2">
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
                    <i class="fas fa-briefcase mr-3"></i> A Caregiving Job
                </a>
                <a href="#find-care" class="btn-main py-4 px-6 rounded-md font-semibold text-center flex items-center justify-center hover:opacity-90 nav-link">
                    <i class="fas fa-hand-holding-heart mr-3"></i> Care for a Loved One
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

            <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full">
                <button id="customize-cookies-modal" class="btn-main px-4 py-2 rounded-md font-semibold text-sm">Customize</button>
                <button id="accept-cookies" class="btn-main px-4 py-2 rounded-md font-semibold text-sm">Accept All Cookies</button>
            </div>
            
            <div id="cookie-settings" class="mt-6 hidden">
                <div class="flex justify-between items-center mb-4">
                    <h4 class="text-xl font-semibold text-primary">Detailed Cookie Settings</h4>
                    <button id="close-cookie-settings" class="text-primary hover:opacity-70 text-2xl" aria-label="Close cookie preferences">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <p class="text-body-color text-sm mb-4">When you visit websites, they may store or retrieve data about you using cookies and similar technologies. You have the option of disabling certain types of cookies, though doing so may impact your experience on the website.</p>

                <div class="mb-4">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-semibold text-primary">Essential</span>
                        <label class="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" checked disabled>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                    <p class="text-body-color text-sm">Required to enable basic website functionality. You may not disable essential cookies.</p>
                </div>

                <div class="mb-4 opacity-50 cursor-not-allowed">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-semibold text-primary">Targeted Advertising</span>
                        <label class="relative inline-flex items-center cursor-not-allowed">
                            <input type="checkbox" value="" class="sr-only peer" disabled>
                            <div class="w-11 h-6 bg-gray-200 rounded-full"></div>
                        </label>
                    </div>
                    <p class="text-body-color text-sm">At Home VA Staffing does NOT use targeted advertising cookies.</p>
                </div>

                <div class="mb-4 opacity-50 cursor-not-allowed">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-lg font-semibold text-primary">Personalization</span>
                        <label class="relative inline-flex items-center cursor-not-allowed">
                            <input type="checkbox" value="" class="sr-only peer" disabled>
                            <div class="w-11 h-6 bg-gray-200 rounded-full"></div>
                        </label>
                    </div>
                    <p class="text-body-color text-sm">At Home VA Staffing does NOT use personalization cookies.</p>
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