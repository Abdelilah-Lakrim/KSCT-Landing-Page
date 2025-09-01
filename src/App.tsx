import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, MessageCircle, Calendar, Users, Trophy, Heart, ChevronRight, Facebook, Instagram, Twitter, Menu, X, Shield, Youtube } from 'lucide-react';

function App() {
  const [typingText, setTypingText] = useState('');
  const [currentCounter, setCurrentCounter] = useState({ national: 0, world: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fullText = 'Strength. Discipline. Honor.';
  const targetCounters = { national: 6, world: 1 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const counterElement = document.getElementById('counter-section');
    if (counterElement) {
      observer.observe(counterElement);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const nationalInterval = setInterval(() => {
        setCurrentCounter(prev => {
          if (prev.national < targetCounters.national) {
            return { ...prev, national: prev.national + 1 };
          }
          clearInterval(nationalInterval);
          return prev;
        });
      }, 200);

      const worldInterval = setInterval(() => {
        setCurrentCounter(prev => {
          if (prev.world < targetCounters.world) {
            return { ...prev, world: prev.world + 1 };
          }
          clearInterval(worldInterval);
          return prev;
        });
      }, 400);
    }
  }, [isVisible]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-15 h-15 rounded-lg flex items-center justify-center">
                <img src="images/logo.png" alt="KSCT Logo" className="w-14 h-10" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white">KSCT</h1>
                <p className="text-xs text-gray-400">The Castle Black</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-red-700 transition-colors duration-300">
                About
              </button>
              <button onClick={() => scrollToSection('activities')} className="text-gray-300 hover:text-red-700 transition-colors duration-300">
                Activities
              </button>
              <button onClick={() => scrollToSection('schedule')} className="text-gray-300 hover:text-red-700 transition-colors duration-300">
                Schedule
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-red-700 transition-colors duration-300">
                Gallery
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-red-700 transition-colors duration-300">
                Contact
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-red-700 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
              <div className="py-4 space-y-4">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-red-700 hover:bg-gray-900 transition-all duration-300"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('activities')} 
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-red-700 hover:bg-gray-900 transition-all duration-300"
                >
                  Our Activities
                </button>
                <button 
                  onClick={() => scrollToSection('schedule')} 
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-red-700 hover:bg-gray-900 transition-all duration-300"
                >
                  Training Schedule
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')} 
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-red-700 hover:bg-gray-900 transition-all duration-300"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-red-700 hover:bg-gray-900 transition-all duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

     {/* Header with Video Background */}
<header className="relative h-[60vh] md:h-screen flex items-center justify-center overflow-hidden mt-16">
  <div className="absolute inset-0">
    {/* Video */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="videos/first.mp4"
      autoPlay
      loop
      muted
      playsInline
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-red-900 opacity-60 md:opacity-80"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-8">
    <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight">
      <span className="block text-white">KSCT</span>
      <span className="block text-red-700">The Castle Black</span>
    </h1>
    <p className="text-lg md:text-2xl mb-6 md:mb-8 text-gray-300 font-light">
      Where Champions Are Made
    </p>
    <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
      Join Us
    </button>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <ChevronRight className="rotate-90 text-white opacity-70" size={24} />
  </div>
</header>

      {/* Typing Effect Section */}
      {/* <section className="py-20 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white-700 min-h-[60px]">
            {typingText}<span className="animate-pulse">|</span>
          </h2>
        </div>
      </section> */}

      {/* About Us */}
<section id="about" className="py-20 bg-white text-black relative overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
        About Us
      </h2>
      <div className="h-1 w-24 mx-auto mb-10 bg-red-900 rounded-full"></div>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
        At <span className="font-semibold text-red-900">KSCT The Castle Black</span>, we forge warriors through the ancient art of <span className="italic">Wushu Kung Fu</span>. 
        Our dojo is more than a training ground it's a sanctuary where discipline meets passion, 
        tradition honors innovation, and every practitioner becomes part of our family.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700">
        Martial arts transcends physical training. It's a journey of <span className="font-semibold text-red-900">self-discovery</span>, 
        <span className="font-semibold text-red-900">mental fortitude</span>, and <span className="font-semibold text-red-900">spiritual growth</span> 
        that transforms ordinary individuals into extraordinary champions.
      </p>
    </div>

    {/* Optional visual element */}
    <div className="absolute top-0 right-0 w-40 h-40 bg-red-900 opacity-10 rounded-full -z-10"></div>
    <div className="absolute bottom-0 left-0 w-60 h-60 bg-black opacity-5 rounded-full -z-10"></div>
  </div>
</section>


      {/* Our Activities */}
      {/* <section id="activities" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Our Activities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <Trophy className="mx-auto mb-6 text-red-700" size={60} />
              <h3 className="text-2xl font-bold mb-4 text-white">Performance</h3>
              <p className="text-gray-300 leading-relaxed">
                Master the art of Wushu through rigorous training and performance excellence. 
                Develop speed, agility, and precision in every movement.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <Users className="mx-auto mb-6 text-red-700" size={60} />
              <h3 className="text-2xl font-bold mb-4 text-white">Discipline</h3>
              <p className="text-gray-300 leading-relaxed">
                Cultivate mental strength and self-control through structured training. 
                Learn focus, respect, and the warrior's mindset.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <Heart className="mx-auto mb-6 text-red-700" size={60} />
              <h3 className="text-2xl font-bold mb-4 text-white">Family Spirit</h3>
              <p className="text-gray-300 leading-relaxed">
                Join a brotherhood of warriors who support and uplift each other. 
                Experience the true meaning of martial arts community.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Training Schedule */}
      <section id="schedule" className="py-20 bg-gray-100 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Training Schedule</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-red-700 text-white p-6 text-center">
                <Calendar className="mx-auto mb-2" size={40} />
                <h3 className="text-2xl font-bold">Weekly Classes</h3>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="text-xl font-bold text-red-700">Tuesday & Thursday</h4>
                      <p className="text-gray-600">Evening Sessions</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-2xl font-bold">8:30 PM – 9:30 PM</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="text-xl font-bold text-red-700">Saturday</h4>
                      <p className="text-gray-600">Extended Training</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-2xl font-bold">4:00 PM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Counter */}
      {/* <section id="counter-section" className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Our Achievements</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold mb-4">
                {currentCounter.national}x
              </div>
              <p className="text-xl md:text-2xl">National Champion</p>
            </div>
            <div className="text-center">
              <div className="text-6xl md:text-8xl font-bold mb-4">
                {currentCounter.world}x
              </div>
              <p className="text-xl md:text-2xl">World Vice-Champion</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://scontent.fcmn2-2.fna.fbcdn.net/v/t39.30808-6/494743225_1230750202394648_5403526642916568660_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEZ0nqhvByS0OVsSUHR_thsEoJrtyjixHQSgmu3KOLEdCGs10-8MLdk6Ykamk1Cc_LnHxHYgZnmc6sS8BekI-P-&_nc_ohc=wfl5q3lQJSYQ7kNvwHUw_6h&_nc_oc=Adkr75CSgOdXpsZocfFcx6vW3E7XQzNFPt8_B-0t4u9JJaVtu49kTGuUtr_5Kw_AqJk&_nc_zt=23&_nc_ht=scontent.fcmn2-2.fna&_nc_gid=3gd6MVlM_39kOVf6pSNeUg&oh=00_AfWs6dpQMkvuLRRx9zqXLxhZSUFMmKToUyK5nHOJgQL3YQ&oe=68BB8548',
              'https://scontent.fcmn2-2.fna.fbcdn.net/v/t39.30808-6/494488645_1230856192384049_7442794539322311674_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF2olbDvQAxM_RwTbryB9HC-2wdB8Eve1n7bB0HwS97WdkV3kwmoBrlm24WfiLMbLpzxw7avR6CHLTzrg0o35__&_nc_ohc=XjclRXam13YQ7kNvwEoigfj&_nc_oc=AdnRLSO3Mow4dIJ7hI6M-X-dNLc2MfboAMhbBCyTZwEBft6KS4IsWDA-ZeNSo5JIuIk&_nc_zt=23&_nc_ht=scontent.fcmn2-2.fna&_nc_gid=stp8rLt17j4qy2kc1diU7w&oh=00_AfUYuKi1Z7J4G0HLkU43YoV-9PIdVC31PqaYlKNQiVvcSQ&oe=68BB7C41',
              'https://scontent.fcmn2-2.fna.fbcdn.net/v/t39.30808-6/494743225_1230750202394648_5403526642916568660_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEZ0nqhvByS0OVsSUHR_thsEoJrtyjixHQSgmu3KOLEdCGs10-8MLdk6Ykamk1Cc_LnHxHYgZnmc6sS8BekI-P-&_nc_ohc=wfl5q3lQJSYQ7kNvwHUw_6h&_nc_oc=Adkr75CSgOdXpsZocfFcx6vW3E7XQzNFPt8_B-0t4u9JJaVtu49kTGuUtr_5Kw_AqJk&_nc_zt=23&_nc_ht=scontent.fcmn2-2.fna&_nc_gid=3gd6MVlM_39kOVf6pSNeUg&oh=00_AfWs6dpQMkvuLRRx9zqXLxhZSUFMmKToUyK5nHOJgQL3YQ&oe=68BB8548',
              'https://scontent.fcmn2-2.fna.fbcdn.net/v/t39.30808-6/491759968_1216590157143986_4973616333106709021_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE8CFdT_Ym1SSLakrBdGagnuRopP29rIQy5Gik_b2shDEuD3HmdCyJqHJTShhpA6Or5dZgeKPeH2On3k-y3BG96&_nc_ohc=QEK0PSaNSJ4Q7kNvwFLvrPp&_nc_oc=Adkl0dKW_Hgf8RvV-GAQNfwvAImDfBq2kY2x87thH6lRLy_KqvtB2Nyb2w3tKXhnD8A&_nc_zt=23&_nc_ht=scontent.fcmn2-2.fna&_nc_gid=-A7TCB-S4fV5AGYJLCJGWQ&oh=00_AfUAUCR-S8NkLljoXFtMaQoCW-2_rM_eoUnqtaXH_a3POQ&oe=68BB88C6',
              'https://scontent.fcmn2-2.fna.fbcdn.net/v/t39.30808-6/485136045_1187382643398071_6484076902289103511_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHYBJVRSkB9Aywnxwx_7QzWhFrP3y19N1eEWs_fLX03V9aLq7nwKeo2DNfrnEJro-8dTemTj1c6IHuLwNUUf7ml&_nc_ohc=QictEbLT7aMQ7kNvwEySVh7&_nc_oc=Adkv0dEbijAD5x03AOc2xD0fkHRODolGLapWaBPZO_6abAvvqvBtus60H4McybHFxv0&_nc_zt=23&_nc_ht=scontent.fcmn2-2.fna&_nc_gid=irzdOY8FjEhAs81q_7BzSQ&oh=00_AfUml0uhudDTfjI5Iu75MuNwyVbzSIHANeuC2kv8pGrtHA&oe=68BB640E',
              'https://scontent.fcmn2-1.fna.fbcdn.net/v/t39.30808-6/481055980_1173273961475606_5659998597111159877_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFk_5CrBHxwkBZAhImThc47L8lG4GxvRgQvyUbgbG9GBAged7B-QLBZ7xZMuyjnVHg3aj73E1vRAjMQQjEKjFPw&_nc_ohc=Kp3xOlcJDTwQ7kNvwGwiMtd&_nc_oc=AdltoUMZKAP0wEJgxsqq5ui7MtpmKEvsRShAol7UFt7X9x_JlaErUE0U7FNFcuqZHUI&_nc_zt=23&_nc_ht=scontent.fcmn2-1.fna&_nc_gid=9LEqYXUga-CYq8FvlMSoBg&oh=00_AfVsq00HhZrnawCLn-NPZ8GJtgUIjL39svPeG1wsec0Odw&oe=68BB61E9'
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={image}
                  alt={`Training ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold">Training Session</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Words of Wisdom</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <blockquote className="text-3xl md:text-4xl font-light italic text-gray-700 mb-8">
                "Discipline shapes champions."
              </blockquote>
              <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
              <p className="text-lg text-gray-600">
                Every great warrior begins with a single step. Every champion is forged through countless hours of dedication, 
                perseverance, and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 bg-gradient-to-r from-red-700 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Begin Your Journey?</h2>
          <p className="text-xl md:text-2xl mb-12 text-red-100">
            Join the brotherhood. Embrace the discipline. Become a champion.
          </p>
          <a
            href="https://wa.me/+212608250102"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="mr-3" size={24} />
            Contact Us on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-700">KSCT The Castle Black</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Where tradition meets excellence in Wushu Kung Fu training. 
                Building champions through discipline, honor, and family spirit.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-red-700 mr-3" size={20} />
                  <span className="text-gray-400">All. des Sophoras, Casablanca 20250</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-red-700 mr-3" size={20} />
                  <span className="text-gray-400">+212608250102</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-red-700 mr-3" size={20} />
                  <span className="text-gray-400">ksctwushu@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/Kungfuwushucasablanca" className="text-gray-400 hover:text-red-700 transition-colors duration-300">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/wushu_casa/" className="text-gray-400 hover:text-red-700 transition-colors duration-300">
                  <Instagram size={24} />
                </a>
                <a href="https://www.youtube.com/@ksctwushu4994" className="text-gray-400 hover:text-red-700 transition-colors duration-300">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © KSCT The Castle Black. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;