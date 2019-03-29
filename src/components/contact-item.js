import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';

const ContactItem = (props) => (
  <div>
    <ListItemText primary={props.contact.name.first} />
  </div>
)

export default ContactItem;