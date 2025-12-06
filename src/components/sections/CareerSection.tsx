import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, ArrowRight, Heart, Briefcase, Globe, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CareerSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.career-animate',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="career"
      ref={sectionRef}
      className="chapter-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Chapter header */}
        <div className="career-animate flex items-center gap-4 mb-12">
          <span className="text-6xl md:text-8xl font-display font-bold text-accent/20">03</span>
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text">
              Innovation in My Career
            </h2>
            <p className="text-muted-foreground mt-2">From profession to purpose</p>
          </div>
        </div>

        {/* Original perspective */}
        <div className="career-animate glass-card p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-display font-semibold">Original Perspective</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Assignment 1.1</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Innovation will be a part of my future career in many ways. My primary interest is in technology, which is the field that is always changing and pushing forward to create innovations. I could be building new software, apps, or developing machine learning models, which are all areas where innovation is connected. What interests me with this career path is that innovation isn't only about investing in something new, but it can also be about improving a product that already exists and making it more efficient. By participating in events such as Hackathons and coursework, I'm already able to incorporate innovation in my daily life, getting more ready for my future career.
          </p>
        </div>

        {/* Ikigai Diagram */}
        <div className="career-animate gradient-border p-1 mb-8">
          <div className="bg-card rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-display font-semibold mb-6 text-center">Finding My Ikigai</h3>
            
            <div className="relative max-w-md mx-auto">
              {/* Ikigai circles */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-full bg-primary/20 border border-primary/40 flex flex-col items-center justify-center p-4 text-center">
                  <Heart className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-display font-semibold">What I Love</span>
                  <span className="text-xs text-muted-foreground mt-1">Technology & Problem-solving</span>
                </div>
                
                <div className="aspect-square rounded-full bg-secondary/20 border border-secondary/40 flex flex-col items-center justify-center p-4 text-center">
                  <Briefcase className="w-8 h-8 text-secondary mb-2" />
                  <span className="text-sm font-display font-semibold">What I'm Good At</span>
                  <span className="text-xs text-muted-foreground mt-1">Breaking down & improving systems</span>
                </div>
                
                <div className="aspect-square rounded-full bg-accent/20 border border-accent/40 flex flex-col items-center justify-center p-4 text-center">
                  <Globe className="w-8 h-8 text-accent mb-2" />
                  <span className="text-sm font-display font-semibold">What the World Needs</span>
                  <span className="text-xs text-muted-foreground mt-1">Humane technology</span>
                </div>
                
                <div className="aspect-square rounded-full bg-green-500/20 border border-green-500/40 flex flex-col items-center justify-center p-4 text-center">
                  <DollarSign className="w-8 h-8 text-green-500 mb-2" />
                  <span className="text-sm font-display font-semibold">What I Can Be Paid For</span>
                  <span className="text-xs text-muted-foreground mt-1">Tech industry careers</span>
                </div>
              </div>

              {/* Center - Ikigai */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center glow-primary">
                  <span className="font-display font-bold text-primary-foreground text-sm">IKIGAI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revised perspective */}
        <div className="career-animate glass-card p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <ArrowRight className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-display font-semibold">Revised Perspective</h3>
          </div>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              When looking back to my prior answer about how innovation can be a part of my potential future career, my view has evolved from building efficient software to finding my Ikigai. While I previously focused heavily on the intersection of what I am good at problem-solving and learning new tools and what I can be paid for, the course has taught me that true innovation requires integrating what the world needs.
            </p>
            
            <p>
              I no longer see my future career as just writing code; I see it as designing technology that solves the problem of digital noise and fosters real-life connections. Ikigai helped give me inspiration to not focus on just trying to be good at coding to get a high salary in the tech industry, because I would have a profession but not a purpose.
            </p>

            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary">
              <p className="text-sm">
                <strong className="text-foreground">My Mission:</strong> I don't want to build addictive apps; I want to use my skills to build tools that help people disconnect and reduce anxiety.
              </p>
            </div>

            <p>
              This aligns with the Center for Humane Technology, an organization founded by former Google Ethicist Tristan Harris. Harris argues that the tech industry has been downgrading humans by competing for attention, and the future of innovation lies in technology that respects human well-being rather than exploiting it. This validates my new perspective about my ability to break things down and improve them should be applied to fixing the problem of digital isolation, moving my career from a job to a mission.

            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;