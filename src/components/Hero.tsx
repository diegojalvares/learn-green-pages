
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToMaterials = () => {
    const element = document.getElementById('materials');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkGray mb-6">
            Open Learning Resources & Materials
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Access high-quality educational content, previous course materials, and interactive online modules for your learning journey.
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-appGreen hover:bg-appGreen-dark text-white flex items-center gap-2"
              onClick={scrollToMaterials}
            >
              Explore Materials <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
