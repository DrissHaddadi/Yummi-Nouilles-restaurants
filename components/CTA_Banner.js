import CTA_Button from './CTA_Button';

const CTA_Banner = () => {
  return (
    <div className="w-full h-52 bg-yummy-red flex flex-col items-center justify-center">
      <div className="text-slate-50 py-2">Commandez dès maintenant !</div>
      <div className="py-2">
        <CTA_Button />
      </div>
    </div>
  );
};

export default CTA_Banner;
