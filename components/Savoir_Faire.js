import '../styles/font.css';

const Savoir_Faire = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-16">
      <div className="relative mb-4">
        <span className="Title1">Notre savoir-faire</span>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-yummy-red"></span>
      </div>
      <div
        style={{ width: '1158px', height: '100px' }}
        className="flex flex-col items-center justify-center"
      >
        <p className="Body text-center">
          Depuis près de 10 ans maintenant, nous partageons avec vous les
          meilleures recettes. Nos plats ont tous été conçus, et affinés au fil
          des années et des goûts. Nous vous apportons le meilleur de l’Asie de
          l’Est en plein coeur de Paris. Chaque année, nous reprenons tous nos
          plats pour les améliorer, les modifier et qu’ils vous plaisent
          toujours plus. Nous espérons que vous vous régalerez en dégustant nos
          plats.
        </p>
      </div>
    </div>
  );
};

export default Savoir_Faire;
