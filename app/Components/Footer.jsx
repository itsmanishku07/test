import React from 'react';
import logo from "@/app/Images/logomain.png"

import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const Logo = () => (
  <div className="text-2xl font-bold text-white">
    {/* Your<span className="text-orange-500">Logo</span> */}
    <Image src={logo} alt='logo'/>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', 'aria-label': 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', 'aria-label': 'Twitter' },
    { icon: <Instagram size={20} />, href: '#', 'aria-label': 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', 'aria-label': 'LinkedIn' },
  ];

  const linkSections = [
    {
      title: 'Our Services',
      links: [
        'Warehouse Management',
        'CXO & Executive Search',
        'Compliance Management',
        'Temporary Staffing',
        'Volume Hiring',
        'Lateral Hiring',
      ],
    },
    {
      title: 'Quick Links',
      links: ['About Us', 'Services', 'Case Studies', 'Contact Us', 'Careers'],
    },
  ];

  return (
    <footer className="bg-gray-500 text-white" id='footer'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <Logo />
            <p className="text-sm">
              Pragati Technology bridges the talent gap, connecting organizations with the right workforce to ensure every position is filled with the perfect fit for both skill and culture.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social['aria-label']}
                  className="text-black hover:text-orange-500 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold tracking-wider uppercase">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-sm hover:text-orange-500 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-white font-semibold tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-orange-500" />
                <span className="text-sm">Manish Kumar</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0 text-orange-500" />
                <a href="mailto:contact@yourcompany.com" className="text-sm hover:text-orange-500">manish0704ku@gmail.com.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 flex-shrink-0 text-orange-500" />
                <a href="tel:+918012345678" className="text-sm hover:text-orange-500">+91 9905515980</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} Pragati Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
