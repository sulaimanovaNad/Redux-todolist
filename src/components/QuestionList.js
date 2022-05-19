import React from 'react'
import { useSelector } from 'react-redux'
import CompleteQuestions from './CompleteQuestions';
import EditQuestions from './EditQuestions';
import RemoveQuestions from './RemoveQuestions';

export default function QuestionList() {
  const questions = useSelector(store => store.questions);

  return (
    <div>
      {questions.map(q => (
        <div className='question-list' key={q.id}>{q.name}
          <div className='question-buttons'>
            <RemoveQuestions id={q.id} />
            <CompleteQuestions id={q.id} complete={q.complete} />
            <EditQuestions id={q.id} name={q.name} />
          </div>
        </div>
      ))}
    </div>
  )
}
