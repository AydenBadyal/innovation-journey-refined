import { useEffect, useState } from 'react';

const chapters = [
  { id: 'hero', label: 'Home', icon: '◆' },
  { id: 'life', label: 'Life', icon: '01' },
  { id: 'studies', label: 'Studies', icon: '02' },
  { id: 'career', label: 'Career', icon: '03' },
  { id: 'references', label: 'Refs', icon: '◇' },
];

const ChapterNav = () => {
  const [activeChapter, setActiveChapter] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = chapters.map(ch => document.getElementById(ch.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveChapter(chapters[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {chapters.map((chapter) => (
        <button
          key={chapter.id}
          onClick={() => scrollToSection(chapter.id)}
          className={`group flex items-center gap-3 transition-all duration-300`}
        >
          <span
            className={`text-xs font-body opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              activeChapter === chapter.id ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            {chapter.label}
          </span>
          <span
            className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 font-display text-sm ${
              activeChapter === chapter.id
                ? 'border-primary bg-primary/20 text-primary glow-primary'
                : 'border-border bg-background/50 text-muted-foreground hover:border-primary/50 hover:text-primary'
            }`}
          >
            {chapter.icon}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default ChapterNav;