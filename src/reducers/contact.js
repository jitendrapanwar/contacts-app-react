
const initialState = {
  loading: false,
  contacts: []
}

function contactReducer(state=initialState, action){
  switch(action.type){
    case 'FETCH_CONTACTS':
      return {...state, contacts: action.payload.results}

    default:
    return state;
  }
}

export default contactReducer;
