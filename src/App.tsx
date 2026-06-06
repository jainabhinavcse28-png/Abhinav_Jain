/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Users, 
  Globe, 
  FileDigit, 
  Menu, 
  X, 
  ChevronRight, 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Award, 
  BookOpen, 
  Briefcase, 
  ExternalLink, 
  TrendingUp,
  Percent,
  Atom,
  Building,
  CalendarDays,
  Info,
  Phone
} from 'lucide-react';

import { PERSONAL_INFO, EXPERIENCES, VOLUNTEER_ROLES, PROJECTS, SKILL_CATEGORIES } from './data';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('tech');
  
  // Interactive IEEE Role toggle inside Experience
  const [expandedIeeeRole, setExpandedIeeeRole] = useState<'finance' | 'junior' | 'none'>('finance');

  const handleScrollToId = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Icon map for skills categories
  const getSkillCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="h-5 w-5 text-indigo-600" />;
      case 'FileDigit': return <FileDigit className="h-5 w-5 text-emerald-600" />;
      case 'Users': return <Users className="h-5 w-5 text-sky-600" />;
      case 'Globe': return <Globe className="h-5 w-5 text-fuchsia-600" />;
      default: return <Code2 className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 antialiased selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Sleek Header Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo initials */}
            <div className="flex-shrink-0 flex items-center">
              <a 
                onClick={() => handleScrollToId('hero')} 
                className="text-lg font-bold tracking-tight text-slate-900 hover:text-indigo-600 cursor-pointer flex items-center gap-1.5 font-sans"
              >
                <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm">AJ</span>
                <span>Abhinav Jain<span className="text-indigo-600 font-bold">.</span></span>
              </a>
            </div>

            {/* Desktop Navbar menu */}
            <div className="hidden md:flex items-center space-x-7 text-xs font-semibold tracking-wide text-slate-600">
              <a onClick={() => handleScrollToId('about')} className="hover:text-indigo-600 cursor-pointer transition">About & Academics</a>
              <a onClick={() => handleScrollToId('experience')} className="hover:text-indigo-600 cursor-pointer transition">Experience</a>
              <a onClick={() => handleScrollToId('skills')} className="hover:text-indigo-600 cursor-pointer transition">Skills</a>
              <a onClick={() => handleScrollToId('projects')} className="hover:text-indigo-600 cursor-pointer transition">Projects</a>
              <a onClick={() => handleScrollToId('certifications')} className="hover:text-indigo-600 cursor-pointer transition">Certifications</a>
              <a onClick={() => handleScrollToId('contact')} className="hover:text-indigo-600 cursor-pointer transition">Contact</a>
            </div>

            {/* Social Header Connect shortcuts */}
            <div className="hidden md:flex items-center gap-3 border-l border-slate-200 pl-6">
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-400 hover:text-slate-900 transition"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="text-slate-400 hover:text-slate-910 transition"
                title="Email Abhinav"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            {/* Responsive mobile toggles */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 px-2.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-md transition cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu block */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-100 bg-white"
            >
              <div className="px-4 py-3 space-y-2.5 text-sm font-semibold text-slate-700 flex flex-col">
                <a onClick={() => handleScrollToId('about')} className="hover:text-indigo-600 py-1 cursor-pointer">About</a>
                <a onClick={() => handleScrollToId('experience')} className="hover:text-indigo-600 py-1 cursor-pointer">Experience</a>
                <a onClick={() => handleScrollToId('skills')} className="hover:text-indigo-600 py-1 cursor-pointer">Skills Matrix</a>
                <a onClick={() => handleScrollToId('projects')} className="hover:text-indigo-600 py-1 cursor-pointer">Projects</a>
                <a onClick={() => handleScrollToId('certifications')} className="hover:text-indigo-600 py-1 cursor-pointer">Certifications</a>
                <a onClick={() => handleScrollToId('contact')} className="hover:text-indigo-600 py-1 cursor-pointer">Contact</a>
                
                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-800 flex items-center gap-1 text-xs">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-slate-800 flex items-center gap-1 text-xs">
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Primary Container Wrap */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 space-y-16 md:space-y-28">

        {/* Section 1: Hero Introduction Block */}
        <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Hero text panel (Left-sides) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs text-indigo-700 font-semibold rounded-full select-none">
                <Atom className="h-3 w-3 animate-spin" />
                <span>VIT Vellore Undergrad</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-sans leading-tight">
                Computer Science & <span className="text-indigo-600 block sm:inline">Software Engineering</span>.
              </h1>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Hi, I am <span className="text-slate-900 font-bold">Abhinav Jain</span>, a Computer Science and Engineering student at Vellore Institute of Technology. I build state-driven reactive web platforms, solve problems in C++ and Data Structures, and manage optimized budgets as the Head of Finance for <span className="text-indigo-600 font-semibold hover:underline">IEEE-PELS VIT</span>. Explore my selected engineering work and lead-roles below!
              </p>
            </motion.div>

            {/* Micro Fast-Facts Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs flex items-center gap-3">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">Academic GPA</span>
                  <span className="text-sm font-bold text-slate-800">8.3 / 10.0</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs flex items-center gap-3">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">IEEE PELS Role</span>
                  <span className="text-xs font-bold text-slate-800">Head of Finance</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="p-2 bg-sky-50 text-slate-600 rounded-lg shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">Campus Loc</span>
                  <span className="text-xs font-bold text-slate-800">VIT Vellore, IN</span>
                </div>
              </div>
            </motion.div>

            {/* Action CTAs Buttons */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              <button 
                onClick={() => handleScrollToId('projects')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3 px-5 rounded-lg shadow-sm hover:shadow-indigo-500/10 transition flex items-center gap-2 cursor-pointer"
              >
                <Code2 className="h-4 w-4" />
                View Selected Work
              </button>
              <button 
                onClick={() => handleScrollToId('contact')}
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold text-xs py-3 px-5 rounded-lg transition flex items-center gap-1.5 cursor-pointer"
              >
                Get In Touch
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </motion.div>
          </div>

          {/* Interactive Hero Stats card decoration (Right-side column) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative bg-[#ffffff] p-6 rounded-2xl border border-slate-200 shadow-md">
              <div className="absolute top-4 right-4 flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              </div>
              
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3.5 mb-6">
                <div className="w-7 h-7 bg-indigo-50 border border-indigo-100 rounded-md flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Operational Dashboard</h4>
                  <p className="text-[10px] text-slate-400 font-mono">Abhinav Jain / CSE Academic Profile</p>
                </div>
              </div>

              {/* Progress track GPA */}
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-1.5">
                    <span>VIT Academic standing (GPA)</span>
                    <span className="text-indigo-600 font-bold text-[13px]">8.3 / 10.0</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                    <div className="bg-indigo-600 h-full rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>

                {/* Core Code languages tags */}
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase mb-2">Prime Specializations</span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-1 bg-slate-100 text-[10px] text-slate-600 font-bold rounded-sm uppercase tracking-wide border border-slate-200">C++</span>
                    <span className="px-2 py-1 bg-slate-100 text-[10px] text-slate-600 font-bold rounded-sm uppercase tracking-wide border border-slate-200">Data Structures</span>
                    <span className="px-2 py-1 bg-slate-100 text-[10px] text-slate-600 font-bold rounded-sm uppercase tracking-wide border border-slate-200">DBMA (SQL)</span>
                    <span className="px-2 py-1 bg-slate-100 text-[10px] text-slate-600 font-bold rounded-sm uppercase tracking-wide border border-slate-200">System Design</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </section>

        {/* Section 2: About & Academics */}
        <section id="about" className="space-y-8">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-sans">About & Academics</h2>
            <p className="text-xs text-slate-400 font-mono mt-1">Academic profile and personal overview</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-12 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {PERSONAL_INFO.about}
              </p>
            </div>

            {/* B.Tech Details Card */}
            <div className="lg:col-span-12 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl shrink-0">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-950 text-base tracking-tight">{PERSONAL_INFO.course}</h3>
                  <p className="text-xs text-slate-500 font-semibold">{PERSONAL_INFO.institution}</p>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono mt-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <span>Graduation Target: 2024 – 2028</span>
                  </div>
                </div>
              </div>
              
              <div className="shrink-0 bg-slate-50 border border-slate-100 px-5 py-3 rounded-xl flex flex-col items-center justify-center">
                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Academic GPA</span>
                <span className="text-xl font-black text-indigo-600 font-mono">8.3 / 10.0</span>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Leadership Timeline & Career History */}
        <section id="experience" className="space-y-8">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-sans">Leadership & Experience</h2>
            <p className="text-xs text-slate-400 font-mono mt-1">Timeline tracker for VIT Vellore & IEEE groups</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Timeline Column (Left block) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Interactive Experience Timeline Wrapper */}
              <div className="relative border-l border-slate-300 pl-6 ml-3 space-y-8">
                
                {/* Map through Experiences with high-end styles */}
                {EXPERIENCES.map((exp, expIdx) => (
                  <div key={exp.id} className="relative">
                    {/* Circle Node bullet */}
                    <span className="absolute -left-[35px] top-1.5 flex h-4 w-4 rounded-full border bg-white border-indigo-600 items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
                    </span>

                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm duration-350 hover:shadow-md">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3.5 border-b border-slate-50 pb-2">
                        <div>
                          <h3 className="font-bold text-slate-900 text-sm">{exp.role}</h3>
                          <p className="text-xs text-slate-500 font-semibold">{exp.organization}</p>
                        </div>
                        <span className="text-[10px] font-mono font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 border border-indigo-100 rounded">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2 text-xs text-slate-600 leading-relaxed font-normal">
                        {exp.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex gap-2">
                            <ChevronRight className="h-3 w-3 shrink-0 text-indigo-500 mt-1" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* Volunteer & Campus Events (Right Columns) */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest block mb-1">Volunteer &amp; Fest Records</h3>
              
              {VOLUNTEER_ROLES.map((vol) => (
                <div key={vol.id} className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex justify-between items-start gap-1">
                      <span className="text-[10px] font-mono shrink-0 font-extrabold pr-2 text-emerald-600 uppercase tracking-wide">
                        {vol.date}
                      </span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">
                        {vol.event}
                      </span>
                    </div>
                    <div className="font-bold text-slate-800 text-xs mt-2">{vol.role}</div>
                    <span className="text-[11px] text-slate-400 mt-0.5 block">{vol.organization}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed italic border-t border-slate-100/60 pt-2.5">
                    &quot;{vol.description}&quot;
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 5: Dynamic Skills Matrix */}
        <section id="skills" className="space-y-8">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-sans">Core Skill Matrix</h2>
            <p className="text-xs text-slate-400 font-mono mt-1">Specific performance indexes by category</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Category Select Toggles (Left Column) */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2 px-1">Choose Catalog Category</span>
              {SKILL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedSkillCategory(cat.id)}
                  id={`skill-cat-${cat.id}`}
                  className={`text-left p-4 rounded-xl border font-sans transition-all flex items-center justify-between cursor-pointer ${
                    selectedSkillCategory === cat.id
                      ? 'bg-white border-indigo-600 shadow-sm font-semibold text-slate-900'
                      : 'bg-transparent border-slate-200 hover:bg-slate-100/60 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold">{cat.name}</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-all opacity-40 ${selectedSkillCategory === cat.id ? 'translate-x-1' : ''}`} />
                </button>
              ))}
            </div>

            {/* Dynamic Skills Grid (Right Columns) */}
            <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm min-h-[360px]">
              {SKILL_CATEGORIES.map((cat) => {
                if (cat.id !== selectedSkillCategory) return null;
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        {cat.name} Skills Catalog
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">Specific benchmarks detailing scope and capability benchmarks.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cat.skills.map((skill) => (
                        <div key={skill.name} className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-2.5">
                          <div className="flex justify-between items-start">
                            <span className="font-semibold text-xs text-slate-800">{skill.name}</span>
                          </div>
                          {skill.description && (
                            <p className="text-[11px] text-slate-500 leading-normal font-medium">
                              {skill.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Section 6: Selected Projects (Static Reference cards) */}
        <section id="projects" className="space-y-8">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-sans">Web &amp; Engineering Projects</h2>
            <p className="text-xs text-slate-400 font-mono mt-1">Coded applications and live releases</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md duration-300">
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-50 pb-2.5">
                    <span className="text-[10px] bg-indigo-50 border border-indigo-100 text-indigo-700 font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                      {proj.category === 'web' ? 'Web Solution' : 'Systems Eng'}
                    </span>
                    <div className="flex gap-2">
                      {proj.link && (
                        <a href={proj.link} className="text-indigo-600 hover:text-indigo-800 flex items-center gap-0.5 text-xs font-bold font-mono" title="Live Port" target="_blank" rel="noreferrer">
                          Live Port <ExternalLink className="h-3 w-3 inline" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">{proj.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{proj.description}</p>
                  
                  {/* Scope bullets */}
                  <ul className="space-y-1.5 text-[11px] text-slate-500 font-normal leading-relaxed">
                    {proj.details.slice(0, 3).map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {proj.technologies.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-white border border-slate-200 text-slate-500 font-mono text-[9px] font-bold rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Certifications / Memberships */}
        <section id="certifications" className="space-y-8">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-sans">Certifications / Memberships</h2>
            <p className="text-xs text-slate-400 font-mono mt-1">Official credentials and professional affiliations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4 hover:shadow-md transition-all duration-300">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider font-mono">
                  Membership
                </span>
                <h3 className="font-bold text-slate-900 text-sm">IEEE Student Member</h3>
                <p className="text-xs text-slate-500 leading-normal font-medium">
                  Valid student member affiliation supporting global engineering workshops, publications, and collaborative resources.
                </p>
                <div className="pt-2">
                  <a 
                    href="https://shorturl.at/Ck3pf" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-all font-mono"
                  >
                    View Credential <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Contact & Connect */}
        <section id="contact" className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/60 shadow-sm">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 font-sans">Contact &amp; Connect</h2>
            <p className="text-xs text-slate-400 font-mono mt-1">Get in touch through direct channels</p>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-3xl">
            I am interested in full-stack software engineering projects, database implementations, and IEEE activities. Please feel free to reach out via any of my official channels listed below.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            
            {/* Email Card */}
            <div className="p-5 bg-slate-50/70 border border-slate-100 rounded-2xl flex flex-col justify-between hover:border-indigo-200 hover:bg-white transition-all duration-300 group shadow-xs">
              <div className="space-y-3">
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl shrink-0 w-max group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Primary Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs font-semibold text-slate-800 hover:underline hover:text-indigo-600 break-all mt-1 block">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 bg-slate-50/70 border border-slate-100 rounded-2xl flex flex-col justify-between hover:border-emerald-200 hover:bg-white transition-all duration-300 group shadow-xs">
              <div className="space-y-3">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl shrink-0 w-max group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mobile Phone</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs font-semibold text-slate-800 hover:underline hover:text-emerald-600 mt-1 block">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-5 bg-slate-50/70 border border-slate-100 rounded-2xl flex flex-col justify-between hover:border-blue-200 hover:bg-white transition-all duration-300 group shadow-xs">
              <div className="space-y-3">
                <div className="p-2.5 bg-blue-50 text-[#0a66c2] rounded-xl shrink-0 w-max group-hover:bg-[#0a66c2] group-hover:text-white transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">LinkedIn Profile</span>
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-xs font-semibold text-slate-800 hover:underline hover:text-blue-600 break-all mt-1 block">
                    abhinav-jain-a686b5309
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Modern minimal footer branding */}
      <footer className="bg-slate-900 text-slate-200 mt-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            <p>&copy; {new Date().getFullYear()} Abhinav Jain. All Rights Reserved.</p>
            <p className="text-[10px] text-slate-500 font-mono mt-0.5">VIT Vellore Undergrad / IEEE-PELS Finance Advisor</p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-semibold">
            <a onClick={() => handleScrollToId('about')} className="hover:text-white cursor-pointer transition">Academics</a>
            <a onClick={() => handleScrollToId('experience')} className="hover:text-white cursor-pointer transition">Experience</a>
            <a onClick={() => handleScrollToId('certifications')} className="hover:text-white cursor-pointer transition">Certifications</a>
            <a onClick={() => handleScrollToId('contact')} className="hover:text-white cursor-pointer transition">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
