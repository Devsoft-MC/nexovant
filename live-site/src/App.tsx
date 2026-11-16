import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustMetrics from '@/components/sections/TrustMetrics';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import CoreCompetencies from '@/components/sections/CoreCompetencies';
import MissionVisionValues from '@/components/sections/MissionVisionValues';
import Industries from '@/components/sections/Industries';
import Portfolio from '@/components/sections/Portfolio';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import TechStack from '@/components/sections/TechStack';
import Testimonials from '@/components/sections/Testimonials';
import ContactForm from '@/components/sections/ContactForm';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustMetrics />
        <Services />
        <About />
        <CoreCompetencies />
        <MissionVisionValues />
        <Industries />
        <Portfolio />
        <WhyChooseUs />
        <TechStack />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
