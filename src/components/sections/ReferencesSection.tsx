import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, ExternalLink } from 'lucide-react';
import { access } from 'fs';

gsap.registerPlugin(ScrollTrigger);

const references = [
  {
    authors: 'Center for Humane Technology',
    title: 'The CHT Perspective',
    url: 'https://www.humanetech.com/problem',
    accessed: 'December 5, 2025',
  },
  {
    authors: 'Technology Magazine',
    title: 'How ChatGPT Increased Business Users by 50% in Six Months',
    url: 'https://technologymagazine.com/articles/how-chatgpt-increased-business-users-by-50-in-six-months',
    accessed: 'December 5, 2025',
  },
  {
    authors: 'Nathan Onn',
    title: 'Why Domain Knowledge Is Crucial to Succeed in Software Engineering',
    url: 'https://www.nathanonn.com/why-domain-knowledge-is-crucial-to-succeed-in-software-engineering/',
    accessed: 'December 3, 2025',
  },
];

const ReferencesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.refs-animate',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="references"
      ref={sectionRef}
      className="chapter-section pb-32"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="refs-animate flex items-center gap-4 mb-12">
          <BookOpen className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
            References
          </h2>
        </div>

        {/* Reference list */}
        <div className="space-y-4">
          {references.map((ref, index) => (
            <a
              key={index}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="refs-animate block glass-card p-4 md:p-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-foreground font-body">
                    <span className="text-muted-foreground">{ref.authors}. </span>
                    <span className="italic">"{ref.title}."</span>
                    {ref.accessed && <span className="text-muted-foreground"> Accessed {ref.accessed}.</span>}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
      </div>
    </section>
  );
};

export default ReferencesSection;