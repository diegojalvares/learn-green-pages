
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MaterialsSection from '@/components/MaterialsSection';
import PreviousCoursesSection from '@/components/PreviousCoursesSection';
import OnlineModulesSection from '@/components/OnlineModulesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MaterialsSection />
      <PreviousCoursesSection />
      <OnlineModulesSection />
      <Footer />
    </div>
  );
};

export default Index;
