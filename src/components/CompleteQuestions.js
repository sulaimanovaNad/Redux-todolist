import React from 'react'
import { completeQuestion } from '../store/actions';
import { useDispatch } from 'react-redux'


export default function CompleteQuestions({id,complete}) {
    const dispatch = useDispatch();
    const handleStatusQuestion = () => {
        dispatch(completeQuestion(id))
    }

  return (
    <div>
        <button 
        className='question-btn'
        onClick={handleStatusQuestion}>
          {complete ? 'done' : 'complete'}
        </button>
    </div>
  )
}
