import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeScene from '@/components/three/ThreeScene';
import ChapterNav from '@/components/ChapterNav';
import HeroSection from '@/components/sections/HeroSection';
import LifeSection from '@/components/sections/LifeSection';
import StudiesSection from '@/components/sections/StudiesSection';
import CareerSection from '@/components/sections/CareerSection';
import ReferencesSection from '@/components/sections/ReferencesSection';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Three.js Background */}
      <ThreeScene />

      {/* Chapter Navigation */}
      <ChapterNav />

      {/* Content Sections */}
      <HeroSection />
      <LifeSection />
      <StudiesSection />
      <CareerSection />
      <ReferencesSection />
    </main>
  );
};

export default Index;