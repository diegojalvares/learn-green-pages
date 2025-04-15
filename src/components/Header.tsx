
import React, { useState } from 'react';
import { Menu, X, BookOpen, Calendar, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-darkGray">Learning<span className="text-appGreen">Hub</span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Button
            variant="link"
            className="text-darkGray hover:text-appGreen flex items-center gap-2"
            onClick={() => scrollToSection('materials')}
          >
            <BookOpen size={18} />
            Materials
          </Button>
          <Button
            variant="link"
            className="text-darkGray hover:text-appGreen flex items-center gap-2"
            onClick={() => scrollToSection('previous-courses')}
          >
            <Calendar size={18} />
            Previous Courses
          </Button>
          <Button
            variant="link"
            className="text-darkGray hover:text-appGreen flex items-center gap-2"
            onClick={() => scrollToSection('online-modules')}
          >
            <PlayCircle size={18} />
            Online Modules
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden px-4 py-2 bg-white border-t border-gray-100">
          <ul className="space-y-2">
            <li>
              <Button
                variant="ghost"
                className="w-full text-left text-darkGray hover:text-appGreen flex items-center gap-2"
                onClick={() => scrollToSection('materials')}
              >
                <BookOpen size={18} />
                Materials
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full text-left text-darkGray hover:text-appGreen flex items-center gap-2"
                onClick={() => scrollToSection('previous-courses')}
              >
                <Calendar size={18} />
                Previous Courses
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="w-full text-left text-darkGray hover:text-appGreen flex items-center gap-2"
                onClick={() => scrollToSection('online-modules')}
              >
                <PlayCircle size={18} />
                Online Modules
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
