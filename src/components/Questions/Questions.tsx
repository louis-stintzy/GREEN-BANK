import { useEffect, useState } from 'react';
import questions from '../../assets/data';

import './Questions.scss';

interface NotesData {
  vehicleNote: number;
  energyNote: number;
  kmNote: number;
  yearNote: number;
}

type QuestionsProps = {
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  setFinalNote: React.Dispatch<React.SetStateAction<number>>;
};

function Questions({
  questionNumber,
  setQuestionNumber,
  setFinalNote,
}: QuestionsProps) {
  const [notes, setNotes] = useState<NotesData>({
    vehicleNote: 10,
    energyNote: 10,
    kmNote: 10,
    yearNote: 10,
  });

  function handleNote(
    noteName: 'vehicleNote' | 'energyNote' | 'kmNote' | 'yearNote',
    noteValue: number
  ) {
    setNotes({
      ...notes,
      [noteName]: noteValue,
    });
  }

  useEffect(() => {
    setFinalNote(
      notes.vehicleNote + notes.energyNote + notes.kmNote + notes.yearNote
    );
  }, [notes, setFinalNote]);

  function handleNextQuestion(number: number) {
    setQuestionNumber(number);
  }

  return (
    <div>
      {questions.map((question) => (
        <section
          key={question.id}
          className={questionNumber === question.id ? 'visible' : 'hidden'}
        >
          <h2>{question.question}</h2>

          {question.answers.map((answer) => (
            <button
              key={answer.id}
              type="button"
              onClick={() => {
                handleNote(question.note, answer.value);
              }}
              className={
                notes[
                  Object.keys(notes)[question.id - 1] as keyof NotesData
                ] === answer.value
                  ? 'selected'
                  : ''
              }
            >
              {answer.answer}
            </button>
          ))}

          {questionNumber !== 1 && (
            <button
              type="button"
              onClick={() => handleNextQuestion(questionNumber - 1)}
              className="backButton"
            >
              Précédent
            </button>
          )}
          <button
            type="button"
            onClick={() => handleNextQuestion(questionNumber + 1)}
            className="nextButton"
          >
            Suivant
          </button>
          <div>
            Note de la question :
            {notes[Object.keys(notes)[question.id - 1] as keyof NotesData]}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Questions;
