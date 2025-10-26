import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import StarfieldBackground from '@/components/ParticleBackground';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxStars from '@/components/ParallaxStars';
import FloatingRocket from '@/components/FloatingRocket';

function App() {
  return (
    <ParallaxProvider>
      <>
        <Helmet>
          <title>Vikrant Mishra - System Administrator & DevOps Engineer</title>
          <meta
            name="description"
            content="Deep Space Portfolio of Vikrant Mishra, a System Administrator and DevOps professional specializing in AWS, automation, and IT infrastructure."
          />
        </Helmet>
        <div className="min-h-screen bg-deep-space text-white relative overflow-x-hidden">
          {/* Original starfield */}
          <StarfieldBackground />
          {/* New parallax stars for subtle motion */}
          <ParallaxStars />
          {/* Navbar */}
          <Navbar />
          {/* Floating rocket animation */}
          <FloatingRocket />
          <main className="content-layer">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Resume />
            <Contact />
          </main>
          <Toaster />
        </div>
      </>
    </ParallaxProvider>
  );
}

export default App;
