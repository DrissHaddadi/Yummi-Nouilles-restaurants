import '../styles/font.css';

const Contact_Infos = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mb-16">
      <div className="relative mb-4">
        <span className="Title1">Contactez-nous</span>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-yummy-red"></span>
      </div>
      <div className="w-4/6 md:w-auto flex flex-col items-center justify-center">
        <p className="Body" style={{ textAlign: 'center' }}>
          Vous souhaitez nous poser une question, nous faire un feedback, ou
          tout simplement nous contacter ?
        </p>
        <p className="Body" style={{ textAlign: 'center' }}>
          Écrivez-nous à <span className="BodyHighlight">yummy@noodles.fr</span>{' '}
          ou appelez nous au{' '}
          <span className="BodyHighlight">01 13 86 23 42</span>
        </p>
      </div>
    </div>
  );
};

export default Contact_Infos;
