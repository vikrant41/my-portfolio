import { Helmet } from 'react-helmet';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import StarfieldBackground from '@/components/ParticleBackground';
import ParallaxStars from '@/components/ParallaxStars';
import FloatingRocket from '@/components/FloatingRocket';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import { Toaster } from 'react-hot-toast';
import { ParallaxProvider } from 'react-scroll-parallax';
import WhatsAppFloat from '@/components/WhatsAppFloat'; // ✅ Added import

function App() {
  return (
    <ParallaxProvider>
      <Helmet>
        <title>Vikrant Mishra - System Administrator & DevOps Engineer</title>
        <meta
          name="description"
          content="Deep Space Portfolio of Vikrant Mishra, a System Administrator and DevOps professional specializing in AWS, automation, and IT infrastructure."
        />
      </Helmet>

      <div className="min-h-screen bg-deep-space text-white relative overflow-x-hidden">
        {/* Background effects */}
        <StarfieldBackground />
        <ParallaxStars />

        {/* Navbar and floating animations */}
        <Navbar />
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

        {/* Toast notifications */}
        <Toaster />

        {/* ✅ WhatsApp Floating Button */}
        <WhatsAppFloat />
      </div>
    </ParallaxProvider>
  );
}

export default App;
