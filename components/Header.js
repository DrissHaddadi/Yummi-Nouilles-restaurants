import Image from 'next/image';
import '../styles/font.css';

const Header = () => {
  return (
    <header>
      <div className="w-full h-32 flex flex-row space-x-4 text-2xl">
        <div className="m-4">
          <Image
            src="/../public/images/logo.png"
            width={72}
            height={72}
            alt="Picture of the logo"
          />
        </div>
        <nav>
          <ul className="m-2 flex flex-row ">
            <li className="m-2 Title1 ">Accueil</li>
            <li className="m-2 Title1">Menu</li>
            <li className="m-2 Title1">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
