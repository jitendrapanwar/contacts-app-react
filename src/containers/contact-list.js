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
  
	render() {
		return (
      <div>
			<div> Contact items </div>
      <div> 
        <List>
        {this.props.data.contacts.map((data) => {
          return <ListItem key={data.login.uuid} button>
                    <ContactItem  contact={data} />
                  </ListItem>          
        })}
        </List>
        </div>
    
        </div>
		)
	}
}

const mapStateToProps = (state) => ({
  data: state,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts: () => {
      dispatch(fetchContacts())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);