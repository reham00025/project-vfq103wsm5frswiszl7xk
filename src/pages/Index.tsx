import React, { useEffect, useRef } from 'react';

const Index = () => {
  const homeMapRef = useRef(null);
  const findCareMapRef = useRef(null);

  useEffect(() => {
    // Initialize the application after component mounts
    initializeApp();
  }, []);

  const initializeApp = () => {
    // All JavaScript functionality will be handled in the HTML script section
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
    <meta name="description"
        content="Professional in-home care services in Orange County, CA. Respite care, special needs support, elderly care, and behavioral support staffing. Call (213) 326-7452.">
    <meta name="keywords"
        content="home care Orange County, in-home care California, respite care, elderly care, special needs care, behavioral support, caregiver services">
    <meta name="author" content="At Home VA Staffing">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://athomevastaffing.com/">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://athomevastaffing.com/">
    <meta property="og:title" content="At Home VA Staffing - Compassionate Home Care in Orange County, CA">
    <meta property="og:description"
        content="Professional in-home care services in Orange County, CA. Respite care, special needs support, elderly care, and behavioral support staffing.">
    <meta property="og:image"
        content="https://ik.imagekit.io/AHVA/AdobeStock_120567859.png">
    <meta property="og:site_name" content="At Home VA Staffing">
    <meta property="og:locale" content="en_US">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://athomevastaffing.com/">
    <meta property="twitter:title" content="At Home VA Staffing - Compassionate Home Care">
    <meta property="twitter:description"
        content="Professional in-home care services in Orange County, CA. Respite care, special needs support, elderly care, and behavioral support staffing.">
    <meta property="twitter:image"
        content="https://ik.imagekit.io/AHVA/AdobeStock_120567859.png">

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "At Home VA Staffing",
      "image": "https://ik.imagekit.io/AHVA/AHVA%203.1%20Transparent%20BG%20-%20Copy.png",
      "url": "https://athomevastaffing.com/",
      "telephone": "+12133267452",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1303 W Valencia Dr., #319",
        "addressLocality": "Fullerton",
        "addressRegion": "CA",
        "postalCode": "92833",
        "addressCountry": "US"
      },
      "openingHours": "Mo-Fr 09:00-17:00",
      "priceRange": "$$",
      "description": "At Home VA Staffing provides compassionate and professional in-home care services in Orange County, CA, specializing in respite care, special needs support, elderly care, and behavioral support staffing.",
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
    
    <style>
        /* Define CSS variables for the light mode color palette */
        :root {
            --bg-light: #FFFFFF;
            --text-primary-light: #3b6255;
            /* Dark green/teal for primary text */
            --text-body-light: #8ba49a;
            /* Lighter green/gray for body text */
            --button-bg-main-light: #cbded3;
            /* Light green for main buttons */
            --button-text-main-light: #3b6255;
            /* Dark green for main button text */
            --button-bg-accent-light: #d2c49e;
            /* Gold/tan for accent buttons */
            --button-text-accent-light: #3b6255;
            /* Dark green for accent button text */
            --border-light: #e2e8f0;
            /* Light gray for borders */
            --card-bg-light: #FFFFFF;
            /* White for card backgrounds */
            --section-bg-light: #f9f9f9;
            /* Off-white for section backgrounds */
            --hover-scale: scale(1.03);
            /* Slight scale on hover */
            --hover-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            /* Larger shadow on hover */
            --footer-bg: #1a202c;
            /* Dark gray for footer */
            --footer-link-color: #cbd5e0;
            /* Light gray for footer links */
        }

        /* Define CSS variables for the dark mode color palette */
        html.dark {
            --bg-light: #1a202c;
            /* Dark background */
            --text-primary-light: #cbded3;
            /* Light green/teal for primary text */
            --text-body-light: #a0aec0;
            /* Lighter gray for body text */
            --button-bg-main-light: #3b6255;
            /* Dark green for main buttons */
            --button-text-main-light: #FFFFFF;
            /* White for main button text */
            --button-bg-accent-light: #8ba49a;
            /* Darker gold/tan for accent buttons */
            --button-text-accent-light: #FFFFFF;
            /* White for accent button text */
            --border-light: #4a5568;
            /* Darker gray for borders */
            --card-bg-light: #2d3748;
            /* Darker card backgrounds */
            --section-bg-light: #242c38;
            /* Darker off-white for section backgrounds */
            --footer-bg: #000000;
            /* Even darker for footer */
            --footer-link-color: #a0aec0;
            /* Lighter gray for footer links */
        }

        /* Base body styles, applying light mode colors */
        html, body {
            background-color: var(--bg-light);
            color: var(--text-body-color);
            font-family: 'Inter', sans-serif;
            transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
            overflow-x: hidden; /* Ensure no horizontal scroll on the entire page */
            width: 100%; /* Ensure full width */
        }

        /* Custom classes to apply theme colors using CSS variables */
        .text-primary {
            color: var(--text-primary-light);
        }

        .text-body-color {
            color: var(--text-body-light);
        }

        .bg-card {
            background-color: var(--card-bg-light);
        }

        .bg-section {
            background-color: var(--section-bg-light);
        }

        /* Button styles with hover effects */
        .btn-main {
            background-color: var(--button-bg-main-light);
            color: var(--button-text-main-light);
            transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .btn-main:hover {
            transform: var(--hover-scale);
            box-shadow: var(--hover-shadow);
            opacity: 0.9;
        }

        .btn-accent {
            background-color: var(--button-bg-accent-light);
            color: var(--button-text-accent-light);
            transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .btn-accent:hover {
            transform: var(--hover-scale);
            box-shadow: var(--hover-shadow);
            opacity: 0.9;
        }

        /* Specific styles for the white outline button with hover effects */
        .btn-outline-white {
            border: 2px solid #FFFFFF;
            color: #FFFFFF;
            transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }

        .btn-outline-white:hover {
            background-color: #FFFFFF;
            color: var(--button-text-accent-light);
            transform: var(--hover-scale);
            box-shadow: var(--hover-shadow);
        }

        /* Specific styles for the dark mode toggle button background */
        .dark-mode-toggle-button-bg {
            background-color: white;
            /* White background for light mode */
            color: var(--button-text-accent-light);
            /* Text color for light mode */
        }

        html.dark .dark-mode-toggle-button-bg {
            background-color: black;
            /* Black background for dark mode */
            color: white;
            /* Text color for dark mode */
        }

        /* Header and Footer specific background colors */
        .header-bg-color {
            background-color: var(--bg-light);
        }

        .footer-bg-color {
            background-color: var(--footer-bg);
        }

        .text-footer-link {
            color: var(--footer-link-color);
        }

        .border-color-default {
            border-color: var(--border-light);
        }

        /* Header Logo Animation */
        .header-logo-img {
            transition: transform 0.3s ease, filter 0.3s ease;
        }

        .header-logo-img:hover {
            transform: scale(1.05);
        }

        /* New logo styling for light and dark modes */
        .site-logo {
            background-image: url('https://ik.imagekit.io/AHVA/AHVA%203.1%20Transparent%20BG%20-%20Copy.png'); /* Light mode logo */
            background-size: contain;
            background-repeat: no-repeat;
            background-position: left center;
        }

        html.dark .site-logo {
            background-image: url('https://ik.imagekit.io/AHVA/AHVA%203.1%20%20Logo%20(2).png'); /* Dark mode logo */
        }

        /* Keyframe animations for content sections */
        @keyframes fadeInUptoTop {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-on-load {
            opacity: 0;
            animation: fadeInUptoTop 0.8s ease-out forwards;
        }

        .animation-delay-100 {
            animation-delay: 0.1s;
        }

        .animation-delay-200 {
            animation-delay: 0.2s;
        }

        .animation-delay-300 {
            animation-delay: 0.3s;
        }

        .animation-delay-400 {
            animation-delay: 0.4s;
        }

        .animation-delay-500 {
            animation-delay: 0.5s;
        }

        .animation-delay-600 {
            animation-delay: 0.6s;
        }

        .animation-delay-700 {
            animation-delay: 0.7s;
        }

        .animation-delay-800 {
            animation-delay: 0.8s;
        }

        /* Card Hover Effect */
        .card-hover-effect:hover {
            transform: var(--hover-scale);
            box-shadow: var(--hover-shadow);
        }

        .card-hover-effect {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* Video Container for responsiveness */
        .video-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%;
            /* 16:9 Aspect Ratio */
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

        /* Form Styling */
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        textarea,
        select { /* Added select for consistency */
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
        textarea:focus,
        select:focus { /* Added select for consistency */
            outline: none;
            border-color: var(--text-primary-light);
            box-shadow: 0 0 0 2px rgba(59, 98, 85, 0.2);
        }

        /* Map Styling for Find Care page and Home page */
        .map-container {
            height: 400px;
            width: 100%;
            border-radius: 8px;
            border: 1px solid var(--border-light);
            margin-top: 2rem;
            /* Add some space above the map */
        }

        /* Loading Spinner */
        .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-left-color: var(--text-primary-light);
            border-radius: 50%;
            width: 24px;
            height: 24px;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        /* Services Carousel Styling */
        .services-carousel-container {
            position: relative;
            overflow: hidden;
            padding-bottom: 2.5rem;
            /* Space for pagination/nav */
        }

        .services-carousel-wrapper {
            display: flex;
            transition: transform 0.6s ease-in-out;
            justify-content: flex-start;
            /* Align items to start */
        }

        .service-card-carousel {
            flex-shrink: 0;
            /* Prevent cards from shrinking */
            width: calc(100% / 3 - 1rem);
            /* 3 cards on desktop, with margin */
            margin: 0 0.5rem;
            /* Space between cards */
            background-color: var(--card-bg-light);
            border: 1px solid var(--border-light);
            border-radius: 0.75rem;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card-carousel:hover {
            transform: translateY(-5px) scale(1.01);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .service-card-carousel img {
            width: 100%;
            height: 200px;
            /* Fixed height for consistent image size */
            object-fit: cover;
            object-position: center;
            transition: transform 0.3s ease;
        }

        .service-card-carousel:hover img {
            transform: scale(1.03);
        }

        .service-card-title-carousel {
            padding: 1rem;
            font-weight: 600;
            font-size: 1.25rem;
            color: var(--text-primary-light);
            text-align: center;
        }

        /* Carousel Navigation/Pagination */
        .carousel-nav-dot {
            width: 10px;
            height: 10px;
            background-color: var(--border-light);
            border-radius: 50%;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .carousel-nav-dot.active {
            background-color: var(--text-primary-light);
        }

        .carousel-arrow {
            background: var(--card-bg-light);
            border: 1px solid var(--border-light);
            color: var(--text-primary-light);
            padding: 0.75rem;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.25rem;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
        }

        .carousel-arrow:hover {
            background-color: var(--text-primary-light);
            color: white;
            transform: scale(1.05);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Responsive Adjustments for Carousel */
        @media (max-width: 1024px) {
            /* Tablet */
            .service-card-carousel {
                width: calc(100% / 2 - 1rem);
                /* 2 cards on tablet */
            }
        }

        @media (max-width: 768px) {
            /* Mobile */
            .service-card-carousel {
                width: calc(100% - 1rem);
                /* 1 card on mobile */
            }
            /* Adjust hero title and subtitle for smaller mobile screens */
            .hero-title {
                font-size: 2.25rem; /* Even smaller font size for mobile hero title */
                line-height: 1.2;
            }
            .hero-subtitle {
                font-size: 0.875rem; /* Even smaller font size for mobile hero subtitle */
            }
            .text-xxs { /* Custom class for very small text */
                font-size: 0.625rem; /* 10px */
            }
        }

        /* Header Navigation Hover Effect */
        .nav-link {
            position: relative;
            padding-bottom: 0.25rem;
            /* Space for the underline */
            transition: color 0.3s ease;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: var(--text-primary-light);
            /* Matches primary text color */
            transition: width 0.3s ease-in-out;
        }

        .nav-link:hover::after {
            width: 100%;
        }

        .nav-link:hover {
            color: var(--text-primary-light);
            /* Ensure text color changes on hover */
        }

        /* Disable underline for buttons that also act as nav-links */
        .btn-main.nav-link::after,
        .btn-accent.nav-link::after,
        .btn-outline-white.nav-link::after {
            width: 0 !important; /* Ensure no underline */
        }

        .btn-main.nav-link:hover::after,
        .btn-accent.nav-link:hover::after,
        .btn-outline-white.nav-link:hover::after {
            width: 0 !important; /* Ensure no underline on hover */
        }

        /* Services Page Parallax Hero */
        .parallax-hero {
            background-image: url('https://ik.imagekit.io/AHVA/AdobeStock_120567859.png');
            /* Use a relevant image */
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            /* Key for parallax effect */
            height: 400px;
            /* Adjust height as needed */
            display: flex;
            align-items: center;
            justify-content: center;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            color: white;
            position: relative;
            overflow: hidden;
            /* Important for containing parallax content */
        }

        .parallax-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            /* Overlay for readability */
            z-index: 1;
        }

        .parallax-hero>* {
            position: relative;
            z-index: 2;
        }

        /* Form Submission Message */
        .form-message {
            margin-top: 1rem;
            padding: 0.75rem 1rem;
            border-radius: 0.375rem;
            font-weight: 500;
            text-align: center;
        }

        .form-message.success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .form-message.error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        /* Tap to Enlarge Modal Styles */
        #imageModal {
            display: none; /* Hidden by default */
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.8);
            align-items: center;
            justify-content: center;
            z-index: 9999;
            overflow: hidden;
            touch-action: none; /* Disable default touch actions for better custom handling */
        }

        #imageModal.active {
            display: flex;
        }

        #imageModal img {
            max-width: 90%;
            max-height: 90%;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
            transition: transform 0.25s ease-in-out;
            transform-origin: center center;
            cursor: grab;
        }

        #imageModal img.grabbing {
            cursor: grabbing;
        }

        #closeBtn {
            position: absolute;
            top: 20px;
            right: 30px;
            font-size: 2rem;
            color: white;
            cursor: pointer;
            z-index: 10000;
        }

        #loader {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 1.5rem;
            z-index: 99999;
            display: none;
        }

        #zoomControls {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            z-index: 10001;
        }

        #zoomControls button {
            padding: 0.5rem 1rem;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background: white;
            color: var(--text-primary-light);
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            transition: background-color 0.2s ease;
        }

        #zoomControls button:hover {
            background-color: #f0f0f0;
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
    </style>
