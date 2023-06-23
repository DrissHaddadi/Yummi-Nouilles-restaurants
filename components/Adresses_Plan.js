import Image from 'next/image';
import '../styles/font.css';

const Adresses_Plan = () => {
  return (
    <div className="container mx-auto  flex flex-row justify-between mb-16">
      <div className="flex flex-col justify-between">
        <div className="Header">Nos adresses</div>
        <div>
          <div className="Title1">Yummi noodle</div>
          <div className="Title2">185 rue de Lancry</div>
          <div className="Title2">75010 Paris</div>
          <div className="Title2">+331 44 33 55 22</div>
          <div className="Title2">Lundi à Dimanche - 12h à 23h</div>
        </div>
        <div>
          <div className="Title1">Yu Noodle My</div>
          <div className="Title2">350 rue Saint-Guillaume</div>
          <div className="Title2">75077 Paris</div>
          <div className="Title2">+331 44 33 55 22</div>
          <div className="Title2">Lundi à Vendredi - 12h à 22h</div>
        </div>
        <div>
          <div className="Title1">Les Yummy Nouilles</div>
          <div className="Title2">208 rue au Maire</div>
          <div className="Title2">75003 Paris</div>
          <div className="Title2">+331 44 33 55 22</div>
          <div className="Title2">Lundi à Dimanche - 12h à 23h</div>
        </div>
      </div>
      <div>
        <Image
          src="/../public/images/capture_map.png"
          width={828}
          height={714}
          alt="capture_map"
        />
      </div>
    </div>
  );
};

export default Adresses_Plan;