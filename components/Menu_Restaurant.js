import Image from 'next/image';

import '../styles/font.css';

const Menu_Restaurant = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-16">
      <div>
        <div className="Header">menu</div>
        <div className="body">
          Nos menus sont <span className="text-yummy-red">communs</span> à tous
          nos restaurants
        </div>
        <Image
          src="/../public/images/menu.png"
          width={1129}
          height={1598}
          alt="menu"
        />
      </div>
    </div>
  );
};

export default Menu_Restaurant;
