import { useState, useEffect } from 'react';
import Head from 'next/head';
import BirthdayCake from '../components/BirthdayCake';
import BirthdayCard from '../components/BirthdayCard';
import BirthdayCountdown from '../components/BirthdayCountdown';
import BirthdayMessage from '../components/BirthdayMessage';
import FloatingHearts from '../components/FloatingHearts';
import PhotoGallery from '../components/PhotoGallery';

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - next section
      setCurrentSection((prev) => (prev + 1) % 4);
    } else if (isRightSwipe) {
      // Swipe right - previous section
      setCurrentSection((prev) => (prev - 1 + 4) % 4);
    }
  };

  useEffect(() => {
    // Show content after a brief delay for dramatic effect
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 0, name: 'Countdown', icon: '⏰' },
    { id: 1, name: 'Cake', icon: '🎂' },
    { id: 2, name: 'Gallery', icon: '📸' }
  ];

  return (
    <>
      <Head>
        <title>Happy Birthday Chabett! 🎂</title>
        <meta name="description" content="Happy Birthday Putri Elisabeth Silalahi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div 
        className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Animated background stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              <div className="w-1 h-1 bg-white rounded-full opacity-60"></div>
            </div>
          ))}
        </div>

        {/* Floating Hearts */}
        <FloatingHearts />

        {/* Main Content */}
        <div className={`relative z-10 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <header className="text-center pt-4 md:pt-8 pb-4 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
              🎂 Celamatt Ulangg Tahunnn Istriikuwww! 🎂
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-200 font-light">
              Putri Elisabeth Silalahi
            </p>
            <p className="text-base md:text-lg text-blue-300 mt-2">
              23 Juniii 2025
            </p>
          </header>

          {/* Section Navigation */}
          <div className="flex justify-center mb-4 md:mb-8">
            <div className="bg-blue-800/30 backdrop-blur-sm rounded-full p-2 border border-blue-400/30">
              <div className="flex space-x-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(section.id)}
                    className={`px-3 md:px-4 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-medium ${
                      currentSection === section.id 
                        ? 'bg-white text-blue-900 shadow-lg' 
                        : 'text-blue-200 hover:text-white hover:bg-blue-600/30'
                    }`}
                  >
                    <span className="mr-1 md:mr-2">{section.icon}</span>
                    <span className="hidden sm:inline">{section.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Swipe Indicator for Mobile */}
          <div className="text-center mb-4 md:hidden">
            <p className="text-blue-200 text-sm">
              ← Swipe to navigate →
            </p>
          </div>

          {/* Content Sections */}
          <main className="container mx-auto px-4 pb-4 md:pb-8">
            
            {/* Section 1: Birthday Countdown */}
            {currentSection === 0 && (
              <div className="animate-fadeIn">
                <BirthdayCountdown />
              </div>
            )}

            {/* Section 2: Birthday Message */}
            {currentSection === 1 && (
              <div className="animate-fadeIn">
                <BirthdayCake />
              </div>
            )}

            {/* Section 3: Birthday Cake */}
            {currentSection === 2 && (
              <div className="animate-fadeIn">
                <PhotoGallery />
              </div>
            )}

            {/* Birthday Card - Always visible */}
            <div className="mt-4 md:mt-8">
              <BirthdayCard />
            </div>
          </main>

          {/* Footer */}
          <footer className="text-center pb-4 md:pb-8 px-4">
            <p className="text-blue-200 text-xs md:text-sm">
              Made with ❤️ by cuamiimuwwwww yangg comell inyiii
            </p>
            <p className="text-blue-300 text-xs mt-1">
              aqq buat tanggalll ciangg June 22, 2024
            </p>
          </footer>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        /* Prevent text selection on mobile */
        * {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Allow text selection for inputs and textareas */
        input, textarea {
          -webkit-user-select: text;
          -khtml-user-select: text;
          -moz-user-select: text;
          -ms-user-select: text;
          user-select: text;
        }
      `}</style>
    </>
  );
}