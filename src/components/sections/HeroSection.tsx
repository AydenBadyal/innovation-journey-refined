import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null); // New ref for the report details
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2 }
    )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      // Added animation for the new details section
      .fromTo(
        detailsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        scrollIndicatorRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3'
      );

    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: 'power1.inOut',
    });
  }, []);

  const scrollToNext = () => {
    document.getElementById('life')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
    >
      <div className="text-center max-w-4xl mx-auto z-10">
        <h1
          ref={titleRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text text-glow"
        >
          My Innovation Journey
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mx-auto mb-10"
        >
          A reflection on how innovation shapes my life, studies, and future career
        </p>

        {/* --- FIXED SECTION STARTS HERE --- */}
        <div 
          ref={detailsRef}
          className="flex flex-col items-center gap-1.5 font-body text-muted-foreground/80"
        >
          <span className="text-lg md:text-xl font-semibold text-primary tracking-wide">
            Ayden Badyal
          </span>
          <span className="text-base md:text-lg">
            Beedie School of Business, Simon Fraser University
          </span>
          <span className="text-base md:text-lg">
            Bus 240: Introduction to Innovation
          </span>
          <div className="flex items-center gap-3 text-sm md:text-base mt-1 opacity-75">
            <span>VJ Teric</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>Dec 2, 2025</span>
          </div>
        </div>
        {/* --- FIXED SECTION ENDS HERE --- */}
      </div>

      <div
        ref={scrollIndicatorRef}
        onClick={scrollToNext}
        className="absolute bottom-12 cursor-pointer group z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground font-body group-hover:text-primary transition-colors">
            Begin Journey
          </span>
          <div className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
            <ChevronDown className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default HeroSection;