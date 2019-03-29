
const initialState = {
  loading: false,
  contacts: []
}

function contactReducer(state=initialState, action){
  let contacts;
  switch(action.type){
    case 'FETCH_CONTACTS':
      contacts = action.payload.results;
      return {...state, contacts}

    default:
    return state;
  }
}

export default contactReducer;
