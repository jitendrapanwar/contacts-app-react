import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactItem from '../components/contact-item';
import fetchContacts from '../actions/contacts';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class ContactList extends Component {

  componentDidMount(){
    this.props.fetchContacts(); 
  }

  findContacts = (contact) => {
    const { searchText } = this.props;
    const name = `${contact.name.first} ${contact.name.last}`
    return name.indexOf(searchText) > -1
  }

  showContacts = (contact) => {
    return  <ListItem key={contact.login.uuid} button>
              <ContactItem contact={contact} />
            </ListItem>          
  }

	render() {
		return (
      <div> 
        <List>
          {
            this.props.contacts.contacts
            .filter(this.findContacts)
            .map(this.showContacts)
          }
        </List>
      </div>
		)
	}
}


const mapStateToProps = ( {contacts}) => ({
  contacts,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => {
      dispatch(fetchContacts())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);