import React from 'react';
import { useState } from 'react';
import AddQuestions from './AddQuestions';
import QuestionList from './QuestionList';
import {v4 as uuidv4} from 'uuid';


export default function Question() {
    const [question, setQuestion] = useState('');
    const newQuestion = {
        name: question,
        id: uuidv4(),
        complete: false,
    }
  return (
    <div>
        <AddQuestions question={question}  newQuestion={newQuestion} setQuestion={setQuestion}/>
        <QuestionList question={question}  newQuestion={newQuestion}/>
    </div>
  )
}
