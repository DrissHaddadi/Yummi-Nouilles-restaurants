import Adresses_Graphical from '@/components/Adresses_Graphical';
import CTA_Banner from '@/components/CTA_Banner';
import Header from '@/components/Header';
import Presentation from '@/components/Presentation';

export default function Home() {
  return (
    <>
      <Header />
      <Presentation />
      <Adresses_Graphical />
      <CTA_Banner />
    </>
  );
}
