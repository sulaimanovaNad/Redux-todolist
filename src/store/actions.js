import * as actions from './actionTypes'; 
        
export const addQuestion = question => ({
  type: actions.QUESTION_ADD,
  payload: question
})
export const removeQuestion = id => ({
  type: actions.QUESTION_REMOVE,
  payload: { id }
})
export const completeQuestion = id => ({
  type: actions.QUESTION_COMPLETE,
  payload: {id},
})
export const editQuestion = id => ({
  type: actions.QUESTION_EDIT,
  payload: {id},
})