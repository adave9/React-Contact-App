import React from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";


const ContactList = (props) => {

    console.log(props);

    const deleteContactHadler=(id)=>{props.getContactId(id)};

    const renderContactList = props.contacts.map((contact) => {
            return(
                    <ContactCard contact={contact} clickHandler={deleteContactHadler} key={contact.id}></ContactCard>
            );
    });
    return (
        <div class="main">
                <br/><br/>
                <h2>Contact list
                &nbsp;&nbsp;&nbsp;<button className="ui button blue right">Add Contact</button>
                </h2>
                <div className="ui celled list">{renderContactList}</div>
        </div>
    );
};


export default ContactList;