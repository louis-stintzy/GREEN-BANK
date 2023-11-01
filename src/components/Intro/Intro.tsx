type IntroProps = {
  setSimulation: React.Dispatch<React.SetStateAction<boolean>>;
};

function Intro({ setSimulation }: IntroProps) {
  return (
    <div>
      <section className="intro">
        <h1 className="intro__title">Prêt Auto</h1>
        <p className="intro__p1">
          Empruntez en toute sérénité pour votre nouvelle voiture tout en
          préservant notre planète. Notre Prêt Auto Écologique vous offre des
          taux avantageux pour un avenir plus vert sur la route
        </p>
        <p className="intro__p2">
          Nous vous proposons un prêt auto écologique à taux avantageux pour
          l’achat de votre voiture neuve ou d’occasion. Vous pouvez emprunter
          jusqu’à 75 000 € sur une durée de 12 à 84 mois. Vous pouvez également
          choisir le montant que vous souhaitez emprunter et la durée de votre
          prêt.
        </p>
        <button type="button" onClick={() => setSimulation(true)}>
          Simuler mon prêt
        </button>
      </section>
    </div>
  );
}

export default Intro;
