import React, { useState } from "react"; 
import ContactRow from './ContactRow.jsx';

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

function ContactList() { 
  const [contacts, setContacts] = useState(dummyContacts);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (id) => {
    const selectedContact = contacts.find(contact => contact.id === id);
    setSelectedContact(selectedContact);
  };

  return ( 
    <div className="select">
      <table className="table">
        <thead>
          <tr>
            <th colSpan="3"><h2>Contact List</h2></th>
          </tr>
        </thead>
        <tbody>
          <tr className="lables">
            <td>NAME</td>
            <td>EMAIL</td>
            <td>PHONE</td>
          </tr>
          {
            contacts.map((contact) => (
              <ContactRow
                key={contact.id}
                contact={contact}
                onClick={handleContactClick}
              />
            ))
          }
        </tbody>
      </table>

      {selectedContact && (
        <div className="select">
          <h2>Selected Contact</h2>
          <div>Name: {selectedContact.name}</div>
          <div>Email: {selectedContact.email}</div>
          <div>Phone: {selectedContact.phone}</div>
        </div>
      )}
    </div>
  ); 
}

export default ContactList;