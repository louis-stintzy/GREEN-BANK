import { useState } from 'react';
import './Home.scss';

function Home() {
  const [simululation, setSimulation] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [vehicleNote, setVehicleNote] = useState(10);
  const [energyNote, setEnergyNote] = useState(10);
  const [kmNote, setKmNote] = useState(10);
  const [yearNote, setYearNote] = useState(10);
  const totalNote = vehicleNote + energyNote + kmNote + yearNote;
  const [passengerBonus, setPassengerBonus] = useState(10);
  const [rate, setRate] = useState(10);

  function handleSimulationLaunch() {
    setSimulation(true);
  }

  function handleVehicleSelect(note: number) {
    setVehicleNote(note);
  }

  function handleEnergySelect(note: number) {
    setEnergyNote(note);
  }

  function handleKmSelect(note: number) {
    setKmNote(note);
  }

  function handleYearSelect(note: number) {
    setYearNote(note);
  }

  function handlePassengerSelect(bonus: number) {
    setPassengerBonus(bonus);
  }

  function handleNextQuestion(number: number) {
    setQuestionNumber(number);
  }

  function handleRateCalculation(note: number, bonus: number) {
    if (note <= 10) {
      setRate(3 + bonus);
    } else if (note > 10 && note <= 15) {
      setRate(2.74 + bonus);
    } else if (note > 15 && note <= 25) {
      setRate(2.52 + bonus);
    } else if (note > 25 && note <= 33) {
      setRate(2.1 + bonus);
    } else if (note > 33) {
      setRate(1.85 + bonus);
    } else {
      setRate(100);
    }
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
            onClick={() => handleNextQuestion(1)}
            className="backButton"
          >
            Précédent
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
          <h2>Combien de Km par an effectuerez-vous ?</h2>
          <button
            type="button"
            onClick={() => handleKmSelect(9)}
            className={kmNote === 9 ? 'selected' : ''}
          >
            Moins de 10 000 Km
          </button>
          <button
            type="button"
            onClick={() => handleKmSelect(7)}
            className={kmNote === 7 ? 'selected' : ''}
          >
            Entre 10 et 15 000 Km
          </button>
          <button
            type="button"
            onClick={() => handleKmSelect(5)}
            className={kmNote === 5 ? 'selected' : ''}
          >
            Entre 15 et 20 000 Km
          </button>
          <button
            type="button"
            onClick={() => handleKmSelect(3)}
            className={kmNote === 3 ? 'selected' : ''}
          >
            Entre 20 et 25 000 Km
          </button>
          <button
            type="button"
            onClick={() => handleKmSelect(1)}
            className={kmNote === 1 ? 'selected' : ''}
          >
            Plus de 25 000 Km
          </button>
          <button
            type="button"
            onClick={() => handleNextQuestion(2)}
            className="backButton"
          >
            Précédent
          </button>
          <button
            type="button"
            onClick={() => handleNextQuestion(4)}
            className="nextButton"
          >
            Suivant
          </button>
          <div>{kmNote}</div>
        </section>

        {/* QUESTION 4 */}
        <section className={questionNumber === 4 ? 'visible' : 'hidden'}>
          <h2>De quelle année date la première immatriculation ?</h2>
          <button
            type="button"
            onClick={() => handleYearSelect(1)}
            className={yearNote === 1 ? 'selected' : ''}
          >
            1960 - 1969
          </button>
          <button
            type="button"
            onClick={() => handleYearSelect(2)}
            className={yearNote === 2 ? 'selected' : ''}
          >
            1970 - 1979
          </button>
          <button
            type="button"
            onClick={() => handleYearSelect(3)}
            className={yearNote === 3 ? 'selected' : ''}
          >
            1980 - 1989
          </button>
          <button
            type="button"
            onClick={() => handleYearSelect(4)}
            className={yearNote === 4 ? 'selected' : ''}
          >
            1990 - 1999
          </button>
          <button
            type="button"
            onClick={() => handleYearSelect(5)}
            className={yearNote === 5 ? 'selected' : ''}
          >
            2000 - 2009
          </button>
          <button
            type="button"
            onClick={() => handleYearSelect(7)}
            className={yearNote === 7 ? 'selected' : ''}
          >
            Après 2010
          </button>
          <button
            type="button"
            onClick={() => handleNextQuestion(3)}
            className="backButton"
          >
            Précédent
          </button>

          <button
            type="button"
            onClick={() => handleNextQuestion(5)}
            className="nextButton"
          >
            Suivant
          </button>
          <div>{yearNote}</div>
        </section>
        {/* QUESTION 5 */}
        <section className={questionNumber === 5 ? 'visible' : 'hidden'}>
          <h2>Quel sera le nombre de passagers ?</h2>
          <button
            type="button"
            onClick={() => handlePassengerSelect(0.11)}
            className={passengerBonus === 0.11 ? 'selected' : ''}
          >
            1
          </button>
          <button
            type="button"
            onClick={() => handlePassengerSelect(-0.17)}
            className={passengerBonus === -0.17 ? 'selected' : ''}
          >
            2
          </button>
          <button
            type="button"
            onClick={() => handlePassengerSelect(-0.29)}
            className={passengerBonus === -0.29 ? 'selected' : ''}
          >
            3
          </button>
          <button
            type="button"
            onClick={() => handlePassengerSelect(-0.53)}
            className={passengerBonus === -0.53 ? 'selected' : ''}
          >
            4
          </button>
          <button
            type="button"
            onClick={() => handleNextQuestion(4)}
            className="backButton"
          >
            Précédent
          </button>
          <button
            type="button"
            onClick={() => {
              handleNextQuestion(6);
              handleRateCalculation(totalNote, passengerBonus);
            }}
            className="nextButton"
          >
            Suivant
          </button>
          <div>{passengerBonus}</div>
        </section>
        {/* RESULT */}
        <section className={questionNumber === 6 ? 'visible' : 'hidden'}>
          <h2>Taux d&rsquo;emprunt</h2>
          <div>{rate}</div>
        </section>
      </main>
    </div>
  );
}

export default Home;
