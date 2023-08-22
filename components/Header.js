import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../styles/font.css';

const Header = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');
  const [windowWidth, setWindowWidth] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setActiveLink(router.pathname);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [router.pathname]);

  const isMobile = windowWidth < 768; // Adjust the breakpoint as needed

  return (
    <header>
      <div className="container mx-auto mb-16">
        <div className="flex flex-row justify-between ">
          <div className="flex flex-row content-center">
            <div className="m-4">
              <Image
                src={'/images/Logo_S.svg'}
                width={72}
                height={72}
                alt="Picture of the logo"
              />
            </div>
            {!isMobile && (
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
            )}
          </div>
          {isMobile && (
            <div className=" flex flex-col justify-center">
              <button
                className=" m-4 flex items-center justify-end"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Image
                  src={
                    showMobileMenu
                      ? 'icons/icon_cross.svg'
                      : 'icons/icon_hamburger.svg'
                  }
                  width={30}
                  height={30}
                  alt={showMobileMenu ? 'close' : 'logo'}
                  className="focus:border-none active:border-none"
                />
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        {showMobileMenu && (
          <nav className=" w-screen flex items-center justify-center bg-white py-4 shadow-lg">
            <ul className="  flex flex-col content-center">
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
        )}
      </div>
    </header>
  );
};

export default Header;
