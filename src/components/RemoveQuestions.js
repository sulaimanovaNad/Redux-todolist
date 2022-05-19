import React from 'react'
import { removeQuestion } from '../store/actions';
import { useDispatch } from 'react-redux'

export default function RemoveQuestions({id}) {
    const dispatch = useDispatch();
    const handleRemoveQuestion = () => {
        dispatch(removeQuestion(id));
    }

  return (
    <div>
        <button 
        className='question-btn'
        onClick={handleRemoveQuestion}>
          Remove</button>
    </div>
  )
}
