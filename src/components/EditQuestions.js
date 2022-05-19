import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editQuestion } from '../store/actions';

export default function EditQuestions({ id, name, }) {
    const dispatch = useDispatch();
    const [edit, setEditQuesion] = useState(false);
    const [value, setValue] = useState('');
    const handleEditQuestion = () => {
        dispatch (editQuestion(id))
        setEditQuesion(id)
        setValue(name)
    }

    return (
        <div>
            <button className='question-btn' onClick={handleEditQuestion}>Edit</button>
            <div>
                {
                    edit === id ?
                        <div>
                            <input value={value} onChange={(e) => setValue(e.target.value)} />
                        </div> :
                        <div>
                            {name}
                        </div>
                }
            </div>
        </div>
    )
}
