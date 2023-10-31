import { useState } from 'react';
import './Home.scss';

function Home() {
  const [simululation, setSimulation] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [vehicleNote, setVehicleNote] = useState(10);
  const [energyNote, setEnergyNote] = useState(10);
  const totalNote = vehicleNote + energyNote;
  function handleSimulationLaunch() {
    setSimulation(true);
  }

  function handleVehicleSelect(note: number) {
    setVehicleNote(note);
  }

  function handleEnergySelect(note: number) {
    setEnergyNote(note);
  }

  function handleNextQuestion(number: number) {
    setQuestionNumber(number);
  }

  return (
    <div>
      {/* INTRO */}
      <header className={simululation === false ? 'visible' : 'hidden'}>
        <h1>Prêt Auto</h1>
        <p>
          Empruntez en toute sérénité pour votre nouvelle voiture tout en
          préservant notre planète. Notre Prêt Auto Écologique vous offre des
          taux avantageux pour un avenir plus vert sur la route
        </p>
        <p>
          Nous vous proposons un prêt auto écologique à taux avantageux pour
          l’achat de votre voiture neuve ou d’occasion. Vous pouvez emprunter
          jusqu’à 75 000 € sur une durée de 12 à 84 mois. Vous pouvez également
          choisir le montant que vous souhaitez emprunter et la durée de votre
          prêt.
        </p>
        <button type="button" onClick={handleSimulationLaunch}>
          Simuler mon prêt
        </button>
      </header>

      {/* QUESTION 1 */}
      <main className={simululation === true ? 'visible' : 'hidden'}>
        <section className={questionNumber === 1 ? 'visible' : 'hidden'}>
          <h2>Choisissez un type de véhicule</h2>
          <button
            type="button"
            onClick={() => handleVehicleSelect(8)}
            className={vehicleNote === 8 ? 'selected' : ''}
          >
            Citadine
          </button>
          <button
            type="button"
            onClick={() => handleVehicleSelect(6)}
            className={vehicleNote === 6 ? 'selected' : ''}
          >
            Cabriolet
          </button>
          <button
            type="button"
            onClick={() => handleVehicleSelect(6.5)}
            className={vehicleNote === 6.5 ? 'selected' : ''}
          >
            Berline
          </button>
          <button
            type="button"
            onClick={() => handleVehicleSelect(4)}
            className={vehicleNote === 4 ? 'selected' : ''}
          >
            SUV / 4x4
          </button>
          <button
            type="button"
            onClick={() => handleNextQuestion(2)}
            className="nextButton"
          >
            Suivant
          </button>
          <div>{vehicleNote}</div>
        </section>

        {/* QUESTION 2 */}
        <section className={questionNumber === 2 ? 'visible' : 'hidden'}>
          <h2>Quelle énergie est utilisée ?</h2>
          <button
            type="button"
            onClick={() => handleEnergySelect(5)}
            className={energyNote === 5 ? 'selected' : ''}
          >
            Essence
          </button>

          <button
            type="button"
            onClick={() => handleEnergySelect(9)}
            className={energyNote === 9 ? 'selected' : ''}
          >
            Electrique
          </button>
          <button
            type="button"
            onClick={() => handleEnergySelect(6)}
            className={energyNote === 6 ? 'selected' : ''}
          >
            Gaz
          </button>
          <button
            type="button"
            onClick={() => handleEnergySelect(4)}
            className={energyNote === 4 ? 'selected' : ''}
          >
            Diesel
          </button>
          <button
            type="button"
            onClick={() => handleEnergySelect(7)}
            className={energyNote === 7 ? 'selected' : ''}
          >
            Hybride
          </button>

          <button
            type="button"
            onClick={() => handleNextQuestion(3)}
            className="nextButton"
          >
            Suivant
          </button>
          <div>{energyNote}</div>
        </section>

        {/* QUESTION 3 */}
        <section className={questionNumber === 3 ? 'visible' : 'hidden'}>
          <h2>Fin</h2>
          <p>
            Veuillez m excuser, le défi n est pas fini, mais en tant que
            débutant, je trouvais utile de pouvoir avoir un retour sur ma
            méthodologie et le code proposé. Ayant d autres impératifs, j ai
            commencé ce jour à 11h30. Merci de votre compréhension et par avance
            de votre retour !
          </p>
          <div>Note totale {totalNote}</div>
        </section>
      </main>
    </div>
  );
}

export default Home;
