import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList.jsx'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  console.log("Selected Contact ID: ", selectedContactId)

  if (selectedContactId) {
    return (
      <div>Selected Contact View</div>
    )
  } else {
    return (
      <ContactList setSelectedContactId={setSelectedContactId} />
    )
  }
}

export default App