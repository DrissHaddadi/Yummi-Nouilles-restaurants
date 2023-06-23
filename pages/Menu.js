import CTA_Banner from '@/components/CTA_Banner';
import Contact_Infos from '@/components/Contact_Infos';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Menu_Restaurant from '@/components/Menu_Restaurant';

export default function Menu() {
  return (
    <>
      <Header />
      <CTA_Banner />
      <Menu_Restaurant />
      <Contact_Infos />
      <Footer />
    </>
  );
}
