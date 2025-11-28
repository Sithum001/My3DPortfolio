import React from 'react';
import { navLinks, socialLinks } from '../constants';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return <FaGithub size={24} />;
      case 'linkedin':
        return <FaLinkedin size={24} />;
      case 'facebook':
        return <FaFacebook size={24} />;
      case 'instagram':
        return <FaInstagram size={24} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-black">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 lg:gap-32 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <a href="#hero" className="text-3xl font-bold hover:text-blue-400 transition-colors inline-block">
              Sithum Gimhana
            </a>
            <p className="text-white-50 text-base leading-relaxed">
              Full-stack developer passionate about creating innovative and user-friendly web applications. 
              Let's build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <nav>
              <ul className="space-y-3">
                {navLinks.map(({ name, link }) => (
                  <li key={name}>
                    <a
                      href={link}
                      className="text-white-50 hover:text-white transition-colors text-base flex items-center group"
                    >
                      <span className="mr-3 text-blue-400 group-hover:translate-x-1 transition-transform text-lg">›</span>
                      {name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="text-white-50 hover:text-white transition-colors text-base flex items-center group"
                  >
                    <span className="mr-3 text-blue-400 group-hover:translate-x-1 transition-transform text-lg">›</span>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Connect With Me</h3>
            <p className="text-white-50 text-base leading-relaxed">
              Follow me on social media for updates and behind-the-scenes content.
            </p>
            <div className="flex gap-5">
              {socialLinks.map(({ name, url, icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black-200 hover:bg-blue-500 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
                  aria-label={name}
                >
                  {getSocialIcon(icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-base text-white-50">
          <p className="flex items-center gap-2">
            © {currentYear} Sithum Gimhana. Made with <FaHeart className="text-red-500" /> All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#hero" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#hero" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
