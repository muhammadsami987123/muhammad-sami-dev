import Hero from '@/components/Hero';
import About from '@/app/About/page';
import Projects from '@/app/Projects/page';
import Skills from '@/app/Skills/page';
import Contact from '@/app/Contact/page';
import HackathonVictories from '@/components/HackathonVictories';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import PortfolioAgent from '@/components/PortfolioAgent';
import Startups from '@/components/Startups';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <HackathonVictories />
      <Projects />
      <Skills />
      <Startups />
      <Testimonials />
      <FAQ />
      <Contact />
      <PortfolioAgent />
    </main>
  );
}