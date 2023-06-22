import Image from 'next/image';
import '../styles/font.css';

const Header = () => {
  return (
    <header>
      <div className="pt-4 pl-7 h-32 ">
        <div className="flex flex-row content-center">
          <div className="m-4">
            <Image
              src="/../public/images/logo.png"
              width={72}
              height={72}
              alt="Picture of the logo"
            />
          </div>
          <nav className="flex  items-center">
            <ul className="m-2 flex flex-row content-center">
              <li className="m-2 Title1 ">Accueil</li>
              <li className="m-2 Title1 ">Menu</li>
              <li className="m-2 Title1 ">Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
