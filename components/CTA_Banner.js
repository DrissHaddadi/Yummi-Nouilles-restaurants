import '../styles/font.css';
import CTA_Button from './CTA_Button';

const CTA_Banner = () => {
  return (
    <div className="container mx-auto h-52 bg-yummy-red flex flex-col items-center justify-center mb-16">
      <div className="text-slate-50 BodyHighlight py-2">
        Commandez maintenant !
      </div>
      <div className="py-2">
        <CTA_Button />
      </div>
    </div>
  );
};

export default CTA_Banner;
