import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, ArrowRight, Sprout, Trees } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StudiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.studies-animate',
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
      id="studies"
      ref={sectionRef}
      className="chapter-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Chapter header */}
        <div className="studies-animate flex items-center gap-4 mb-12">
          <span className="text-6xl md:text-8xl font-display font-bold text-secondary/20">02</span>
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text">
              Innovation in My Studies
            </h2>
            <p className="text-muted-foreground mt-2">Computer Science + Business Minor</p>
          </div>
        </div>

        {/* Original perspective */}
        <div className="studies-animate glass-card p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-display font-semibold">Original Perspective</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Assignment 1.1</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Innovation relates to my degree in many ways. Computer science is built on continuous innovation with new programming languages, software and algorithms always being built to solve problems in a faster or more effective way. Studying CS means I'm always working with tools that are a result of innovation, and I'm also learning to create or improve innovations, whether it's building software or improving a previously built program. My choice of a business minor allows me a different lens on innovation. It highlights how innovation isn't just about building something new, but also about how companies use it to create, compete in the market and set up long-term strategies.
          </p>
        </div>

        {/* Weed vs Root Visualization */}
        <div className="studies-animate gradient-border p-1 mb-8">
          <div className="bg-card rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-display font-semibold mb-6 text-center">The Weed vs Root Analogy</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 rounded-lg bg-destructive/10 border border-destructive/30">
                <Sprout className="w-12 h-12 mx-auto mb-4 text-destructive" />
                <h4 className="font-display font-semibold text-lg mb-2">The Weed</h4>
                <p className="text-sm text-muted-foreground">
                  Visible symptoms that code often addresses—surface-level fixes that don't solve the underlying problem
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-primary/10 border border-primary/30">
                <Trees className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h4 className="font-display font-semibold text-lg mb-2">The Root</h4>
                <p className="text-sm text-muted-foreground">
                  The underlying cause that business strategy must address for true innovation to occur
                </p>
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-6 text-sm">
              If I build a technical solution for a symptom without understanding the root cause, the innovation will likely fail.
            </p>
          </div>
        </div>

        {/* Revised perspective */}
        <div className="studies-animate glass-card p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <ArrowRight className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-display font-semibold">Revised Perspective</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary">After the Course</span>
          </div>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              My perspective on my degree has deepened significantly. I originally noted the link between CS and Business, but I now understand this through the lens of <strong className="text-foreground">Root Cause Analysis</strong>. I no longer see my degree as just learning to build solutions, but rather learning to <strong className="text-foreground">identify the right problems</strong>.
            </p>
            
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-accent">
              <p className="text-sm">
                <strong className="text-foreground">Guest Speaker Insight:</strong> If I get a computer science degree, I wouldn't really need to have a job that does programming. It can be something totally different, but the skills I have learned from school would transfer over. It is important to always keep learning new things.
              </p>
            </div>

            <p>
              Our class about learning the <strong className="text-foreground">Weed vs Root analogy</strong> changed my view because it showed me that writing code often addresses the Weed (the visible symptom), but business strategy must address the Root (the underlying cause).
            </p>

            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-secondary">
              <p className="text-sm">
                <strong className="text-foreground">External Validation:</strong> This is reinforced by a 2023 industry article by software engineer Nathan Onn, who argues that <strong className="text-foreground">domain knowledge is more valuable than technical ability</strong> because coding skills alone often lead to incorrect estimates and solutions that don't actually meet customer needs.
              </p>
            </div>

            <p>
              This validates my new belief that my Business minor is not just a bonus, but the <strong className="text-foreground">essential domain knowledge</strong> that prevents me from writing useless code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudiesSection;