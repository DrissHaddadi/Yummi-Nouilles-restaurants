import Image from 'next/image';

const Adresses_Graphical = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-9">Nos Adresses</div>
      <div className="w-full  flex flex-row justify-evenly">
        <div>
          <Image
            src="/../public/images/Facade_Yummy_Nouille.png"
            width={304.78}
            height={216}
            alt="Facade Yummy Noodle"
          />
          <div>Yummy Noodle</div>
          <div>185 rue de Lancry</div>
          <div>75010 Paris</div>
        </div>
        <div>
          <Image
            src="/../public/images/Facade_Yu_Noodle_My.png"
            width={304.78}
            height={216}
            alt="Facade Yu Noodle My"
          />
          <div>Yu Noodle My</div>
          <div>350 rue Saint-Guillaume</div>
          <div>75007 Paris</div>
        </div>
        <div>
          <Image
            src="/../public/images/Facade_Les_Yummy_Noodle.png"
            width={304.78}
            height={216}
            alt="Facade Les Yummy Noodle"
          />
          <div>Les Yummy Noodle</div>
          <div>280 rue au Maire </div>
          <div>75003 Paris</div>
        </div>
      </div>
    </div>
  );
};

export default Adresses_Graphical;
