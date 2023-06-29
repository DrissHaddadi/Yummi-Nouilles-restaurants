import Image from 'next/image';

const Footer = () => {
  return (
    <div className=" bg-black h-52 flex flex-row justify-center md:justify-end items-center">
      <span className="mx-7">
        <Image
          src="/icons/icon_instagram.svg"
          width={36}
          height={36}
          alt="icon_instagram"
        />
      </span>
      <span className="mx-7">
        <Image
          src="/icons/icon_facebook.svg"
          width={36}
          height={36}
          alt="icon_facebook"
        />
      </span>
      <span className="mx-7">
        <Image
          src="/icons/icon_map.svg"
          width={36}
          height={36}
          alt="icon_map"
        />
      </span>
    </div>
  );
};

export default Footer;
