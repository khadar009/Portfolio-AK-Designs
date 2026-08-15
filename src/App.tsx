import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { ClientLogos } from './components/ClientLogos';
import { RibbonBanner } from './components/RibbonBanner';
import { Services } from './components/Services';
import { HowIWork } from './components/HowIWork';
import { WhyMe } from './components/WhyMe';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { ProjectModal } from './components/ProjectModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeMode, Project, ServiceCategory } from './types';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // Default to dark theme with bright orange highlights
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleNavigateWorks = () => {
    const el = document.querySelector('#works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectServiceForContact = (service: ServiceCategory) => {
    setSelectedService(service);
    handleNavigateContact();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07090E] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans antialiased selection:bg-orange-500 selection:text-black">
      
      {/* Fixed Glass Pill Header */}
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onNavigateContact={handleNavigateContact}
      />

      {/* Main Portfolio Sections */}
      <main>
        <Hero
          onNavigateWorks={handleNavigateWorks}
          onNavigateContact={handleNavigateContact}
        />

        <AboutMe
          onNavigateContact={handleNavigateContact}
        />

        <ClientLogos />

        <Services
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        <RibbonBanner />

        <HowIWork />

        <WhyMe />

        <Projects
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <Testimonials />

        <Contact
          selectedService={selectedService}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Detailed Case Study Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigateContact={handleNavigateContact}
      />

    </div>
  );
};

export default App;

