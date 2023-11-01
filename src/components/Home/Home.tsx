import { useState } from 'react';

import Intro from '../Intro/Intro';
import Questions from '../Questions/Questions';
import './Home.scss';

function Home() {
  const [simulation, setSimulation] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [finalNote, setFinalNote] = useState(40);
  const [passengerBonus, setPassengerBonus] = useState(10);
  const [rate, setRate] = useState(10);

  function handlePassengerSelect(bonus: number) {
    setPassengerBonus(bonus);
  }

  //   function handleRateCalculation(note: number, bonus: number) {
  //     if (note <= 10) {
  //       setRate(3 + bonus);
  //     } else if (note > 10 && note <= 15) {
  //       setRate(2.74 + bonus);
  //     } else if (note > 15 && note <= 25) {
  //       setRate(2.52 + bonus);
  //     } else if (note > 25 && note <= 33) {
  //       setRate(2.1 + bonus);
  //     } else if (note > 33) {
  //       setRate(1.85 + bonus);
  //     } else {
  //       setRate(100);
  //     }
  //   }

  return (
    <div>
      <header className={simulation === false ? 'visible' : 'hidden'}>
        <Intro setSimulation={setSimulation} />
      </header>

      <main className={simulation === true ? 'visible' : 'hidden'}>
        <Questions
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setFinalNote={setFinalNote}
        />
      </main>

      <div>Note Finale : {finalNote}</div>
    </div>
  );
}

export default Home;
