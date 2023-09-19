import Image from "next/image";
import "../styles/font.css";

const Adresses_Plan = () => {
  return (
    <div className="container mx-auto md:mx-8 flex flex-row justify-between mb-16">
      <div className="flex flex-col items-center md:items-start justify-between w-full md:w-auto">
        <div className="Header mb-4 md:mb-0">Nos adresses</div>
        <div className="flex flex-col items-center md:items-start justify-between mb-4 md:mb-0">
          <div className="Title1">Yummi noodle</div>
          <div className="Title2">185 rue de Lancry</div>
          <div className="Title2">75010 Paris</div>
          <div className="Title2">+331 44 33 55 22</div>
          <div className="Title2">Lundi à Dimanche - 12h à 23h</div>
        </div>
        <div className="flex flex-col items-center md:items-start justify-between mb-4 md:mb-0">
          <div className="Title1">Yu Noodle My</div>
          <div className="Title2">350 rue Saint-Guillaume</div>
          <div className="Title2">75077 Paris</div>
          <div className="Title2">+331 44 33 55 22</div>
          <div className="Title2">Lundi à Vendredi - 12h à 22h</div>
        </div>
        <div className="flex flex-col items-center md:items-start justify-between">
          <div className="Title1">Les Yummy Nouilles</div>
          <div className="Title2">208 rue au Maire</div>
          <div className="Title2">75003 Paris</div>
          <div className="Title2">+331 44 33 55 22</div>
          <div className="Title2">Lundi à Dimanche - 12h à 23h</div>
        </div>
      </div>
      <div>
        <Image
          className="hidden md:block"
          src={"/images/Map.svg"}
          width={828}
          height={714}
          alt="capture_map"
        />
      </div>
    </div>
  );
};

export default Adresses_Plan;
