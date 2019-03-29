import axios from 'axios';
import contacts from '../data/contacts.json';

export default function fetchContacts(){
  return {
    type: 'FETCH_CONTACTS',
    payload: contacts
  }
  // return (dispatch) => {
  //   axios.get('https://randomuser.me/api/?nat=us&results=10')
  //   .then((response) => {
  //     dispatch({
  //       type: 'FETCH_CONTACTS',
  //       payload: response 
  //   })
  //   })
  //   .catch((error) => {
  //     console.log('error while fetching data from server...')
  //   })
  // }
}