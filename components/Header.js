import Image from 'next/image';

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
            <li className="m-2 ">Accueil</li>
            <li className="m-2 ">Menu</li>
            <li className="m-2 ">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
