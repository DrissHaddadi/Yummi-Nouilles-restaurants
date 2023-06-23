import Adresses_Graphical from '@/components/Adresses_Graphical';
import CTA_Banner from '@/components/CTA_Banner';
import Contact_Infos from '@/components/Contact_Infos';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Presentation from '@/components/Presentation';
import Reseaux_Sociaux from '@/components/Reseaux_Sociaux';
import Savoir_Faire from '@/components/Savoir_Faire';

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Adresses_Graphical />
      <CTA_Banner />
      <Savoir_Faire />
      <Reseaux_Sociaux />
      <Contact_Infos />
      <Footer />
    </>
  );
}
