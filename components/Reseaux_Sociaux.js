import Image from 'next/image';
import '../styles/font.css';

const Reseaux_Sociaux = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mb-16">
      <div className="relative mb-9">
        <span className="Title1">Retrouvez-nous sur les réseaux sociaux</span>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-yummy-red"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {' '}
        <div>
          {' '}
          <Image
            src={'/images/reseau_social_yummy_1.svg'}
            width={248}
            height={248}
            alt="Image Réseaux Sociaux 1"
          />
        </div>
        <div>
          {' '}
          <Image
            src={'/images/reseau_social_yummy_2.svg'}
            width={248}
            height={248}
            alt="Image Réseaux Sociaux 2"
          />
        </div>
        <div>
          {' '}
          <Image
            src={'/images/reseau_social_yummy_3.svg'}
            width={248}
            height={248}
            alt="Image Réseaux Sociaux 3"
          />
        </div>
        <div>
          {' '}
          <Image
            src={'/images/reseau_social_yummy_4.svg'}
            width={248}
            height={248}
            alt="Image Réseaux Sociaux 4"
          />
        </div>
        <div>
          {' '}
          <Image
            src={'/images/reseau_social_yummy_5.svg'}
            width={248}
            height={248}
            alt="Image Réseaux Sociaux 5"
          />
        </div>
        <div>
          {' '}
          <Image
            src={'/images/reseau_social_yummy_6.svg'}
            width={248}
            height={248}
            alt="Image Réseaux Sociaux 6"
          />
        </div>
      </div>
    </div>
  );
};

export default Reseaux_Sociaux;