</head>

<body class="font-sans leading-relaxed antialiased">
    <!-- Main wrapper to contain all content and ensure overflow is handled -->
    <div id="app-wrapper" class="w-full overflow-x-hidden">
        <!-- Header Section -->
        <header class="header-bg-color shadow-md sticky top-0 z-50">
            <div class="container mx-auto px-4 py-2">
                <!-- Main navigation bar -->
                <nav class="flex items-center justify-between py-4" aria-label="Main Navigation">
                    <a href="#home" class="flex items-center flex-shrink-0" aria-label="At Home VA Staffing Home">
                        <!-- Updated logo to use a div with background images for light/dark mode -->
                        <!-- Adjusted logo size to w-64 for prominence and h-12 for better aspect ratio -->
                        <div class="h-12 w-64 mr-2 header-logo-img site-logo max-w-full"></div>
                    </a>
                    <!-- Desktop navigation links and CTA buttons -->
                    <div class="hidden md:flex items-center space-x-6">
                        <a href="#home" class="text-primary hover:text-primary transition-colors duration-200 nav-link"
                            data-title="At Home VA Staffing - Compassionate Home Care"
                            data-description="At Home VA Staffing provides compassionate and professional in-home care services in Orange County, CA.">Home</a>
                        <a href="#services" class="text-primary hover:text-primary transition-colors duration-200 nav-link"
                            data-title="Services - At Home VA Staffing: Comprehensive Home Care Solutions"
                            data-description="Explore At Home VA Staffing's comprehensive in-home care services including respite, special needs, elderly support, and behavioral support staffing in Orange County, CA.">Services</a>
                        <a href="#about" class="text-primary hover:text-primary transition-colors duration-200 nav-link"
                            data-title="About Us - At Home VA Staffing: Our Mission & Values"
                            data-description="Learn about At Home VA Staffing's mission, values, and our dedicated team providing compassionate in-home care in Orange County, CA.">About
                            Us</a>
                        <a href="#blog" class="text-primary hover:text-primary transition-colors duration-200 nav-link"
                            data-title="Blog - At Home VA Staffing: Insights on Home Care"
                            data-description="Stay informed with the latest news, tips, and insights on home care, elderly support, and special needs care from At Home VA Staffing.">Blog</a>
                        <a href="#find-care" class="text-primary hover:text-primary transition-colors duration-200 nav-link"
                            data-title="Find Care - At Home VA Staffing: In-Home Care in Orange County"
                            data-description="Contact At Home VA Staffing to find compassionate in-home care services in Orange County, CA. Submit an inquiry or reach out directly.">Find
                            Care</a>
                        <!-- Call to action buttons -->
                        <a href="tel:213-326-7452"
                            class="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md btn-main hover:opacity-90 transition duration-300"
                            aria-label="Call At Home VA Staffing">
                            <i class="fas fa-phone-alt mr-2" aria-hidden="true"></i> (213) 326-7452
                        </a>
                        <button id="get-started-btn"
                            class="px-4 py-2 rounded-md transition duration-300 btn-accent hover:opacity-90"
                            aria-label="Get Started with At Home VA Staffing">Get Started</button>
                        <button id="dark-mode-toggle"
                            class="px-4 py-2 rounded-md transition duration-300 flex items-center justify-center dark-mode-toggle-button-bg"
                            aria-label="Toggle dark mode">
                            <i class="fas fa-moon text-lg" aria-hidden="true"></i>
                        </button>
                    </div>
                    <!-- Mobile menu toggle and header buttons -->
                    <div class="md:hidden flex items-center space-x-1"> <!-- Adjusted space-x to space-x-1 -->
                        <!-- New mobile phone button -->
                        <a href="tel:213-326-7452"
                            class="flex-1 px-1 py-1 text-xxs rounded-md btn-main flex items-center justify-center"
                            aria-label="Call At Home VA Staffing">
                            <i class="fas fa-phone-alt mr-1" aria-hidden="true"></i> Call
                        </a>
                        <!-- New mobile get started button -->
                        <button id="mobile-header-get-started-btn"
                            class="flex-1 px-1 py-1 text-xxs rounded-md btn-accent"
                            aria-label="Get Started with At Home VA Staffing">Get Started</button>
                        <button id="dark-mode-toggle-mobile"
                            class="px-2 py-1 rounded-md flex items-center justify-center dark-mode-toggle-button-bg"
                            aria-label="Toggle dark mode">
                            <i class="fas fa-moon text-base" aria-hidden="true"></i>
                        </button>
                        <button id="mobile-menu-button" class="p-2 text-primary" aria-label="Toggle mobile menu">
                            <i class="fas fa-bars text-xl" aria-hidden="true"></i>
                        </button>
                    </div>
                </nav>
                <!-- Mobile menu (hidden by default, toggled by JS) -->
                <div id="mobile-menu" class="hidden md:hidden bg-card p-4 rounded-b-lg shadow-md">
                    <a href="#home"
                        class="block py-2 text-primary hover:text-primary transition-colors duration-200 nav-link"
                        data-title="At Home VA Staffing - Compassionate Home Care"
                        data-description="At Home VA Staffing provides compassionate and professional in-home care services in Orange County, CA.">Home</a>
                    <a href="#services"
                        class="block py-2 text-primary hover:text-primary transition-colors duration-200 nav-link"
                        data-title="Services - At Home VA Staffing: Comprehensive Home Care Solutions"
                        data-description="Explore At Home VA Staffing's comprehensive in-home care services including respite, special needs, elderly support, and behavioral support staffing in Orange County, CA.">Services</a>
                    <a href="#about"
                        class="block py-2 text-primary hover:text-primary transition-colors duration-200 nav-link"
                        data-title="About Us - At Home VA Staffing: Our Mission & Values"
                        data-description="Learn about At Home VA Staffing's mission, values, and our dedicated team providing compassionate in-home care in Orange County, CA.">About
                        Us</a>
                    <a href="#blog"
                        class="block py-2 text-primary hover:text-primary transition-colors duration-200 nav-link"
                        data-title="Blog - At Home VA Staffing: Insights on Home Care"
                        data-description="Stay informed with the latest news, tips, and insights on home care, elderly support, and special needs care from At Home VA Staffing.">Blog</a>
                    <a href="#find-care"
                        class="block py-2 text-primary hover:text-primary transition-colors duration-200 nav-link"
                        data-title="Find Care - At Home VA Staffing: In-Home Care in Orange County"
                        data-description="Contact At Home VA Staffing to find compassionate in-home care services in Orange County, CA. Submit an inquiry or reach out directly.">Find
                        Care</a>
                </div>
            </div>
        </header>

        <main id="content-area">
            <!-- Home Section -->
            <section id="home" class="page-section active">
                <div
                    class="relative h-screen max-h-[700px] text-white text-center flex flex-col justify-center items-center overflow-hidden">
                    <!-- Background video for engaging visual -->
                    <video autoplay muted loop playsinline
                        poster="https://ik.imagekit.io/AHVA/AdobeStock_120567859.png?tr=w-1920,h-1080,q-60"
                        class="absolute top-0 left-0 w-full h-full object-cover z-0"
                        aria-label="Video showing compassionate home care services">
                        <source
                            src="https://ik.imagekit.io/AHVA/HomeVastaffing01.commercial.mp4"
                            type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10 hero-video-overlay"></div>
                    <div class="relative z-20 p-4 max-w-4xl mx-auto animate-on-load">
                        <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-lg hero-title">Compassionate Care,
                            Right at Home</h1>
                        <p class="text-base sm:text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md hero-subtitle">Providing professional and
                            personalized in-home care services in Orange County, CA.</p>
                        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#find-care"
                                class="btn-main px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 animate-on-load animation-delay-100 nav-link">Find
                                Care Now</a>
                            <a href="#careers"
                                class="btn-outline-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 animate-on-load animation-delay-200 nav-link">Join
                                Our Team</a>
                        </div>
                    </div>
                </div>
                <!-- Services Overview Section - Sliding Carousel -->
                <section class="container mx-auto px-4 py-16 bg-section rounded-lg shadow-lg my-12 animate-on-load">
                    <h2 class="text-4xl font-bold text-center text-primary mb-12">Our Services</h2>
                    <div class="services-carousel-container">
                        <div class="services-carousel-wrapper" id="servicesCarousel">
                            <!-- Service 1: Respite Care -->
                            <div class="service-card-carousel">
                                <img src="https://ik.imagekit.io/AHVA/respite.png?tr=w-400,h-300,q-80"
                                    alt="Caregiver offering temporary relief to family, illustrating respite care benefits" loading="lazy">
                                <h3 class="service-card-title-carousel">Respite Care</h3>
                            </div>
                            <!-- Service 2: Children with Special Needs -->
                            <div class="service-card-carousel">
                                <img src="https://ik.imagekit.io/AHVA/baby.png?tr=w-400,h-300,q-80"
                                    alt="Caregiver assisting a child with special needs in a home environment" loading="lazy">
                                <h3 class="service-card-title-carousel">Children with Special Needs</h3>
                            </div>
                            <!-- Service 3: Elderly Support -->
                            <div class="service-card-carousel">
                                <img src="https://ik.imagekit.io/AHVA/AdobeStock_120567825.png?tr=w-400,h-300,q-80"
                                    alt="Elderly person receiving support from caregiver" loading="lazy">
                                <h3 class="service-card-title-carousel">Elderly Support</h3>
                            </div>
                            <!-- Service 4: Behavioral Support Staffing -->
                            <div class="service-card-carousel">
                                <img src="https://ik.imagekit.io/AHVA/AdobeStock_453300692.png?tr=w-400,h-300,q-80"
                                    alt="Caregiver providing calm behavioral support to an individual" loading="lazy">
                                <h3 class="service-card-title-carousel">Behavioral Support Staffing</h3>
                            </div>
                            <!-- Service 5: Personal Supports -->
                            <div class="service-card-carousel">
                                <img src="https://ik.imagekit.io/AHVA/breakfast.png?tr=w-400,h-300,q-80"
                                    alt="Caregiver assisting with personal supports like meal preparation and feeding" loading="lazy">
                                <h3 class="service-card-title-carousel">Personal Supports</h3>
                            </div>
                        </div>
                        <!-- Carousel Navigation Arrows -->
                        <button id="carousel-prev"
                            class="carousel-arrow absolute left-2 top-1/2 -translate-y-1/2 z-10" aria-label="Previous slide">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button id="carousel-next"
                            class="carousel-arrow absolute right-2 top-1/2 -translate-y-1/2 z-10" aria-label="Next slide">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                        <!-- Carousel Pagination Dots -->
                        <div id="carousel-dots" class="flex justify-center space-x-2 mt-4 absolute bottom-0 left-0 right-0">
                        </div>
                    </div>
                </section>

                <!-- Testimonials Section - New for Home Page -->
                <section class="bg-card py-16">
                    <div class="container mx-auto px-4">
                        <h2 class="text-4xl font-bold text-center text-primary mb-12 animate-on-load">What Our Clients Say
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <!-- Testimonial 1 -->
                            <div
                                class="bg-section rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-100">
                                <i class="fas fa-quote-left text-primary text-3xl mb-4"></i>
                                <p class="text-body-color mb-4 italic">"At Home VA Staffing provided exceptional care for my
                                    mother. The caregivers are truly compassionate and professional. Highly recommend!"</p>
                                <p class="font-semibold text-primary">- Sarah L.</p>
                                <p class="text-sm text-body-color">Daughter of Client</p>
                            </div>
                            <!-- Testimonial 2 -->
                            <div
                                class="bg-section rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-200">
                                <i class="fas fa-quote-left text-primary text-3xl mb-4"></i>
                                <p class="text-body-color mb-4 italic">"The respite care allowed me to finally get some rest.
                                    Their team is reliable and understanding. A true blessing!"</p>
                                <p class="font-semibold text-primary">- Mark T.</p>
                                <p class="text-sm text-body-color">Primary Caregiver</p>
                            </div>
                            <!-- Testimonial 3 -->
                            <div
                                class="bg-section rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-300">
                                <i class="fas fa-quote-left text-primary text-3xl mb-4"></i>
                                <p class="text-body-color mb-4 italic">"My son with special needs has thrived under their
                                    care. The personalized approach made all the difference."</p>
                                <p class="font-semibold text-primary">- Jessica R.</p>
                                <p class="text-sm text-body-color">Mother of Client</p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Call to Action -->
                <section class="bg-section py-12 text-center">
                    <h2 class="text-3xl font-bold text-primary mb-4 animate-on-load">Ready to Find the Right Care?</h2>
                    <p class="text-body-color mb-6 max-w-2xl mx-auto">Contact us today to discuss your specific care
                        needs and schedule a free consultation.</p>
                    <a href="#find-care"
                        class="btn-main px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:opacity-90 animate-on-load animation-delay-100 nav-link">Request
                        a Consultation</a>
                </section>

                <!-- Home Page Map Section -->
                <section class="bg-card py-16 rounded-lg shadow-md mt-12">
                    <div class="container mx-auto px-4">
                        <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Our Service Area</h2>
                        <p class="text-lg text-body-color text-center max-w-3xl mx-auto mb-8">We proudly serve clients across Orange County, CA. See our service areas on the map below.</p>
                        <div id="home-map" class="map-container shadow-lg animate-on-load animation-delay-100"></div>
                    </div>
                </section>
            </section>

            <!-- Services Page Section -->
            <section id="services" class="page-section hidden">
                <!-- Parallax Hero for Services Page -->
                <div class="parallax-hero h-[400px] flex items-center justify-center text-center">
                    <div class="relative z-20 p-4 max-w-4xl mx-auto">
                        <h1 class="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-on-load">Our
                            Comprehensive Care Services</h1>
                        <p class="text-lg md:text-xl text-gray-200 mt-4 drop-shadow-md animate-on-load animation-delay-100">
                            Tailored solutions for every need, delivered with compassion and professionalism.</p>
                    </div>
                </div>

                <div class="container mx-auto px-4 py-12">
                    <!-- Detailed Service Sections - Moved from Home -->
                    <section id="respite-care-detail" class="bg-section py-16 rounded-lg shadow-md mb-8">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Respite
                                Care</h2>
                            <div class="flex flex-col md:flex-row gap-8 items-center">
                                <div class="md:w-1/2 animate-on-load animation-delay-100">
                                    <img src="https://ik.imagekit.io/AHVA/respite.png?tr=w-600,h-400,q-80"
                                        alt="Caregiver offering temporary relief to family, illustrating respite care benefits"
                                        class="rounded-lg shadow-lg w-full transform transition-transform duration-300 hover:scale-[1.02]" loading="lazy">
                                </div>
                                <div class="md:w-1/2 animate-on-load animation-delay-200">
                                    <p class="text-body-color mb-4 text-lg">Our respite care services provide temporary relief for
                                        primary caregivers, allowing you to rest and recharge while we ensure your loved one receives
                                        exceptional, compassionate care in a safe and supportive environment.</p>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Key Benefits:</h3>
                                    <ul class="list-disc list-inside text-body-color mb-4 space-y-1">
                                        <li>Relief for caregivers to recharge and prevent burnout</li>
                                        <li>Compassionate, professional care for your loved one</li>
                                        <li>Flexible scheduling (hourly, daily, or overnight) to fit your needs</li>
                                        <li>Peace of mind knowing your loved one is in capable hands</li>
                                    </ul>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Who Can Benefit?</h3>
                                    <p class="text-body-color mb-4">Families with primary caregivers needing a temporary break from
                                        their caregiving duties, whether for a few hours, a day, or longer periods.</p>
                                    <a href="#find-care"
                                        class="btn-accent px-6 py-2 rounded-full font-semibold nav-link hover:shadow-lg">Enquiry</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="special-needs-care-detail" class="bg-card py-16 rounded-lg shadow-md mb-8">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">
                                Children with Special Needs</h2>
                            <div class="flex flex-col md:flex-row-reverse gap-8 items-center">
                                <div class="md:w-1/2 animate-on-load animation-delay-100">
                                    <img src="https://ik.imagekit.io/AHVA/baby.png?tr=w-600,h-400,q-80"
                                        alt="Caregiver assisting a child with special needs in a home environment"
                                        class="rounded-lg shadow-lg w-full transform transition-transform duration-300 hover:scale-[1.02]" loading="lazy">
                                </div>
                                <div class="md:w-1/2 animate-on-load animation-delay-200">
                                    <p class="text-body-color mb-4 text-lg">We offer specialized support tailored to the unique
                                        developmental, emotional, and physical needs of children with special needs. Our goal is to
                                        foster growth, encourage independence, and enhance their overall well-being in a nurturing
                                        environment.</p>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Key Benefits:</h3>
                                    <ul class="list-disc list-inside text-body-color mb-4 space-y-1">
                                        <li>Individualized care plans designed with families and professionals</li>
                                        <li>Support for developmental milestones and educational goals</li>
                                        <li>Compassionate and highly trained caregivers experienced in special needs care</li>
                                        <li>Assistance with daily routines and therapeutic activities</li>
                                    </ul>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Who Can Benefit?</h3>
                                    <p class="text-body-color mb-4">Families with children requiring specialized care due to
                                        developmental delays, physical disabilities, autism spectrum disorder, or other medical
                                        conditions.</p>
                                    <a href="#find-care"
                                        class="btn-accent px-6 py-2 rounded-full font-semibold nav-link hover:shadow-lg">Enquiry</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="elderly-support-detail" class="bg-section py-16 rounded-lg shadow-md mb-8">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Elderly
                                Support</h2>
                            <div class="flex flex-col md:flex-row gap-8 items-center">
                                <div class="md:w-1/2 animate-on-load animation-delay-100">
                                    <img src="https://ik.imagekit.io/AHVA/AdobeStock_120567825.png?tr=w-600,h-400,q-80"
                                        alt="Elderly person receiving support from caregiver"
                                        class="rounded-lg shadow-lg w-full transform transition-transform duration-300 hover:scale-[1.02]" loading="lazy">
                                </div>
                                <div class="md:w-1/2 animate-on-load animation-delay-200">
                                    <p class="text-body-color mb-4 text-lg">Our dedicated elderly support services are designed
                                        to promote independence, comfort, and a high quality of life for seniors who wish to
                                        continue living in the familiar surroundings of their own homes.</p>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Key Benefits:</h3>
                                    <ul class="list-disc list-inside text-body-color mb-4 space-y-1">
                                        <li>Personalized care to maintain independence and dignity</li>
                                        <li>Assistance with daily activities (ADLs) such as bathing, dressing, and mobility</li>
                                        <li>Companionship, emotional support, and engaging activities</li>
                                        <li>Medication reminders and light housekeeping</li>
                                    </ul>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Who Can Benefit?</h3>
                                    <p class="text-body-color mb-4">Seniors seeking to age in place with dignity, comfort, and
                                        support, as well as families looking for reliable and compassionate care for their elderly
                                        loved ones.</p>
                                    <a href="#find-care"
                                        class="btn-accent px-6 py-2 rounded-full font-semibold nav-link hover:shadow-lg">Enquiry</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="behavioral-support-detail" class="bg-card py-16 rounded-lg shadow-md mb-8">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">
                                Behavioral Support Staffing</h2>
                            <div class="flex flex-col md:flex-row-reverse gap-8 items-center">
                                <div class="md:w-1/2 animate-on-load animation-delay-100">
                                    <img src="https://ik.imagekit.io/AHVA/AdobeStock_453300692.png?tr=w-600,h-400,q-80"
                                        alt="Caregiver providing behavioral support to an individual"
                                        class="rounded-lg shadow-lg w-full transform transition-transform duration-300 hover:scale-[1.02]" loading="lazy">
                                </div>
                                <div class="md:w-1/2 animate-on-load animation-delay-200">
                                    <p class="text-body-color mb-4 text-lg">We provide skilled staff to assist individuals with
                                        behavioral challenges, creating a safe, structured, and supportive environment. Our goal is
                                        to promote positive behaviors and enhance daily functioning.</p>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Key Benefits:</h3>
                                    <ul class="list-disc list-inside text-body-color mb-4 space-y-1">
                                        <li>Trained professionals for effective behavioral management</li>
                                        <li>Implementation of personalized behavior support plans</li>
                                        <li>Creation of a safe and structured environment</li>
                                        <li>Support for emotional regulation and social skill development</li>
                                    </ul>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Who Can Benefit?</h3>
                                    <p class="text-body-color mb-4">Individuals with behavioral challenges, including those with
                                        autism, developmental disabilities, or other conditions requiring specialized behavioral
                                        interventions.</p>
                                    <a href="#find-care"
                                        class="btn-accent px-6 py-2 rounded-full font-semibold nav-link hover:shadow-lg">Enquiry</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="personal-supports-detail" class="bg-section py-16 rounded-lg shadow-md mb-8">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">
                                Personal Supports</h2>
                            <div class="flex flex-col md:flex-row gap-8 items-center">
                                <div class="md:w-1/2 animate-on-load animation-delay-100">
                                    <img src="https://ik.imagekit.io/AHVA/breakfast.png?tr=w-600,h-400,q-80"
                                        alt="Caregiver assisting with personal supports like breakfast"
                                        class="rounded-lg shadow-lg w-full transform transition-transform duration-300 hover:scale-[1.02]" loading="lazy">
                                </div>
                                <div class="md:w-1/2 animate-on-load animation-delay-200">
                                    <p class="text-body-color mb-4 text-lg">We provide compassionate assistance with daily living
                                        activities, ensuring comfort, dignity, and independence for our clients. Our personal
                                        support services are tailored to individual needs and preferences.</p>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Key Benefits:</h3>
                                    <ul class="list-disc list-inside text-body-color mb-4 space-y-1">
                                        <li>Assistance with personal care (bathing, dressing, grooming)</li>
                                        <li>Support with meal preparation and feeding</li>
                                        <li>Light housekeeping and laundry</li>
                                        <li>Medication reminders and appointment escort</li>
                                    </ul>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Who Can Benefit?</h3>
                                    <p class="text-body-color mb-4">Individuals needing help with daily activities to maintain
                                        their independence and quality of life at home, due to age, illness, or disability.</p>
                                    <a href="#find-care"
                                        class="btn-accent px-6 py-2 rounded-full font-semibold nav-link hover:shadow-lg">Enquiry</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Client Responsibilities - Moved from Home -->
                    <section class="bg-card py-16 rounded-lg shadow-md mb-8">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Client
                                Responsibilities</h2>
                            <p class="text-lg text-body-color text-center max-w-3xl mx-auto mb-8">To ensure the best care
                                experience, we ask our clients to adhere to the following responsibilities:</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                <div
                                    class="bg-section rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-100">
                                    <h3 class="text-xl font-semibold text-primary mb-3">Open Communication</h3>
                                    <p class="text-body-color">Share updates on health, preferences, or care needs with our
                                        team promptly.</p>
                                </div>
                                <div
                                    class="bg-section rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-200">
                                    <h3 class="text-xl font-semibold text-primary mb-3">Safe Environment</h3>
                                    <p class="text-body-color">Provide a safe, clean, and respectful space for our
                                        caregivers to perform their duties effectively.</p>
                                </div>
                                <div
                                    class="bg-section rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-300">
                                    <h3 class="text-xl font-semibold text-primary mb-3">Adherence to Care Plan</h3>
                                    <p class="text-body-color">Collaborate with our team to follow the agreed-upon care
                                        plan and schedule.</p>
                                </div>
                                <div
                                    class="bg-section rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-400">
                                    <h3 class="text-xl font-semibold text-primary mb-3">Financial Responsibilities</h3>
                                    <p class="text-body-color">Ensure timely payment for services as per agreed terms and
                                        conditions.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Call to Action for Services Page -->
                    <section class="bg-section py-12 text-center rounded-lg shadow-md">
                        <h2 class="text-3xl font-bold text-primary mb-4 animate-on-load">Ready to Discuss Your Care Needs?
                        </h2>
                        <p class="text-body-color mb-6 max-w-2xl mx-auto">Our team is here to provide personalized solutions
                            and support for you and your loved ones.</p>
                        <a href="#find-care"
                            class="btn-main px-8 py-3 rounded-full text-lg font-semibold animate-on-load animation-delay-100 nav-link">Get
                            a Free Consultation</a>
                    </section>
                </div>
            </section>

            <!-- About Us Page Section -->
            <section id="about" class="page-section hidden">
                <div class="container mx-auto px-4 py-12">
                    <!-- Hero Section -->
                    <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                        <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">About At Home VA Staffing</h1>
                        <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Our mission is to provide
                            compassionate, high-quality in-home care.</p>
                    </section>

                    <!-- Our Mission Section -->
                    <section class="bg-card py-16">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Our
                                Mission & Values</h2>
                            <div class="flex flex-col md:flex-row items-center gap-8">
                                <div class="md:w-1/2">
                                    <img src="https://ik.imagekit.io/AHVA/AdobeStock_498975417.png?tr=w-600,h-400,q-80"
                                        alt="Caregiver assisting elderly person with a warm smile" class="rounded-lg shadow-lg w-full" loading="lazy">
                                </div>
                                <div class="md:w-1/2">
                                    <p class="text-body-color mb-4">At Home VA Staffing is committed to delivering
                                        exceptional in-home care that prioritizes the dignity, comfort, and well-being of
                                        every individual we serve. We believe in fostering independence and enhancing the
                                        quality of life for our clients and their families.</p>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Our Core Values:</h3>
                                    <ul class="list-disc list-inside text-body-color mb-4">
                                        <li><strong>Compassion:</strong> Approaching every interaction with empathy and
                                            kindness.</li>
                                        <li><strong>Integrity:</strong> Upholding the highest ethical standards in all our
                                            services.</li>
                                        <li><strong>Professionalism:</strong> Delivering expert care with respect and
                                            dedication.</li>
                                        <li><strong>Personalization:</strong> Tailoring care plans to meet unique individual
                                            needs.</li>
                                        <li><strong>Excellence:</strong> Continuously striving for the highest quality of
                                            care and service.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Our Team Section -->
                    <section class="bg-section py-16">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-4 animate-on-load">Meet
                                Our Caregivers</h2>
                            <p class="text-lg text-body-color text-center max-w-3xl mx-auto mb-12 animate-on-load animation-delay-50">See caregiver profiles below</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <!-- Caregiver Melanie -->
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default text-center animate-on-load animation-delay-100">
                                    <img src="https://ik.imagekit.io/AHVA/mel.png?tr=w-300,h-300,q-80"
                                        alt="Portrait of Melanie, a Registered Home Care Aide"
                                        class="rounded-full w-32 h-32 object-cover mx-auto mb-4 enlargeable aspect-ratio-1-1"
                                        data-hires="https://ik.imagekit.io/AHVA/mel.png" loading="lazy">
                                    <h3 class="text-xl font-semibold text-primary mb-1">Meet Melanie (Mel)</h3>
                                    <p class="text-body-color mb-3">Registered Home Care Aide</p>
                                    <p class="text-sm text-body-color text-left">Melanie, who goes by Mel, grew up in Santa Cruz, California. As the oldest sibling raised by a single mom, she learned responsibility and independence early on—qualities she brings into every caregiving role. Mel's passion for caregiving started with personal experiences in her own family, especially caring for a close aunt and younger siblings with autism. She's known for her nurturing nature, sharp attention to detail, and ability to stay calm in any situation. What brings Mel the most joy is seeing real progress in the individuals she supports and giving parents peace of mind knowing their loved ones are in caring hands. In her free time, Mel loves traveling, spending time with family, swimming, and planning thoughtful surprises. She speaks both English and Spanish and brings heart, creativity, and dedication to everything she does.</p>
                                </div>
                                <!-- Caregiver Joseph -->
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default text-center animate-on-load animation-delay-200">
                                    <img src="https://ik.imagekit.io/AHVA/j.png?tr=w-300,h-300,q-80"
                                        alt="Portrait of Joseph, a Registered Home Care Aide"
                                        class="rounded-full w-32 h-32 object-cover mx-auto mb-4 enlargeable aspect-ratio-1-1"
                                        data-hires="https://ik.imagekit.io/AHVA/j.png" loading="lazy">
                                    <h3 class="text-xl font-semibold text-primary mb-1">Meet Joseph (or Joe)</h3>
                                    <p class="text-body-color mb-3">Registered Home Care Aide</p>
                                    <p class="text-sm text-body-color text-left">Joseph is originally from Kenya and has called California home for over 10 years. With a strong background in healthcare, he's currently pursuing his nursing degree and dreams of earning his doctorate one day. What makes Joseph special is his heart for people. He became a caregiver because helping others brings him joy and meaning, especially when he sees his clients smile. His friends describe him as understanding, patient, adventurous, and funny. In his free time, Joseph loves spending time with his little sister, catching movies, or relaxing at the beach. He also speaks Swahili fluently and brings a warm, welcoming energy to every home he visits. Joseph is passionate about his work and always willing to adapt to meet the needs of the families he serves. We're proud to have him on the AHVA team!</p>
                                </div>
                                <!-- Caregiver Kelly -->
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default text-center animate-on-load animation-delay-400">
                                    <img src="https://ik.imagekit.io/AHVA/kelly.png?tr=w-300,h-300,q-80"
                                        alt="Portrait of Kelly, a Registered Home Care Aide and Certified Nursing Assistant"
                                        class="rounded-full w-32 h-32 object-cover mx-auto mb-4 enlargeable aspect-ratio-1-1"
                                        data-hires="https://ik.imagekit.io/AHVA/kelly.png" loading="lazy">
                                    <h3 class="text-xl font-semibold text-primary mb-1">Meet Kelly</h3>
                                    <p class="text-body-color mb-3">Registered Home Care Aide + Certified Nursing Assistant</p>
                                    <p class="text-sm text-body-color text-left">Kelly is a Certified Nursing Assistant (CNA) with a big heart and a deep love for caregiving. Her passion for helping others began when she cared for her grandparents during their time in hospice, an experience that shaped her gentle and attentive approach. She's known for her calm, caring personality and her ability to connect with clients on a personal level. Families describe her as observant, respectful, and easy to talk to. Kelly finds joy in making her clients smile and feel comfortable, especially during moments that matter most. Outside of work, Kelly enjoys reading, attending church, and spending time with her loved ones. She also has a love for travel, one of her favorite adventures was driving across England! Kelly is proud to be a part of AHVA and is dedicated to bringing warmth and support to the families he serves.</p>
                                </div>
                                                            <!-- Caregiver Oscar -->
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default text-center animate-on-load animation-delay-300">
                                    <img src="https://ik.imagekit.io/AHVA/oscar%20port.jpg?tr=w-300,h-300,q-80"
                                        alt="Portrait of Oscar, a Registered Home Care Aide"
                                        class="rounded-full w-32 h-32 object-cover mx-auto mb-4 enlargeable aspect-ratio-1-1"
                                        data-hires="https://ik.imagekit.io/AHVA/oscar%20port.jpg" loading="lazy">
                                    <h3 class="text-xl font-semibold text-primary mb-1">Meet Oscar</h3>
                                    <p class="text-body-color mb-3">Registered Home Care Aide</p>
                                    <p class="text-sm text-body-color text-left">Oscar is a proud dad of three and grew up in a loving Mexican family in San Diego. He now lives in Orange County and loves helping others. He started caregiving after high school and quickly realized it was the right fit for him. He enjoys getting to know different people and being there when they need help the most. Oscar is kind, dependable, and easy to talk to. Outside of work, he likes spending time with his kids, working on cars, and going on hikes. He speaks both English and Spanish and is always ready to give his best to the families he supports.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Why Choose Us Section -->
                    <section class="bg-card py-16">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-on-load">Why
                                Choose At Home VA Staffing?</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div
                                    class="flex items-start bg-section p-6 rounded-lg shadow-md border border-color-default animate-on-load animation-delay-100">
                                    <i class="fas fa-hand-holding-heart text-primary text-4xl mr-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-2">Personalized Care Plans</h3>
                                        <p class="text-body-color">We develop customized care plans tailored to the unique
                                            needs and preferences of each client.</p>
                                    </div>
                                </div>
                                <div
                                    class="flex items-start bg-section p-6 rounded-lg shadow-md border border-color-default animate-on-load animation-delay-200">
                                    <i class="fas fa-user-shield text-primary text-4xl mr-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-2">Experienced & Vetted Caregivers
                                        </h3>
                                        <p class="text-body-color">Our team consists of highly trained, compassionate, and
                                            thoroughly vetted professionals.</p>
                                    </div>
                                </div>
                                <div
                                    class="flex items-start bg-section p-6 rounded-lg shadow-md border border-color-default animate-on-load animation-delay-300">
                                    <i class="fas fa-headset text-primary text-4xl mr-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-2">24/7 Support</h3>
                                        <p class="text-body-color">We provide continuous support and are always available to
                                            address your concerns.</p>
                                    </div>
                                </div>
                                <div
                                    class="flex items-start bg-section p-6 rounded-lg shadow-md border border-color-default animate-on-load animation-delay-400">
                                    <i class="fas fa-lightbulb text-primary text-4xl mr-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-2">Commitment to Excellence</h3>
                                        <p class="text-body-color">We are dedicated to maintaining the highest standards of
                                            care and client satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Call to Action -->
                    <section class="bg-section py-12 text-center">
                        <h2 class="text-3xl font-bold text-primary mb-4 animate-on-load">Have Questions About Our Care?</h2>
                        <p class="text-body-color mb-6 max-w-2xl mx-auto">Our team is ready to provide the answers and
                            support you need.</p>
                        <a href="#find-care"
                            class="btn-main px-8 py-3 rounded-full text-lg font-semibold animate-on-load animation-delay-100 nav-link">Contact
                            Us Today</a>
                    </section>
                </div>
            </section>

            <!-- Blog Page Section -->
            <section id="blog" class="page-section hidden">
                <div class="container mx-auto px-4 py-12">
                    <!-- Hero Section for Blog -->
                    <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                        <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Our Blog: Insights on Home Care
                        </h1>
                        <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Stay informed with the latest news,
                            tips, and insights on home care, elderly support, and special needs care.</p>
                    </section>

                    <!-- Blog Posts Grid -->
                    <section class="bg-card py-16">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-on-load">Latest
                                Articles</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <!-- Blog Post 1 -->
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-100">
                                    <img src="https://ik.imagekit.io/AHVA/AdobeStock_231170425.png?tr=w-400,h-300,q-80"
                                        alt="Caregiver offering a glass of water to an elderly person, illustrating respite care benefits" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                    <h3 class="text-xl font-semibold text-primary mb-3">The Benefits of Respite Care for
                                        Caregivers</h3>
                                    <p class="text-body-color text-sm mb-2">January 15, 2025 | By AHVA Team</p>
                                    <p class="text-body-color mb-4">Discover how respite care provides essential breaks for
                                        primary caregivers, preventing burnout and promoting well-being for the entire family.</p>
                                    <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                                </div>
                                <!-- Blog Post 2 -->
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-200">
                                    <img src="https://ik.imagekit.io/AHVA/effective.png?tr=w-400,h-300,q-80"
                                        alt="Child with special needs engaging in a learning activity with a supportive caregiver"
                                        class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                    <h3 class="text-xl font-semibold text-primary mb-3">Effective Strategies for Supporting
                                        Children with Special Needs</h3>
                                    <p class="text-body-color text-sm mb-2">January 10, 2025 | By AHVA Team</p>
                                    <p class="text-body-color mb-4">Learn about personalized approaches and evidence-based resources to
                                        support the growth and development of children with special needs.</p>
                                    <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                                </div>
                                <!-- Blog Post 3 -->
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-300">
                                    <img src="https://ik.imagekit.io/AHVA/shaving.png?tr=w-400,h-300,q-80"
                                        alt="Elderly man being assisted with shaving by a caregiver, promoting safe aging in place" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                    <h3 class="text-xl font-semibold text-primary mb-3">Aging in Place: Tips for a
                                        Comfortable and Safe Home Environment</h3>
                                    <p class="text-body-color text-sm mb-2">January 5, 2025 | By AHVA Team</p>
                                    <p class="text-body-color mb-4">Practical advice for seniors and their families to
                                        ensure a safe and supportive living space for independent aging at home.</p>
                                    <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                                </div>
                                <!-- Blog Post 4 -->
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-400">
                                    <img src="https://ik.imagekit.io/AHVA/Understanding.png?tr=w-400,h-300,q-80"
                                        alt="Caregiver calmly interacting with a child, representing behavioral support" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                    <h3 class="text-xl font-semibold text-primary mb-3">Understanding Behavioral Support: A
                                        Guide for Families</h3>
                                    <p class="text-body-color text-sm mb-2">December 28, 2024 | By AHVA Team</p>
                                    <p class="text-body-color mb-4">Gain insights into effective behavioral support
                                        strategies and how professional staffing can make a meaningful difference.</p>
                                    <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                                </div>
                                <!-- Blog Post 5 -->
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default card-hover-effect animate-on-load animation-delay-500">
                                    <img src="https://ik.imagekit.io/AHVA/Personalized.png?tr=w-400,h-300,q-80"
                                        alt="Caregiver helping an elderly woman with a personalized home care plan" class="rounded-md mb-4 w-full h-40 object-cover aspect-ratio-16-9" loading="lazy">
                                    <h3 class="text-xl font-semibold text-primary mb-3">The Importance of Personalized Home
                                        Care</h3>
                                    <p class="text-body-color text-sm mb-2">December 20, 2024 | By AHVA Team</p>
                                    <p class="text-body-color mb-4">Understanding how personalized care plans make a significant difference in client outcomes, satisfaction, and overall quality of life.</p>
                                    <a href="#" class="text-primary font-semibold hover:underline">Read More &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Call to Action -->
                    <section class="bg-section py-12 text-center">
                        <h2 class="text-3xl font-bold text-primary mb-4 animate-on-load">Looking for More Information?</h2>
                        <p class="text-body-color mb-6 max-w-2xl mx-auto">Browse our full archive of articles or contact us
                            with your specific questions about home care services.</p>
                        <a href="#find-care"
                            class="btn-main px-8 py-3 rounded-full text-lg font-semibold animate-on-load animation-delay-100 nav-link">Contact
                            Us</a>
                    </section>
                </div>
            </section>

            <!-- Find Care Page Section -->
            <section id="find-care" class="page-section hidden">
                <div class="container mx-auto px-4 py-12">
                    <!-- Hero Section for Find Care -->
                    <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                        <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Find Care Today</h1>
                        <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Reach out to discuss your family's
                            care needs or submit an inquiry below. We're here to help you find the right care solution.</p>
                    </section>

                    <!-- Care Support Inquiry Section -->
                    <section class="bg-card py-16 rounded-lg shadow-md mb-8">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl font-bold text-primary mb-6 text-center animate-on-load">Care Support Inquiry</h2>
                            <p class="text-body-color mb-6 max-w-3xl mx-auto text-center animate-on-load animation-delay-50">Please fill out this form if you are seeking care for yourself or a loved one. We'll get back to you promptly.</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                                <!-- Form Column -->
                                <div class="animate-on-load animation-delay-100">
                                    <form id="care-inquiry-form" action="https://formspree.io/f/xzblnyvw" method="POST" class="space-y-6">
                                        <div>
                                            <label for="care-name"
                                                class="block text-primary text-sm font-semibold mb-2">Your Name *</label>
                                            <input type="text" id="care-name" name="name" required class="w-full" placeholder="Enter your full name">
                                        </div>
                                        <div>
                                            <label for="care-email"
                                                class="block text-primary text-sm font-semibold mb-2">Your Email *</label>
                                            <input type="email" id="care-email" name="email" required class="w-full" placeholder="Enter your email address">
                                        </div>
                                        <div>
                                            <label for="care-phone" class="block text-primary text-sm font-semibold mb-2">Phone
                                                Number *</label>
                                            <input type="tel" id="care-phone" name="phone" required class="w-full" placeholder="Enter your phone number">
                                        </div>
                                        <div>
                                            <label for="patient-name"
                                                class="block text-primary text-sm font-semibold mb-2">Patient's Name</label>
                                            <input type="text" id="patient-name" name="patient_name" class="w-full" placeholder="Enter patient's name">
                                        </div>
                                        <div>
                                            <label for="relationship"
                                                class="block text-primary text-sm font-semibold mb-2">Relationship to Patient</label>
                                            <select id="relationship" name="relationship" class="w-full">
                                                <option value="">Select...</option>
                                                <option value="Self">Self</option>
                                                <option value="Spouse">Spouse</option>
                                                <option value="Child">Child</option>
                                                <option value="Other Family Member">Other Family Member</option>
                                                <option value="Friend">Friend</option>
                                                <option value="Legal Guardian">Legal Guardian</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label for="care-type" class="block text-primary text-sm font-semibold mb-2">Type of Care Needed</label>
                                            <select id="care-type" name="care-type" class="w-full">
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
                                            <label for="care-needed"
                                                class="block text-primary text-sm font-semibold mb-2">Additional Details *</label>
                                            <textarea id="care-needed" name="care_needed" required rows="4" class="w-full"
                                                placeholder="Please describe your specific care needs and any special requirements"></textarea>
                                        </div>
                                        <div>
                                            <label for="best-time-contact"
                                                class="block text-primary text-sm font-semibold mb-2">Best Time to Contact You</label>
                                            <input type="text" id="best-time-contact" name="best_time_contact" class="w-full"
                                                placeholder="E.g., Weekdays after 2 PM, anytime, etc.">
                                        </div>
                                        <button type="submit"
                                            class="btn-main px-8 py-3 rounded-md font-semibold w-full shadow-md hover:opacity-90">Submit
                                            Care Inquiry</button>
                                        <div id="care-inquiry-form-message" class="form-message hidden"></div>
                                    </form>
                                </div>
                                <!-- Image Column -->
                                <div class="animate-on-load animation-delay-200">
                                    <img src="https://ik.imagekit.io/AHVA/blanket.png?tr=w-600,h-400,q-80"
                                        alt="Comforting blanket over a person's lap, symbolizing care and warmth"
                                        class="rounded-lg shadow-lg w-full h-auto object-cover aspect-ratio-16-9" loading="lazy">
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- General Contact & Map Section -->
                    <section class="bg-section py-16 rounded-lg shadow-md mt-8">
                        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                            <!-- Contact Info Column -->
                            <div class="animate-on-load animation-delay-300">
                                <h2 class="text-3xl font-bold text-primary mb-6">General Contact Information</h2>
                                <ul class="space-y-4 text-body-color text-lg">
                                    <li class="flex items-start">
                                        <i class="fas fa-map-marker-alt text-primary mr-3 mt-1"></i>
                                        <span>1303 W Valencia Dr., #319, Fullerton, CA 92833</span>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-phone-alt text-primary mr-3"></i>
                                        <a href="tel:213-326-7452"
                                            class="hover:text-primary transition-colors duration-200">(213) 326-7452</a>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-envelope text-primary mr-3"></i>
                                        <a href="mailto:info@athomevastaffing.com"
                                            class="hover:text-primary transition-colors duration-200">info@athomevastaffing.com</a>
                                    </li>
                                    <li class="flex items-center">
                                        <i class="fas fa-clock text-primary mr-3"></i>
                                        <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                                    </li>
                                </ul>
                            </div>
                            <!-- Map Column -->
                            <div class="animate-on-load animation-delay-400">
                                <h3 class="text-2xl font-bold text-primary mb-6">Our Location</h3>
                                <div id="find-care-map" class="map-container shadow-lg"></div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <!-- Careers Page Section -->
            <section id="careers" class="page-section hidden">
                <div class="container mx-auto px-4 py-12">
                    <!-- Hero Section for Careers -->
                    <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                        <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Careers at At Home VA Staffing
                        </h1>
                        <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Join our compassionate team and
                            make a meaningful difference in the lives of others every day.</p>
                    </section>

                    <!-- Why Join Us Section -->
                    <section class="bg-card py-16">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-on-load">Why
                                Join Our Team?</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div
                                    class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-100">
                                    <i class="fas fa-hand-holding-heart text-primary text-4xl mb-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-3">Rewarding Work</h3>
                                        <p class="text-body-color">Make a tangible difference in the lives of clients and their
                                            families every single day.</p>
                                    </div>
                                </div>
                                <div
                                    class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-200">
                                    <i class="fas fa-users text-primary text-4xl mb-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-3">Supportive Environment</h3>
                                        <p class="text-body-color">Work with a team that values collaboration, respect, and
                                            mutual support in all endeavors.</p>
                                    </div>
                                </div>
                                <div
                                    class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-300">
                                    <i class="fas fa-graduation-cap text-primary text-4xl mb-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-3">Professional Growth</h3>
                                        <p class="text-body-color">Access ongoing training and development opportunities to
                                            enhance your caregiving skills.</p>
                                    </div>
                                </div>
                                <div
                                    class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-400">
                                    <i class="fas fa-dollar-sign text-primary text-4xl mb-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-3">Competitive Compensation</h3>
                                        <p class="text-body-color">Receive competitive pay and comprehensive benefits for your dedicated
                                            service.</p>
                                    </div>
                                </div>
                                <div
                                    class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-500">
                                    <i class="fas fa-calendar-alt text-primary text-4xl mb-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-3">Flexible Scheduling</h3>
                                        <p class="text-body-color">Enjoy flexible work schedules that accommodate your lifestyle and
                                            personal needs.</p>
                                    </div>
                                </div>
                                <div
                                    class="bg-section rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-600">
                                    <i class="fas fa-map-marker-alt text-primary text-4xl mb-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-3">Local Impact</h3>
                                        <p class="text-body-color">Serve your local Orange County community and build meaningful,
                                            lasting connections.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Application Process Section -->
                    <section class="bg-section py-16">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">Our
                                Simple Application Process</h2>
                            <div class="flex flex-col md:flex-row items-center gap-8">
                                <div class="md:w-1/2">
                                    <img src="https://ik.imagekit.io/AHVA/Application_406747779.png?tr=w-600,h-400,q-80"
                                        alt="Caregiver filling out an application on a tablet" class="rounded-lg shadow-lg w-full aspect-ratio-16-9 object-cover" loading="lazy">
                                </div>
                                <div class="md:w-1/2">
                                    <p class="text-body-color mb-4">Joining our compassionate caregiving team is simple and straightforward. Follow these steps to start
                                        your rewarding career with At Home VA Staffing:</p>
                                    <ol class="list-decimal list-inside text-body-color mb-6 space-y-2">
                                        <li>Click the "Apply Online" button to access our secure application portal.</li>
                                        <li>Complete the comprehensive application form with your details and experience.</li>
                                        <li>Submit your application and await a response from our dedicated HR team.</li>
                                        <li>Participate in our interview process and background check.</li>
                                        <li>Complete orientation and training to join our team.</li>
                                    </ol>
                                    <a href="https://14608.axiscare.com/?caregivers-applications.php" target="_blank"
                                        rel="noopener noreferrer"
                                        class="btn-accent px-6 py-3 rounded-full font-semibold shadow-md hover:opacity-90">Apply
                                        Now</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- New Caregiver Details Section -->
                    <section id="caregiver-details" class="bg-card py-16 rounded-lg shadow-md mt-12">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">
                                A Day in the Life of an At Home VA Caregiver</h2>
                            <div class="flex flex-col md:flex-row-reverse gap-8 items-center">
                                <div class="md:w-1/2 animate-on-load animation-delay-100">
                                    <img src="https://ik.imagekit.io/AHVA/AdobeStock_390384094.png?tr=w-600,h-400,q-80"
                                        alt="Caregiver assisting with daily tasks"
                                        class="rounded-lg shadow-lg w-full transform transition-transform duration-300 hover:scale-[1.02] aspect-ratio-16-9 object-cover" loading="lazy">
                                </div>
                                <div class="md:w-1/2 animate-on-load animation-delay-200">
                                    <p class="text-body-color mb-4 text-lg">As an At Home VA Staffing caregiver, your day is centered around providing compassionate and personalized support to clients in their homes. You'll help them maintain independence and enhance their quality of life.</p>
                                    <h3 class="text-xl font-semibold text-primary mb-2">Typical Responsibilities May Include:</h3>
                                    <ul class="list-disc list-inside text-body-color mb-4 space-y-1">
                                        <li>Assisting with personal care (bathing, dressing, grooming)</li>
                                        <li>Providing companionship and engaging in activities</li>
                                        <li>Light housekeeping and meal preparation</li>
                                        <li>Medication reminders and appointment escort</li>
                                        <li>Supporting individuals with special needs or behavioral challenges</li>
                                        <li>Offering respite for family caregivers</li>
                                    </ul>
                                    <p class="text-body-color mb-4">Every day brings new opportunities to make a meaningful difference. We provide ongoing training and support to ensure you're equipped for success.</p>
                                    <a href="https://14608.axiscare.com/?caregivers-applications.php" target="_blank"
                                        rel="noopener noreferrer"
                                        class="btn-accent px-6 py-2 rounded-full font-semibold nav-link hover:shadow-lg">Learn More & Apply</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Call to Action -->
                    <section class="bg-section py-12 text-center">
                        <h2 class="text-3xl font-bold text-primary mb-4 animate-on-load">Ready to Make a Difference?</h2>
                        <p class="text-body-color mb-6 max-w-2xl mx-auto">Join our team and start a rewarding career in
                            caregiving that truly matters. Apply today and become part of our compassionate community!</p>
                        <a href="https://14608.axiscare.com/?caregivers-applications.php" target="_blank"
                            rel="noopener noreferrer"
                            class="btn-main px-8 py-3 rounded-full text-lg font-semibold animate-on-load animation-delay-100">Apply
                            Online</a>
                    </section>
                </div>
            </section>

            <!-- Investors Page Section -->
            <section id="investors" class="page-section hidden">
                <div class="container mx-auto px-4 py-12">
                    <!-- Hero Section for Investors -->
                    <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                        <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Investors & Partnership
                            Opportunities</h1>
                        <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Partner with At Home VA Staffing
                            and invest in the future of compassionate in-home care in Orange County, CA.</p>
                    </section>

                    <!-- Our Growth Story Section -->
                    <section class="bg-card py-16">
                        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div class="animate-on-load animation-delay-100">
                                <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-6">Our Growth Story & Vision</h2>
                                <p class="text-body-color mb-4">At Home VA Staffing has established itself as a trusted
                                    provider of in-home care services in Orange County, California. Our commitment to
                                    compassionate, personalized care has fueled consistent growth and a strong reputation
                                    within the community.</p>
                                <p class="text-body-color mb-4">Our vision extends beyond current services; we aim to
                                    innovate and set new standards in the home care industry, leveraging technology and best
                                    practices to deliver superior client outcomes and operational efficiency.</p>
                                <p class="text-body-color">We believe in a future where every individual has access to the
                                    highest quality of care in the comfort of their own home, and we invite partners who
                                    share this vision to join us.</p>
                            </div>
                            <div class="animate-on-load animation-delay-200">
                                <img src="https://ik.imagekit.io/AHVA/laptop.png?tr=w-600,h-400,q-80"
                                    alt="Laptop displaying growth charts, symbolizing business growth and investment opportunities"
                                    class="rounded-lg shadow-lg w-full aspect-ratio-16-9 object-cover" loading="lazy">
                            </div>
                        </div>
                    </section>

                    <!-- Why Invest in Home Care / Our Value Proposition Section -->
                    <section class="bg-section py-16">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-12 animate-on-load">Why
                                Invest in At Home VA Staffing?</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-100">
                                    <i class="fas fa-chart-line text-primary text-4xl mb-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-3">Growing Market Demand</h3>
                                        <p class="text-body-color">Tap into a rapidly expanding market with increasing need for
                                            quality in-home care services.</p>
                                    </div>
                                </div>
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-200">
                                    <i class="fas fa-check-circle text-primary text-4xl mb-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-3">Proven Business Model</h3>
                                        <p class="text-body-color">Benefit from a successful operational framework and a strong
                                            client acquisition strategy.</p>
                                    </div>
                                </div>
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-300">
                                    <i class="fas fa-star text-primary text-4xl mb-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-3">Strong Reputation</h3>
                                        <p class="text-body-color">Leverage our established trust and positive reputation within
                                            the Orange County community.</p>
                                    </div>
                                </div>
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-400">
                                    <i class="fas fa-handshake text-primary text-4xl mb-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-3">Dedicated Leadership</h3>
                                        <p class="text-body-color">Guided by experienced leadership committed to sustainable
                                            growth and ethical practices.</p>
                                    </div>
                                </div>
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-500">
                                    <i class="fas fa-users-medical text-primary text-4xl mb-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-3">Social Impact</h3>
                                        <p class="text-body-color">Invest in a business that not only generates returns but also
                                            makes a positive social impact.</p>
                                    </div>
                                </div>
                                <div
                                    class="bg-card rounded-lg p-6 shadow-md border border-color-default animate-on-load animation-delay-600">
                                    <i class="fas fa-expand-alt text-primary text-4xl mb-4"></i>
                                    <div>
                                        <h3 class="text-xl font-semibold text-primary mb-3">Scalable Operations</h3>
                                        <p class="text-body-color">Our model is designed for scalability, allowing for efficient
                                            expansion into new markets.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Investor Contact Form / Inquiry Section -->
                    <section class="bg-card py-16">
                        <div class="container mx-auto px-4">
                            <h2 class="text-3xl md:text-4xl font-bold text-center text-primary mb-8 animate-on-load">
                                Investor Inquiries</h2>
                            <p class="text-lg text-body-color text-center max-w-3xl mx-auto mb-8">For detailed financial
                                information, partnership proposals, or to schedule a discussion with our leadership team,
                                please contact us using the form below.</p>
                            <form id="investor-form" action="https://formspree.io/f/xzblnyvw" method="POST"
                                class="max-w-2xl mx-auto space-y-6 animate-on-load animation-delay-100">
                                <div>
                                    <label for="investor-name" class="block text-primary text-sm font-semibold mb-2">Your
                                        Name *</label>
                                    <input type="text" id="investor-name" name="name" required class="w-full" placeholder="Enter your full name">
                                </div>
                                <div>
                                    <label for="investor-email" class="block text-primary text-sm font-semibold mb-2">Your
                                        Email *</label>
                                    <input type="email" id="investor-email" name="email" required class="w-full" placeholder="Enter your email address">
                                </div>
                                <div>
                                    <label for="investor-company"
                                        class="block text-primary text-sm font-semibold mb-2">Company/Organization</label>
                                    <input type="text" id="investor-company" name="company" class="w-full" placeholder="Enter your company name">
                                </div>
                                <div>
                                    <label for="investor-interest"
                                        class="block text-primary text-sm font-semibold mb-2">Area of Interest *</label>
                                    <textarea id="investor-interest" name="interest" rows="5" required
                                        class="w-full" placeholder="Please describe your investment interests and goals"></textarea>
                                </div>
                                <button type="submit"
                                    class="btn-main px-8 py-3 rounded-md font-semibold w-full shadow-md hover:opacity-90">Submit
                                    Inquiry</button>
                                <div id="investor-form-message" class="form-message hidden"></div>
                            </form>
                        </div>
                    </section>
                </div>
            </section>

            <!-- Privacy Policy Page Section -->
            <section id="privacy-policy" class="page-section hidden">
                <div class="container mx-auto px-4 py-12">
                    <!-- Hero Section for Privacy Policy -->
                    <section class="relative bg-section p-8 rounded-lg shadow-md text-center mb-16 animate-on-load">
                        <h1 class="text-4xl md:text-5xl font-extrabold text-primary mb-4">Privacy Policy</h1>
                        <p class="text-xl md:text-2xl text-body-color max-w-3xl mx-auto">Understanding how we protect your
                            personal information and maintain your privacy.</p>
                    </section>

                    <!-- Privacy Policy Content -->
                    <section class="bg-card py-16">
                        <div class="container mx-auto px-4">
                            <div
                                class="bg-card rounded-lg p-6 border border-color-default animate-on-load animation-delay-100">
                                <p class="text-body-color mb-4"><strong>Last updated:</strong> January 17, 2025</p>
                                <p class="text-body-color mb-4">At Home VA Staffing ("we", "us", or "our") is committed to
                                    protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
                                    safeguard your information when you visit our website or use our services.</p>

                                <h3 class="text-xl font-semibold text-primary mb-3">1. Information We Collect</h3>
                                <p class="text-body-color mb-4">We may collect personal information such as your name, email
                                    address, phone number, and address when you contact us, request services, or apply for a
                                    job. We also collect non-personal information like browser type and IP address through
                                    cookies and analytics tools.</p>

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
                                <p class="text-body-color mb-4">We do not sell your personal information. We may share your
                                    information with:</p>
                                <ul class="text-body-color list-disc list-inside mb-4">
                                    <li>Service providers who assist with our operations (e.g., payment processors,
                                        analytics providers)</li>
                                    <li>Law enforcement or regulatory authorities when required by law</li>
                                    <li>Healthcare professionals involved in your care (with your consent)</li>
                                </ul>

                                <h3 class="text-xl font-semibold text-primary mb-3">4. Cookies and Tracking</h3>
                                <p class="text-body-color mb-4">Our website uses cookies to enhance functionality and
                                    analyze traffic. You can manage cookie preferences through your browser settings. Essential cookies are necessary for basic website functionality.</p>

                                <h3 class="text-xl font-semibold text-primary mb-3">5. Data Security</h3>
                                <p class="text-body-color mb-4">We implement reasonable security measures to protect your
                                    information, including encryption and secure data storage. However, no method of transmission over the Internet is completely secure.
                                </p>

                                <h3 class="text-xl font-semibold text-primary mb-3">6. Your Rights</h3>
                                <p class="text-body-color mb-4">You may request access, correction, or deletion of your
                                    personal information by contacting us at <a href="mailto:info@athomevastaffing.com"
                                        class="text-primary hover:underline">info@athomevastaffing.com</a>.</p>

                                <h3 class="text-xl font-semibold text-primary mb-3">7. Third-Party Links</h3>
                                <p class="text-body-color mb-4">Our website may contain links to third-party sites. We are
                                    not responsible for their privacy practices and encourage you to review their policies.</p>

                                <h3 class="text-xl font-semibold text-primary mb-3">8. Changes to This Policy</h3>
                                <p class="text-body-color mb-4">We may update this Privacy Policy periodically. Changes will
                                    be posted on this page with an updated effective date.</p>

                                <h3 class="text-xl font-semibold text-primary mb-3">9. Contact Us</h3>
                                <p class="text-body-color">For questions about this Privacy Policy, please contact us:</p>
                                <ul class="text-body-color list-disc list-inside mb-4">
                                    <li>Email: <a href="mailto:info@athomevastaffing.com"
                                            class="text-primary hover:underline">info@athomevastaffing.com</a></li>
                                    <li>Phone: <a href="tel:213-326-7452" class="text-primary hover:underline">(213)
                                            326-7452</a></li>
                                    <li>Address: 1303 W Valencia Dr., #319, Fullerton, CA 92833</li>
                                </ul>
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
                    <p class="text-footer-link mb-4">Compassionate and professional in-home care services in Orange County,
                        CA. Enhancing lives through personalized care solutions.</p>
                    <div class="flex space-x-4 mb-4">
                        <a href="https://www.facebook.com/athomevastaffing" target="_blank" rel="noopener noreferrer"
                            aria-label="Visit us on Facebook"
                            class="text-footer-link hover:text-primary transition-colors duration-200">
                            <i class="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/athomevastaffing" target="_blank"
                            rel="noopener noreferrer" aria-label="Visit us on LinkedIn"
                            class="text-footer-link hover:text-primary transition-colors duration-200">
                            <i class="fab fa-linkedin-in text-xl"></i>
                        </a>
                    </div>
                    <div class="flex flex-col space-y-3">
                        <!-- Mailchimp Sign Up Button Placeholder - Replace '#' with your actual Mailchimp signup form URL -->
                        <a href="#" class="btn-main px-8 py-3 rounded-md font-semibold text-center text-base">Sign Up for
                            Newsletter</a>
                        <!-- Mailchimp Apply Now Button Placeholder -->
                        <a href="https://14608.axiscare.com/?caregivers-applications.php" target="_blank"
                            rel="noopener noreferrer"
                            class="btn-accent px-8 py-3 rounded-md font-semibold text-center text-base">Apply Now</a>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-4 text-primary">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#home"
                                class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Home</a>
                        </li>
                        <li><a href="#services"
                                class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Services</a>
                        </li>
                        <li><a href="#about"
                                class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">About
                                Us</a></li>
                        <li><a href="#blog"
                                class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Blog</a>
                        </li>
                        <li><a href="#find-care"
                                class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Find
                                Care</a></li>
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
                            <a href="tel:213-326-7452"
                                class="hover:text-primary transition-colors duration-200">(213) 326-7452</a>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-envelope mr-2"></i>
                            <a href="mailto:info@athomevastaffing.com"
                                class="hover:text-primary transition-colors duration-200">info@athomevastaffing.com</a>
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
                    <li><a href="#privacy-policy"
                            class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Privacy
                            Policy</a></li>
                    <li><a href="#terms-of-service"
                            class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Terms of
                            Service</a></li>
                    <li><a href="#accessibility-statement"
                            class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Accessibility
                            Statement</a></li>
                    <!-- Relocated links -->
                    <li><a href="#careers"
                            class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Careers</a>
                    </li>
                    <li><a href="#investors"
                            class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Investors</a>
                    </li>
                    <li><a href="#find-care"
                            class="text-footer-link hover:text-primary transition-colors duration-200 nav-link">Contact
                            Us</a></li>
                </ul>
            </div>
        </footer>

        <!-- Get Started Modal -->
        <div id="get-started-modal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden z-[100]">
            <div class="bg-card p-8 rounded-lg shadow-xl max-w-sm w-full m-4 relative">
                <button id="close-get-started-modal"
                    class="absolute top-4 right-4 text-primary hover:text-gray-700 transition-colors duration-200"
                    aria-label="Close Get Started modal">
                    <i class="fas fa-times text-xl"></i>
                </button>
                <h3 class="text-2xl font-bold mb-6 text-primary text-center">What are you looking for?</h3>
                <div class="flex flex-col space-y-4">
                    <a href="https://14608.axiscare.com/?caregivers-applications.php" target="_blank"
                        rel="noopener noreferrer"
                        class="btn-main py-4 px-6 rounded-md font-semibold text-center flex items-center justify-center hover:opacity-90">
                        <i class="fas fa-briefcase mr-3"></i> A Caregiving Job
                    </a>
                    <a href="#find-care"
                        class="btn-main py-4 px-6 rounded-md font-semibold text-center flex items-center justify-center hover:opacity-90 nav-link">
                        <i class="fas fa-hand-holding-heart mr-3"></i> Care for a Loved One
                    </a>
                </div>
            </div>
        </div>

        <!-- Cookie Consent Modal -->
        <div id="cookie-consent-modal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden z-[100]">
            <div class="bg-card p-8 rounded-lg shadow-xl max-w-sm w-full m-4 relative">
                <button id="close-cookie-consent-modal"
                    class="absolute top-4 right-4 text-primary hover:text-gray-700 transition-colors duration-200"
                    aria-label="Close cookie consent modal">
                    <i class="fas fa-times text-xl"></i>
                </button>
                <h3 class="text-2xl font-bold mb-6 text-primary text-center">Cookie Preferences</h3>
                <p class="text-body-color text-sm mb-4">We use cookies to ensure you get the best experience on our website.
                    By clicking "Accept All Cookies", you agree to the storing of cookies on your device.</p>

                <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full">
                    <button id="customize-cookies-modal"
                        class="btn-main px-4 py-2 rounded-md font-semibold text-sm">Customize</button>
                    <button id="accept-cookies" class="btn-main px-4 py-2 rounded-md font-semibold text-sm">Accept All
                        Cookies</button>
                </div>
                <!-- Cookie Settings Panel (initially hidden) -->
                <div id="cookie-settings" class="mt-6 hidden">
                    <div class="flex justify-between items-center mb-4">
                        <h4 class="text-xl font-semibold text-primary">Detailed Cookie Settings</h4>
                        <button id="close-cookie-settings" class="text-primary hover:opacity-70 text-2xl"
                            aria-label="Close cookie preferences"><i class="fas fa-times"></i></button>
                    </div>
                    <p class="text-body-color text-sm mb-4">When you visit websites, they may store or retrieve data about
                        you using cookies and similar technologies. You have the option of disabling certain types of cookies, though
                        doing so may impact your experience on the website.</p>

                    <div class="mb-4">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-lg font-semibold text-primary">Essential</span>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" checked disabled>
                                <div
                                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary">
                                </div>
                            </label>
                        </div>
                        <p class="text-body-color text-sm">Required to enable basic website functionality. You may not
                            disable essential cookies.</p>
                    </div>

                    <div class="mb-4 opacity-50 cursor-not-allowed">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-lg font-semibold text-primary">Targeted Advertising</span>
                            <label class="relative inline-flex items-center cursor-not-allowed">
                                <input type="checkbox" value="" class="sr-only peer" disabled>
                                <div
                                    class="w-11 h-6 bg-gray-200 rounded-full"></div>
                            </label>
                        </div>
                        <p class="text-body-color text-sm">At Home VA Staffing does NOT use targeted advertising cookies.</p>
                    </div>

                    <div class="mb-4 opacity-50 cursor-not-allowed">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-lg font-semibold text-primary">Personalization</span>
                            <label class="relative inline-flex items-center cursor-not-allowed">
                                <input type="checkbox" value="" class="sr-only peer" disabled>
                                <div
                                    class="w-11 h-6 bg-gray-200 rounded-full"></div>
                            </label>
                        </div>
                        <p class="text-body-color text-sm">At Home VA Staffing does NOT use personalization cookies.</p>
                    </div>

                    <div class="text-right mt-6">
                        <button id="save-cookie-settings"
                            class="btn-main py-2 px-6 rounded-md font-semibold">Save Preferences</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Image Modal for Tap to Enlarge -->
        <div id="imageModal">
            <span id="closeBtn">&times;</span>
            <div id="loader">Loading...</div>
            <img id="modalImg" alt="Enlarged view">
            <div id="zoomControls">
                <button id="zoomIn">Zoom In</button>
                <button id="zoomOut">Zoom Out</button>
                <button id="resetView">Reset</button>
            </div>
        </div>
    </div>

    <!-- Google Maps API Script -->
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyChC2wdwafkY0ZvnTQdX9ttIAHvDaWSVPQ&callback=initMap">
    </script>

    <script>
        // Global flag to indicate if Google Maps API is loaded
        let googleMapsLoaded = false;

        // Google Maps instances
        let homeMapInstance = null;
        let findCareMapInstance = null;

        // This function is called by the Google Maps API script once it's loaded
        function initMap() {
            googleMapsLoaded = true;
            console.log('Google Maps API loaded.');
            // Re-initialize the current page's map if it's a map page
            const currentPageId = window.location.hash ? window.location.hash.substring(1) : 'home';
            if (currentPageId === 'home' || currentPageId === 'find-care') {
                showPage(currentPageId); // This will now correctly initialize the map
            }
        }

        function initGoogleMap(mapId, centerCoords, zoom, locations) {
            // Check if Google Maps API is loaded before proceeding
            if (!googleMapsLoaded || typeof google === 'undefined' || typeof google.maps === 'undefined') {
                console.warn('Google Maps API not yet loaded. Deferring map initialization for:', mapId);
                // If the API isn't loaded yet, the initMap callback will handle it.
                // We can also set a timeout to retry if needed, but the callback is more reliable.
                return;
            }

            // Clear existing map instance reference if it exists to allow garbage collection
            // A Google Maps Map object does not have a .setMap(null) method.
            // Simply setting the reference to null is sufficient.
            if (mapId === 'find-care-map') {
                findCareMapInstance = null;
            } else if (mapId === 'home-map') {
                homeMapInstance = null;
            }

            const mapElement = document.getElementById(mapId);
            if (!mapElement) {
                console.error(\`Map container with ID '\${mapId}' not found.\`);
                return;
            }

            const mapOptions = {
                center: centerCoords,
                zoom: zoom,
                mapTypeId: google.maps.MapTypeId.ROADMAP // Default map type
            };

            let currentMapInstance;
            if (mapId === 'find-care-map') {
                currentMapInstance = new google.maps.Map(mapElement, mapOptions);
                findCareMapInstance = currentMapInstance;
            } else if (mapId === 'home-map') {
                currentMapInstance = new google.maps.Map(mapElement, mapOptions);
                homeMapInstance = currentMapInstance;
            }

            // Add markers for each location
            if (locations && currentMapInstance) {
                locations.forEach(loc => {
                    const marker = new google.maps.Marker({
                        position: loc.coords,
                        map: currentMapInstance,
                        title: loc.name,
                    });

                    const infoWindow = new google.maps.InfoWindow({
                        content: \`<b>\${loc.name}</b><br>We provide services here.\`,
                    });

                    marker.addListener('click', () => {
                        infoWindow.open(currentMapInstance, marker);
                    });
                });
            }

            // Trigger a resize event to ensure the map renders correctly if its container was hidden
            // Only trigger if currentMapInstance is valid
            if (currentMapInstance) {
                google.maps.event.trigger(currentMapInstance, 'resize');
            }
        }

        // Orange County cities with their coordinates for markers
        const orangeCountyLocations = [
            { name: 'Anaheim', coords: { lat: 33.8366, lng: -117.9143 } },
            { name: 'Brea', coords: { lat: 33.9167, lng: -117.9000 } },
            { name: 'Buena Park', coords: { lat: 33.8675, lng: -117.9981 } },
            { name: 'Costa Mesa', coords: { lat: 33.6411, lng: -117.9187 } },
            { name: 'Cypress', coords: { lat: 33.8169, lng: -118.0367 } },
            { name: 'Dana Point', coords: { lat: 33.4670, lng: -117.6981 } },
            { name: 'Fountain Valley', coords: { lat: 33.7092, lng: -117.9542 } },
            { name: 'Fullerton', coords: { lat: 33.8704, lng: -117.9243 } },
            { name: 'Garden Grove', coords: { lat: 33.7743, lng: -117.9378 } },
            { name: 'Huntington Beach', coords: { lat: 33.6601, lng: -117.9992 } },
            { name: 'Irvine', coords: { lat: 33.6846, lng: -117.8265 } },
            { name: 'La Habra', coords: { lat: 33.9319, lng: -117.9459 } },
            { name: 'La Mirada', coords: { lat: 33.9022, lng: -118.0128 } },
            { name: 'Laguna Hills', coords: { lat: 33.5997, lng: -117.7128 } },
            { name: 'Laguna Niguel', coords: { lat: 33.5225, lng: -117.7020 } },
            { name: 'Laguna Beach', coords: { lat: 33.5425, lng: -117.7831 } },
            { name: 'Laguna Woods', coords: { lat: 33.6092, lng: -117.7289 } },
            { name: 'Lake Forest', coords: { lat: 33.6464, lng: -117.6890 } },
            { name: 'Los Alamitos', coords: { lat: 33.8028, lng: -118.0681 } },
            { name: 'Mission Viejo', coords: { lat: 33.5936, lng: -117.6520 } },
            { name: 'Newport Beach', coords: { lat: 33.6189, lng: -117.9298 } },
            { name: 'Orange', coords: { lat: 33.7879, lng: -117.8531 } },
            { name: 'Placentia', coords: { lat: 33.8722, lng: -117.8689 } },
            { name: 'Rancho Santa Margarita', coords: { lat: 33.6406, lng: -117.5992 } },
            { name: 'San Clemente', coords: { lat: 33.4270, lng: -117.6125 } },
            { name: 'San Juan Capistrano', coords: { lat: 33.5017, lng: -117.6625 } },
            { name: 'Santa Ana', coords: { lat: 33.7455, lng: -117.8677 } },
            { name: 'Seal Beach', coords: { lat: 33.7414, lng: -118.1048 } },
            { name: 'Stanton', coords: { lat: 33.8031, lng: -117.9931 } },
            { name: 'Tustin', coords: { lat: 33.7458, lng: -117.8262 } },
            { name: 'Villa Park', coords: { lat: 33.8164, lng: -117.8139 } },
            { name: 'Westminster', coords: { lat: 33.7592, lng: -118.0041 } }
        ];


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
        const contentArea = document.getElementById('content-area');
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

                // Update document title and meta description for SEO
                const dataTitle = targetPage.getAttribute('data-title');
                const dataDescription = targetPage.getAttribute('data-description');
                if (dataTitle) {
                    document.title = dataTitle;
                }
                if (dataDescription) {
                    document.querySelector('meta[name="description"]').setAttribute('content', dataDescription);
                    document.querySelector('meta[property="og:description"]').setAttribute('content', dataDescription);
                }

                // Initialize Google Maps based on the current page, only if API is loaded
                if (googleMapsLoaded) {
                    if (pageId === 'find-care') {
                        // Coordinates for Fullerton, CA (1303 W Valencia Dr., #319, Fullerton, CA 92833)
                        const fullertonCoords = { lat: 33.8704, lng: -117.9243 };
                        initGoogleMap('find-care-map', fullertonCoords, 10, orangeCountyLocations); // Zoom level 10 to show Orange County
                        // Ensure home map is cleared if navigating to find-care
                        if (homeMapInstance) {
                            homeMapInstance = null; // Correct way to clear reference
                        }
                    } else if (pageId === 'home') {
                        // Coordinates for Orange County (approximate center)
                        const orangeCountyCenter = { lat: 33.7000, lng: -117.8000 };
                        initGoogleMap('home-map', orangeCountyCenter, 9, orangeCountyLocations); // Zoom level 9 for broader Orange County view
                        // Ensure find-care map is cleared if navigating to home
                        if (findCareMapInstance) {
                            findCareMapInstance = null; // Correct way to clear reference
                        }
                    } else {
                        // If navigating to other pages, ensure both map instances are cleared
                        if (findCareMapInstance) {
                            findCareMapInstance = null; // Correct way to clear reference
                        }
                        if (homeMapInstance) {
                            homeMapInstance = null; // Correct way to clear reference
                        }
                    }
                } else {
                    console.warn('Google Maps API not yet loaded. Maps will initialize once API is ready.');
                }

                // Scroll to top of the new page content
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1); // Remove '#'
                showPage(targetId);

                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    if (mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Handle initial page load based on hash or default to home
        window.addEventListener('hashchange', () => {
            const pageId = window.location.hash ? window.location.hash.substring(1) : 'home';
            showPage(pageId);
        });

        // Trigger initial page load
        document.addEventListener('DOMContentLoaded', () => {
            const initialPageId = window.location.hash ? window.location.hash.substring(1) : 'home';
            showPage(initialPageId);
        });

        // "Get Started" button functionality (opens modal)
        const getStartedBtn = document.getElementById('get-started-btn');
        const mobileHeaderGetStartedBtn = document.getElementById('mobile-header-get-started-btn'); // New one in header
        const getStartedModal = document.getElementById('get-started-modal');
        const closeGetStartedModalButton = document.getElementById('close-get-started-modal');

        function openGetStartedModal() {
            if (getStartedModal) {
                getStartedModal.classList.remove('hidden');
            }
        }

        function closeGetStartedModal() {
            if (getStartedModal) {
                getStartedModal.classList.add('hidden');
            }
        }

        if (getStartedBtn) {
            getStartedBtn.addEventListener('click', openGetStartedModal);
        }

        // Listener for the new mobile header "Get Started" button
        if (mobileHeaderGetStartedBtn) {
            mobileHeaderGetStartedBtn.addEventListener('click', () => {
                openGetStartedModal();
                // Close mobile menu after opening modal
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    if (mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'false');
                }
            });
        }

        if (closeGetStartedModalButton) {
            closeGetStartedModalButton.addEventListener('click', closeGetStartedModal);
        }

        if (getStartedModal) {
            getStartedModal.addEventListener('click', (e) => {
                if (e.target === getStartedModal) {
                    closeGetStartedModal();
                }
            });
        }


        // Cookie Consent and Settings Modals
        const cookieConsentModal = document.getElementById('cookie-consent-modal');
        const customizeCookiesModal = document.getElementById('customize-cookies-modal');
        const acceptCookies = document.getElementById('accept-cookies');
        const cookieSettings = document.getElementById('cookie-settings');
        const closeCookieSettings = document.getElementById('close-cookie-settings');
        const saveCookieSettings = document.getElementById('save-cookie-settings');
        const closeCookieConsentModal = document.getElementById('close-cookie-consent-modal');


        // Show cookie consent on first visit
        if (!localStorage.getItem('cookieConsent')) {
            if (cookieConsentModal) {
                cookieConsentModal.classList.remove('hidden');
            }
        }

        if (acceptCookies) {
            acceptCookies.addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'accepted');
                if (cookieConsentModal) {
                    cookieConsentModal.classList.add('hidden');
                }
            });
        }

        if (customizeCookiesModal) {
            customizeCookiesModal.addEventListener('click', () => {
                if (cookieSettings) {
                    cookieSettings.classList.toggle('hidden'); // Toggle visibility
                }
            });
        }

        if (closeCookieSettings) {
            closeCookieSettings.addEventListener('click', () => {
                if (cookieSettings) {
                    cookieSettings.classList.add('hidden');
                }
            });
        }

        if (saveCookieSettings) {
            saveCookieSettings.addEventListener('click', () => {
                // In a real application, you'd save specific cookie preferences here
                localStorage.setItem('cookieConsent', 'customized'); // Mark as customized
                if (cookieConsentModal) {
                    cookieConsentModal.classList.add('hidden');
                }
                if (cookieSettings) {
                    cookieSettings.classList.add('hidden');
                }
            });
        }

        if (closeCookieConsentModal) {
            closeCookieConsentModal.addEventListener('click', () => {
                if (cookieConsentModal) {
                    cookieConsentModal.classList.add('hidden');
                }
            });
        }

        // Custom Dark Mode Toggle
        const desktopDarkModeToggle = document.getElementById('dark-mode-toggle'); // Renamed for clarity
        const mobileDarkModeToggle = document.getElementById('dark-mode-toggle-mobile'); // Changed ID to avoid conflict
        const htmlElement = document.documentElement; // The <html> tag

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
            
            // Check if desktop toggle exists before querying its child
            if (desktopDarkModeToggle) {
                const desktopIcon = desktopDarkModeToggle.querySelector('i');
                if (desktopIcon) {
                    desktopIcon.classList.toggle('fa-sun', isDark);
                    desktopIcon.classList.toggle('fa-moon', !isDark);
                }
            }
            
            // Check if mobile toggle exists before querying its child
            if (mobileDarkModeToggle) {
                const mobileIcon = mobileDarkModeToggle.querySelector('i');
                if (mobileIcon) {
                    mobileIcon.classList.toggle('fa-sun', isDark);
                    mobileIcon.classList.toggle('fa-moon', !isDark);
                }
            }
        }

        // Initialize Dark Mode on page load
        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setTheme(savedTheme);
            } else {
                // Default to light mode if no preference is saved
                setTheme('light');
            }
        });

        // Event listeners for toggles
        if (desktopDarkModeToggle) {
            desktopDarkModeToggle.addEventListener('click', () => {
                const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
                setTheme(currentTheme === 'dark' ? 'light' : 'dark');
            });
        }

        if (mobileDarkModeToggle) {
            mobileDarkModeToggle.addEventListener('click', () => {
                const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
                setTheme(currentTheme === 'dark' ? 'light' : 'dark');
                // Close mobile menu after toggling dark mode
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    if (mobileMenuButton) mobileMenuButton.setAttribute('aria-expanded', 'false');
                }
            });
        }

        // Services Carousel Functionality
        const servicesCarousel = document.getElementById('servicesCarousel');
        const carouselPrevBtn = document.getElementById('carousel-prev');
        const carouselNextBtn = document.getElementById('carousel-next');
        const carouselDotsContainer = document.getElementById('carousel-dots');
        let currentIndex = 0; // Represents the index of the first visible card
        let itemsPerPage = 3; // Default for desktop

        function updateItemsPerPage() {
            if (window.innerWidth <= 768) { // Mobile
                itemsPerPage = 1;
            } else if (window.innerWidth <= 1024) { // Tablet
                itemsPerPage = 2;
            } else { // Desktop
                itemsPerPage = 3;
            }
        }

        // Moved updateDots before updateCarousel
        function updateDots() {
            if (!carouselDotsContainer) return;
            const dots = carouselDotsContainer.children;
            const activeDotIndex = Math.floor(currentIndex / itemsPerPage);

            for (let i = 0; i < dots.length; i++) {
                if (i === activeDotIndex) {
                    dots[i].classList.add('active');
                } else {
                    dots[i].classList.remove('active');
                }
            }
        }

        function updateCarousel() {
            if (!servicesCarousel) return;

            updateItemsPerPage(); // Recalculate items per page on update

            const totalItems = servicesCarousel.children.length;
            // Calculate item width including margins
            const firstItem = servicesCarousel.children[0];
            const itemStyle = getComputedStyle(firstItem);
            const itemWidth = firstItem.offsetWidth + parseFloat(itemStyle.marginLeft) + parseFloat(itemStyle.marginRight);

            // Ensure currentIndex doesn't go out of bounds
            // The maximum index we can scroll to is when the last item of the last full page is visible.
            // If totalItems = 5 and itemsPerPage = 3, maxScrollIndex = 5 - 3 = 2.
            // So if currentIndex is 0, we see items 0,1,2. If currentIndex is 1, we see 1,2,3. If currentIndex is 2, we see 2,3,4.
            const maxScrollIndex = totalItems - itemsPerPage;
            currentIndex = Math.max(0, Math.min(currentIndex, maxScrollIndex));

            const offset = -currentIndex * itemWidth;
            servicesCarousel.style.transform = \`translateX(\${offset}px)\`;

            updateDots();
        }

        function createDots() {
            if (!servicesCarousel || !carouselDotsContainer) return;

            carouselDotsContainer.innerHTML = ''; // Clear existing dots
            const totalItems = servicesCarousel.children.length;
            const numDots = Math.ceil(totalItems / itemsPerPage); // Number of "pages"

            for (let i = 0; i < numDots; i++) {
                const dot = document.createElement('div');
                dot.classList.add('carousel-nav-dot');
                if (i === Math.floor(currentIndex / itemsPerPage)) {
                    dot.classList.add('active');
                }
                dot.addEventListener('click', () => {
                    currentIndex = i * itemsPerPage;
                    updateCarousel();
                });
                carouselDotsContainer.appendChild(dot);
            }
        }

        if (carouselPrevBtn) {
            carouselPrevBtn.addEventListener('click', () => {
                currentIndex = Math.max(0, currentIndex - itemsPerPage);
                updateCarousel();
            });
        }

        if (carouselNextBtn) {
            carouselNextBtn.addEventListener('click', () => {
                const totalItems = servicesCarousel.children.length;
                const maxScrollIndex = totalItems - itemsPerPage;
                currentIndex = Math.min(maxScrollIndex, currentIndex + itemsPerPage);
                updateCarousel();
            });
        }

        // Initial setup and resize listener for carousel
        window.addEventListener('resize', () => {
            updateItemsPerPage(); // Recalculate on resize
            updateCarousel(); // Update carousel position and dots
            // Trigger Google Maps resize event if map instances exist
            if (findCareMapInstance) {
                google.maps.event.trigger(findCareMapInstance, 'resize');
            }
            if (homeMapInstance) {
                google.maps.event.trigger(homeMapInstance, 'resize');
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            // Ensure createDots is called before updateCarousel on initial load
            createDots(); // Create dots on initial load
            updateCarousel(); // Initial carousel setup on load
        });

        // Form submission handling for inquiry and investor forms
        function handleFormSubmission(formId, messageId) {
            const form = document.getElementById(formId);
            const messageDiv = document.getElementById(messageId);

            if (form && messageDiv) {
                form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    messageDiv.classList.remove('success', 'error', 'hidden');
                    messageDiv.innerHTML = '<div class="spinner mx-auto"></div> Submitting...';

                    try {
                        const formData = new FormData(form);
                        const response = await fetch(form.action, {
                            method: form.method,
                            body: formData,
                            headers: {
                                'Accept': 'application/json'
                            }
                        });

                        if (response.ok) {
                            messageDiv.classList.add('success');
                            messageDiv.textContent = 'Your message has been sent successfully!';
                            form.reset(); // Clear the form
                        } else {
                            const errorData = await response.json();
                            const errorMessage = errorData.errors ? errorData.errors.map(err => err.message).join(', ') : 'An unexpected error occurred.';
                            messageDiv.classList.add('error');
                            messageDiv.textContent = \`Submission failed: \${errorMessage}\`;
                        }
                    } catch (error) {
                        console.error('Form submission error:', error);
                        messageDiv.classList.add('error');
                        messageDiv.textContent = 'There was a problem with your submission. Please try again later.';
                    } finally {
                        messageDiv.classList.remove('hidden');
                    }
                });
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            // Updated to handle the new care inquiry form
            handleFormSubmission('care-inquiry-form', 'care-inquiry-form-message');
            handleFormSubmission('investor-form', 'investor-form-message');
        });

        /* Tap to Enlarge Image Modal Script */
        // Moved all element selections inside DOMContentLoaded for safety
        let modal, modalImg, closeBtn, loader, zoomInBtn, zoomOutBtn, resetViewBtn;

        let scale = 1;
        let startDist = 0;
        let startX = 0;
        let startY = 0;
        let offsetX = 0;
        let offsetY = 0;
        let isDragging = false;
        let initialTouchY = null;
        let lastTapTime = 0;

        const updateTransform = () => {
            if (modalImg) { // Add null check
                modalImg.style.transform = \`translate(\${offsetX}px, \${offsetY}px) scale(\${scale})\`;
            }
        };

        const resetTransform = () => {
            scale = 1;
            offsetX = 0;
            offsetY = 0;
            updateTransform();
        };

        const closeModal = () => {
            if (modal) { // Add null check
                modal.classList.remove("active"); // Use class for display
            }
            if (modalImg) { // Add null check
                modalImg.src = "";
            }
            resetTransform(); // Reset transform when closing
        };

        document.addEventListener('DOMContentLoaded', () => {
            // Select elements after DOM is loaded
            modal = document.getElementById("imageModal");
            modalImg = document.getElementById("modalImg");
            closeBtn = document.getElementById("closeBtn");
            loader = document.getElementById("loader");
            zoomInBtn = document.getElementById("zoomIn");
            zoomOutBtn = document.getElementById("zoomOut");
            resetViewBtn = document.getElementById("resetView");

            // Attach listeners only if elements exist
            if (closeBtn) closeBtn.addEventListener("click", closeModal);
            if (modal) {
                modal.addEventListener("click", (e) => {
                    if (e.target === modal) {
                        closeModal();
                    }
                });
                modal.addEventListener("wheel", (e) => {
                    e.preventDefault();
                    scale += e.deltaY * -0.001;
                    scale = Math.min(Math.max(.5, scale), 4);
                    updateTransform();
                });
                modal.addEventListener("touchstart", (e) => {
                    const now = new Date().getTime();
                    if (e.touches.length === 1 && now - lastTapTime < 300) {
                        scale = scale > 1 ? 1 : 2;
                        offsetX = 0;
                        offsetY = 0;
                        updateTransform();
                    }
                    lastTapTime = now;

                    if (e.touches.length === 1) {
                        isDragging = true;
                        startX = e.touches[0].clientX - offsetX;
                        startY = e.touches[0].clientY - offsetY;
                        initialTouchY = e.touches[0].clientY;
                    } else if (e.touches.length === 2) {
                        isDragging = false;
                        const dx = e.touches[0].clientX - e.touches[1].clientX;
                        const dy = e.touches[0].clientY - e.touches[1].clientY;
                        const dist = Math.sqrt(dx*dx + dy*dy);
                        const pinchScale = dist / startDist;
                        scale = Math.min(Math.max(.5, pinchScale), 4);
                        updateTransform();
                    }
                }, { passive: false });

                modal.addEventListener("touchmove", (e) => {
                    if (e.touches.length === 1 && isDragging) {
                        e.preventDefault();
                        offsetX = e.touches[0].clientX - startX;
                        offsetY = e.touches[0].clientY - startY;
                        updateTransform();
                    } else if (e.touches.length === 2) {
                        e.preventDefault();
                        const dx = e.touches[0].clientX - e.touches[1].clientX;
                        const dy = e.touches[0].clientY - e.touches[1].clientY;
                        const dist = Math.sqrt(dx*dx + dy*dy);
                        const pinchScale = dist / startDist;
                        scale = Math.min(Math.max(.5, pinchScale), 4);
                        updateTransform();
                    }
                }, { passive: false });

                modal.addEventListener("touchend", (e) => {
                    isDragging = false;
                    if (e.changedTouches.length === 1 && initialTouchY !== null) {
                        const deltaY = e.changedTouches[0].clientY - initialTouchY;
                        if (scale === 1 && deltaY > 100) {
                            closeModal();
                        }
                        initialTouchY = null;
                    }
                });
            }

            if (modalImg) { // Add null check before attaching onload
                modalImg.onload = () => {
                    if (loader) loader.style.display = "none"; // Add null check
                    modalImg.style.display = "block";
                };

                let mouseDown = false;
                modalImg.addEventListener("mousedown", (e) => {
                    mouseDown = true;
                    modalImg.classList.add('grabbing');
                    startX = e.clientX - offsetX;
                    startY = e.clientY - offsetY;
                });

                window.addEventListener("mousemove", (e) => {
                    if (mouseDown) {
                        offsetX = e.clientX - startX;
                        offsetY = e.clientY - startY;
                        updateTransform();
                    }
                });

                window.addEventListener("mouseup", () => {
                    mouseDown = false;
                    modalImg.classList.remove('grabbing');
                });
            }


            if (zoomInBtn) zoomInBtn.addEventListener("click", () => {
                scale = Math.min(scale + 0.2, 4);
                updateTransform();
            });
            if (zoomOutBtn) zoomOutBtn.addEventListener("click", () => {
                scale = Math.max(scale - 0.2, 0.5);
                updateTransform();
            });
            if (resetViewBtn) resetViewBtn.addEventListener("click", () => {
                resetTransform();
            });

            window.addEventListener("keydown", (e) => {
                if (modal && !modal.classList.contains("active")) return; // Check if modal is active
                if (e.key === "Escape") {
                    closeModal();
                } else if (e.key === "+" || e.key === "=") {
                    scale = Math.min(scale + 0.2, 4);
                    updateTransform();
                } else if (e.key === "-" || e.key === "_") {
                    scale = Math.max(scale - 0.2, 0.5);
                    updateTransform();
                }
            });

            document.querySelectorAll("img.enlargeable").forEach(img => {
                img.addEventListener("click", () => {
                    const hires = img.getAttribute("data-hires") || img.src;
                    if (loader) loader.style.display = "block"; // Add null check
                    if (modal) modal.classList.add("active"); // Use class for display
                    if (modalImg) { // Add null check
                        modalImg.style.display = "none";
                        modalImg.src = hires;
                    }
                    resetTransform();
                });
            });
        });
    </script>
</body>
</html>
        `
      }} />
    </div>
  );
};

export default Index;