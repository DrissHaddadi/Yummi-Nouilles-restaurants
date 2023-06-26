import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../styles/font.css';

const Header = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <header>
      <div className="container mx-auto pt-4 pl-7 h-32 mb-2">
        <div className="flex flex-row content-center">
          <div className="m-4">
            <Image
              src="/../public/images/logo.png"
              width={72}
              height={72}
              alt="Picture of the logo"
            />
          </div>
          <nav className="flex items-center">
            <ul className="m-2 flex flex-row content-center">
              <li>
                <Link href="/" className="m-2 Title1 inline-flex">
                  <span className="relative">
                    Accueil
                    {activeLink === '/' && (
                      <span className="absolute inset-x-0 bottom-0 h-1 bg-yummy-red"></span>
                    )}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/Menu" className="m-2 Title1 inline-flex">
                  <span className="relative">
                    Menu
                    {activeLink === '/Menu' && (
                      <span className="absolute inset-x-0 bottom-0 h-1 bg-yummy-red"></span>
                    )}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="m-2 Title1 inline-flex">
                  <span className="relative">
                    Contact
                    {activeLink === '/Contact' && (
                      <span className="absolute inset-x-0 bottom-0 h-1 bg-yummy-red"></span>
                    )}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
