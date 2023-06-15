import Image from 'next/image';

const Presentation = () => {
  return (
    <div className="h-96 my-20">
      <div className=" flex flex-row justify-center">
        <div className="flex flex-col px-12 py-10 justify-between">
          <h1 className="text-7xl mb-3 font-bold">Yummi Nouilles</h1>
          <p className="text-xl font-bold ">
            Les nouilles les plus yummy de tout Paris
          </p>
          <p className="text-2xl font-bold">click & collect</p>
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
