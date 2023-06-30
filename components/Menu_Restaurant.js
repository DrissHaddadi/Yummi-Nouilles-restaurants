import Image from 'next/image';
import '../styles/font.css';

const Menu_Restaurant = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-16">
      <div>
        <div className="Header flex justify-center md:justify-start">menu</div>
        <div className="Body hidden md:block">
          Nos menus sont <span className="text-yummy-red">communs</span> à tous
          nos restaurants
        </div>
        <Image
          className="hidden md:block"
          src="/../public/images/menu.png"
          width={1129}
          height={1598}
          alt="menu"
        />
        <Image
          className=" md:hidden"
          src="/../public/images/menu_mobile.png"
          width={309}
          height={535}
          alt="menu_mobile"
        />
      </div>
    </div>
  );
};

export default Menu_Restaurant;
