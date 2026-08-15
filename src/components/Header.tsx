import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';

interface HeaderProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  onNavigateContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, onNavigateContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#how-i-work' },
    { name: 'Why Me', href: '#why-me' },
    { name: 'Works', href: '#works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="glass-header rounded-2xl px-4 sm:px-6 py-3 border border-slate-200/90 dark:border-slate-800/90 shadow-lg shadow-slate-200/50 dark:shadow-none flex items-center justify-between">
          
          {/* Logo / Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-heading font-extrabold text-sm sm:text-base shadow-md group-hover:scale-105 transition-transform duration-200">
              AK
            </div>
            <span className="font-heading font-extrabold text-base sm:text-lg leading-none text-slate-900 dark:text-white tracking-tight">
              AK Designs
            </span>
          </a>

          {/* Desktop Navigation Links (Large Screens) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs lg:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-orange-400 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all shadow-none hover:shadow-sm whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Dark / Light Theme Toggle Pill */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold border border-slate-200/80 dark:border-slate-700 shadow-sm"
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1.5 text-orange-400"
                  >
                    <Sun className="w-4 h-4" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-200">Light</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center gap-1.5 text-slate-800"
                  >
                    <Moon className="w-4 h-4 text-slate-900" />
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900">Dark</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={onNavigateContact}
              className="hidden sm:flex items-center gap-2 px-3.5 sm:px-4.5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-heading font-extrabold text-xs lg:text-sm tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <span className="whitespace-nowrap">Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-white shrink-0" />
            </button>

            {/* Mobile & Tablet Navigation Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-header rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col gap-1.5"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-xl font-heading font-bold text-sm text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigateContact();
                  }}
                  className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};
