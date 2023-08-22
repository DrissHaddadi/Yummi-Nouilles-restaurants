import Image from 'next/image';
import '../styles/font.css';

const Adresses_Graphical = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-16">
      <div className="mb-8 relative">
        <span className="Title1">Nos adresses</span>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-yummy-red"></span>
      </div>
      <div className=" flex flex-col md:flex-row ">
        <div className="mx-14 mb-8">
          <Image
            className="mb-4"
            src={'/images/Facade_Yummy_Noodle.svg'}
            width={304.78}
            height={216}
            alt="Facade Yummy Noodle"
          />
          <div className="BodyHighlight">Yummy Noodle</div>
          <div className="Body">185 rue de Lancry</div>
          <div className="Body">75010 Paris</div>
        </div>
        <div className="mx-14 mb-8">
          <Image
            className="mb-4"
            src={'/images/facade_You_Noodle_My.svg'}
            width={304.78}
            height={216}
            alt="Facade Yu Noodle My"
          />
          <div className="BodyHighlight">Yu Noodle My</div>
          <div className="Body">350 rue Saint-Guillaume</div>
          <div className="Body">75007 Paris</div>
        </div>
        <div className="mx-14">
          <Image
            className="mb-4"
            src={'/images/Facade_Yummy_Noodle.svg'}
            width={304.78}
            height={216}
            alt="Facade Les Yummy Noodle"
          />
          <div className="BodyHighlight">Les Yummy Noodle</div>
          <div className="Body">280 rue au Maire </div>
          <div className="Body">75003 Paris</div>
        </div>
      </div>
    </div>
  );
};

export default Adresses_Graphical;
