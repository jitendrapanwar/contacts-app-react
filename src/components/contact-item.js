import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

function getFullName(contact) {
  return `${contact.first} ${contact.last}`
}

const ContactItem = (props) => (
  <React.Fragment>
    <ListItemAvatar>
      <Avatar src={props.contact.picture.thumbnail}></Avatar>
    </ListItemAvatar>
    <ListItemText primary="" secondary={getFullName(props.contact.name)} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Comments">
        <InfoIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </React.Fragment>
)

export default ContactItem;