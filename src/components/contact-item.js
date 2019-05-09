import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
function getFullName(contact) {
  return `${contact.first} ${contact.last}`
}
const ContactItem = (props) => (
  <div>
    <ListItemText primary={getFullName(props.contact.name)} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Comments">
        <InfoIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </div>
)

export default ContactItem;