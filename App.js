import React, {useState,useEffect} from "react";

import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from './components/ContactList';
import { uuid } from "uuidv4";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';




function App() {
  const LOCAL_STORAGE_KEY="contacts";2
  
  const [contacts,setContacts] = useState([]);
 
  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id:uuid(),...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=> {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }
      useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts) setContacts(retriveContacts);
      }, []);

      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
      }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact render={(props)=>(
            <ContactList {...props} contacts={contacts} getContactId={removeContactHandler}/>
            )}
          />
          <Route path="/add" component={(props)=>(
            <AddContact addContactHandler={addContactHandler}/>
            )}
          />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
