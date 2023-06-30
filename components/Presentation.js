import Image from 'next/image';
import '../styles/font.css';
import CTA_Button from './CTA_Button';

const Presentation = () => {
  return (
    <div className="container mx-auto mt-16 mb-16">
      <div className=" flex flex-col md:flex-row justify-center">
        <div className="flex flex-col justify-between items-center md:items-start md:pr-8">
          <h1 className="Header mb-4">Yummi Nouilles</h1>
          <p
            className="BodyHighlight mb-4 w-2/3 md:w-auto"
            style={{ textAlign: 'center' }}
          >
            Les nouilles les plus <span className="text-yummy-red">yummy</span>{' '}
            de tout Paris
          </p>
          <div className="">
            <CTA_Button />
          </div>
        </div>
        <div className="md:pl-8 mt-8 md:mt-0 w-3/5 md:w-auto flex self-center">
          <Image
            src="/../public/images/logo.png"
            width={304}
            height={304}
            alt="Picture of the logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
