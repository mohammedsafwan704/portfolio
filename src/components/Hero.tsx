import { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Mohammed Safwan';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block">
            <p className="text-amber-400 text-lg md:text-xl font-semibold mb-4 animate-slide-down">
              Welcome to my Portfolio
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            <span className="inline-block animate-slide-up">
              {text}
              {showCursor && <span className="text-amber-400">|</span>}
            </span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 animate-slide-up delay-200">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 bg-clip-text text-transparent font-semibold">
              B.Com Graduate
            </span>{' '}
            |{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-clip-text text-transparent font-semibold">
              Digital Marketing Student
            </span>
          </p>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 animate-slide-up delay-300">
            Transforming brands through strategic digital marketing, SEO optimization, and creative content strategies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-400">
  <a
    href="/MohammedSafwanCV.pdf"
    download="Mohammed_Safwan_Resume.pdf"
    className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
  >
    Download Resume
  </a>
</div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-amber-400 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
