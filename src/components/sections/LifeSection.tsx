import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, ArrowRight, ExternalLink, Play } from 'lucide-react';
import hackathonImage from '@/assets/hackathon.png';

gsap.registerPlugin(ScrollTrigger);

const LifeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.life-animate',
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
      id="life"
      ref={sectionRef}
      className="chapter-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Chapter header */}
        <div className="life-animate flex items-center gap-4 mb-12">
          <span className="text-6xl md:text-8xl font-display font-bold text-primary/20">01</span>
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text">
              Innovation in My Life
            </h2>
            <p className="text-muted-foreground mt-2">How innovation affects my daily existence</p>
          </div>
        </div>

        {/* Original perspective */}
        <div className="life-animate glass-card p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-display font-semibold">Original Perspective</h3>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">Assignment 1.1</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Innovation affects my daily life in countless ways, big and small. Some innovations that affect my everyday life include Apple devices, such as my iPhone, laptop and AirPods, which make schoolwork, communication, and personal tasks far more efficient than they were even a decade ago. Every single one of those items that I use on a daily basis is an innovation that has affected my life to make it much more efficient. Previous innovations are able to help approach problems differently, so I can find a new or efficient solution to solve a problem.
          </p>
        </div>

        {/* Hackathon Project Showcase */}
        <div className="life-animate gradient-border p-1 mb-8">
          <div className="bg-card rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <h3 className="text-xl font-display font-semibold">My Hackathon Project: SFU CourseMap Created After Assignemtn 1.1</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={hackathonImage} 
                  alt="SFU CourseMap - Hackathon Project"
                  className="rounded-lg border border-border w-full object-cover glow-primary"
                />
                <div className="flex gap-4 mt-4">
                  <a 
                    href="https://sfu-coursemap.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition-colors font-body text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Site
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=06sgKJxNRpY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent/30 transition-colors font-body text-sm"
                  >
                    <Play className="w-4 h-4" />
                    Demo Video
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  This weekend, I plan on doing a Hackathon with a couple of my friends, planning on creating something that will solve a problem or make something easier. Taking part in a Hackathon helps me see innovation not just as something to consume, but as something that I can contribute to.
                </p>
                <div className="p-4 rounded-lg bg-muted/30 border border-border">
                  <p className="text-sm text-foreground">
                    <strong>The Problem:</strong> Students couldn't easily see all prerequisites needed for a course.
                  </p>
                  <p className="text-sm text-foreground mt-2">
                    <strong>Our Solution:</strong> A visual tree breakdown showing complete prerequisite chains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revised perspective */}
        <div className="life-animate glass-card p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <ArrowRight className="w-6 h-6 text-secondary" />
            <h3 className="text-xl font-display font-semibold">Revised Perspective</h3>
          </div>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
            Reflecting on my original answer, my view has shifted from viewing innovation as merely gadgets I use to understanding it through the lens of Adoption and Diffusion. While I still value the efficiency of my devices, this course has, however, taught me that a product is only innovative if it's actually adopted by a social system. The hardest part of getting a product to reach the system is crossing the chasm. 

            </p>
            
            <p>
            My view has shifted because of our class discussion, and one of the topics that reinforced this was the innovation decision process. I now realize that for my Hackathon project, which I did in October, to be successful, we cannot just be good at coding, but we must create something that has a relative advantage and compatibility to be adopted by users. Our project for the Hackathon was designed to solve the problem of students not being able to see all the prerequisites they needed for a course. We came out with this through our own experience of looking at what courses we needed to take for a certain course. While our website possessed Relative Advantage because it offered a full tree breakdown, unlike the current system, and Compatibility with student needs, we failed to market it effectively. Looking back, we did not account for Observability, we didn't make the benefits visible enough to the broader student body to successfully cross the chasm. This mirrors the real-world strategy of companies like OpenAI, which was stated by Technology Magazine, that ChatGPT’s massive success wasn't just due to the model itself, but because they strategically eliminated friction in the user interface to ensure widespread adoption. Unlike OpenAI, my team focused on the backend logic but neglected the user adoption strategy, which ultimately limited our innovation's impact.

            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeSection;