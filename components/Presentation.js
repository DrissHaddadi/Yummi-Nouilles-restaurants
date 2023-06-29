import Image from 'next/image';
import '../styles/font.css';
import CTA_Button from './CTA_Button';

const Presentation = () => {
  return (
    <div className="container mx-auto mb-16">
      <div className=" flex flex-col md:flex-row justify-center">
        <div className="flex flex-col px-12 py-10 justify-between">
          <h1 className="Header">Yummi Nouilles</h1>
          <p className="BodyHighlight">
            Les nouilles les plus <span className="text-yummy-red">yummy</span>{' '}
            de tout Paris
          </p>
          <div className="">
            <CTA_Button />
          </div>
        </div>
        <div className="px-12">
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
