import * as actions from './actionTypes';

const initialState = {
  questions: [],
  productsFetching: false,
  products:[],

}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.QUESTION_ADD:
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };


    case actions.QUESTION_REMOVE:
      return {
        ...state,
        questions: state.questions.filter(q => action.payload.id !== q.id)
      };

    case actions.QUESTION_COMPLETE:
      const targetQuestion = state.questions.find(q => action.payload.id === q.id)
      targetQuestion.complete = true
      return {
        ...state,
        questions: [...state.questions]
      }
    case actions.QUESTION_EDIT:
      return {
        ...state,
        questions: [...state.questions]
      };
    default:
      return state;
  }
}