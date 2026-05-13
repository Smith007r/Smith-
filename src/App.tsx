/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  Briefcase, 
  Newspaper, 
  GraduationCap, 
  X, 
  ChevronRight,
  Wallet,
  Mail,
  Github,
  Menu,
  Shield,
  Cpu,
  Layers,
  Zap,
  Play,
  Video
} from 'lucide-react';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden bg-black font-sans scroll-smooth">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full p-6 md:px-12 flex justify-between items-center z-[100] bg-black/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#a855f7] flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <span className="text-white font-display font-bold text-lg">V</span>
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white">VERSE</span>
        </div>
        
        <a 
          href="http://hub.vgdh.io" 
          target="_blank" 
          rel="noopener noreferrer"
          className="glass p-3 rounded-xl hover:bg-white/5 transition-all group"
        >
          <Menu className="w-6 h-6 text-gray-400 group-hover:text-[#a855f7] transition-colors" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-6 pt-20">
        {/* Background Glows */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.2, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[700px] h-[700px] bg-glow-purple blur-[60px] pointer-events-none" 
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container relative z-10 mx-auto text-center max-w-5xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8 text-white"
          >
            A Web3 Ecosystem for <br />
            <span className="text-[#a855f7] drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              Jobs, News, Learning & Earning
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Gain the knowledge, unlock new opportunities, and grow your Web3 career with the industry's leading community and tools.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Crypto News */}
            <a 
              href="https://cryptonews.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group btn-gradient w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-display font-bold text-xl active:scale-95 transition-transform"
            >
              <Newspaper className="w-6 h-6" />
              Crypto News
            </a>

            {/* Web3 Jobs */}
            <button 
              onClick={openPopup}
              className="group btn-gradient w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-display font-bold text-xl active:scale-95 transition-transform cursor-pointer"
            >
              <Briefcase className="w-6 h-6" />
              Web3 Jobs
            </button>

            {/* Web3 Courses */}
            <a 
              href="https://t.me/GetVerse/177601" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group btn-gradient w-full sm:w-auto px-8 py-4 rounded-xl flex items-center justify-center gap-3 font-display font-bold text-xl active:scale-95 transition-transform"
            >
              <GraduationCap className="w-6 h-6" />
              Web3 Courses
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Web3 Section */}
      <section className="relative w-full py-24 px-6 border-t border-white/5 bg-[#050505]">
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-glow-dark blur-[60px] pointer-events-none" 
        />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              What is <span className="text-[#a855f7]">Web3?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Web3 is the next evolution of the internet, where users own their data, identity, and digital assets. It transitions from a centralized web to one built on decentralized networks.
            </p>
            
            <a 
              href="https://www.youtube.com/watch?v=nHhAEkG1y2U" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#a855f7]/50 transition-all text-white font-medium group"
            >
              <div className="w-8 h-8 rounded-full bg-[#a855f7] flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-white ml-0.5" />
              </div>
              Watch 5-Minute Intro to Web3
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AboutCard 
              icon={<Shield className="w-6 h-6 text-[#a855f7]" />}
              title="Ownership"
              description="Users have true ownership of their digital assets and data without relying on central authorities."
            />
            <AboutCard 
              icon={<Cpu className="w-6 h-6 text-[#a855f7]" />}
              title="Decentralized"
              description="Information is stored on distributed networks, making it resistant to censorship and single points of failure."
            />
            <AboutCard 
              icon={<Layers className="w-6 h-6 text-[#a855f7]" />}
              title="Trustless"
              description="Interact directly with others verified by smart contracts, removing the need for third-party intermediaries."
            />
            <AboutCard 
              icon={<Zap className="w-6 h-6 text-[#a855f7]" />}
              title="Permissionless"
              description="Anyone can access and use Web3 protocols regardless of their background or geographic location."
            />
          </div>

          <div className="mt-24 glass p-8 md:p-12 rounded-[2.5rem] border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Video className="w-64 h-64 text-[#a855f7]" />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h4 className="text-[#a855f7] font-display font-bold text-sm uppercase tracking-widest">Web 1.0</h4>
                <h3 className="text-white text-2xl font-bold">The Read-Only Web</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Static pages where users consumed information. One-way communication with no interaction.
                </p>
              </div>
              <div className="space-y-4 border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0 md:px-12">
                <h4 className="text-[#a855f7] font-display font-bold text-sm uppercase tracking-widest">Web 2.0</h4>
                <h3 className="text-white text-2xl font-bold">The Social Web</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Dynamic content and social media. Users create content, but large platforms own the data.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#a855f7] font-display font-bold text-sm uppercase tracking-widest">Web 3.0</h4>
                <h3 className="text-white text-2xl font-bold">The Semantic Web</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Decentralized and intelligent. Users create, consume, and OWN their digital presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Overlay */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-2xl w-full p-8 md:p-12 rounded-[2rem] relative shadow-2xl"
            >
              <button 
                onClick={closePopup}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center text-center mb-10">
                <div className="w-16 h-16 rounded-2xl bg-[#a855f7]/10 flex items-center justify-center mb-6 border border-[#a855f7]/20 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                  <Wallet className="w-8 h-8 text-[#a855f7]" />
                </div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-[#a855f7] mb-4">
                  Before Entering Web3 Jobs
                </h2>
                <p className="text-gray-400 text-lg">Follow these steps to set up your rewards wallet.</p>
              </div>

              <div className="space-y-6 mb-10">
                <Step 
                  number="1" 
                  title="Visit Hub" 
                  description="Go to hub.vgdh.io to access the official Web3 jobs portal." 
                  icon={<ExternalLink className="w-5 h-5" />}
                />
                <Step 
                  number="2" 
                  title="Sign In" 
                  description="Use your Email, GitHub, or Discord account to securely authenticate." 
                  icon={<Github className="w-5 h-5" />}
                />
                <Step 
                  number="3" 
                  title="Rewards Section" 
                  description="Navigate to the /rewards tab in your dashboard." 
                  icon={<ChevronRight className="w-5 h-5" />}
                />
                <Step 
                  number="4" 
                  title="Connect Wallet" 
                  description="Connect your Polygon rewards wallet and sign to confirm ownership." 
                  icon={<Wallet className="w-5 h-5" />}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="http://hub.vgdh.io" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-gradient py-4 rounded-xl flex items-center justify-center gap-2 font-display font-bold text-lg active:scale-95 transition-transform"
                >
                  Continue to Web3 Jobs
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function AboutCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="glass p-8 rounded-3xl group hover:border-[#a855f7]/30 transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-2xl bg-[#a855f7]/10 flex items-center justify-center mb-6 border border-[#a855f7]/20 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="font-display font-bold text-xl text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
}

function Step({ number, title, description, icon }: { number: string, title: string, description: string, icon: React.ReactNode }) {
  return (
    <div className="flex gap-5 group items-start text-left">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#a855f7]/30 transition-colors">
        <span className="font-display font-bold text-[#a855f7]">{number}</span>
      </div>
      <div className="flex-1 pt-0.5">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-display font-bold text-white text-lg">{title}</span>
          <div className="text-gray-500 opacity-50">{icon}</div>
        </div>
        <p className="text-gray-400 text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
