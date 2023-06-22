import CTA_Banner from '@/components/CTA_Banner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Menu_Restaurant from '@/components/Menu_Restaurant';

export default function Menu() {
  return (
    <>
      <Header />
      <CTA_Banner />
      <Menu_Restaurant />
      <Contact />
      <Footer />
    </>
  );
}
