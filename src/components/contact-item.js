import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';

function getFullName(contact) {
  return `${contact.first} ${contact.last}`
}
const ContactItem = (props) => (
  <div>
    <ListItemText primary={getFullName(props.contact.name)} />
  </div>
)

export default ContactItem;