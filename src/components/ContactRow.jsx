import React from "react"; 

function ContactRow({ contact, onClick }) { 
  return ( 
    <tr onClick={() => onClick(contact.id)}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  ); 
}

export default ContactRow;