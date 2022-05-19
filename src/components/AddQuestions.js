import React from 'react'
import { addQuestion } from '../store/actions';
import { useDispatch } from 'react-redux'


export default function AddQuestions({question,newQuestion, setQuestion}) {
    const dispatch = useDispatch();

    const handleQuestionChange = (e) => {
      setQuestion(e.target.value)
  }
    const handleAddQuestion = () => {
        dispatch (addQuestion(newQuestion))
        setQuestion('')
    }

  return (
    <div className='question-box'>
      <input className='question-input' type='text' value={question} onChange= {handleQuestionChange}/>
      <button className='question-btn' onClick={handleAddQuestion}>Add ToDo</button>
    </div>
  )
}
