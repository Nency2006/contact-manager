import { useEffect, useState } from 'react';
import AddContact from './component/AddContact';

import './style.css';

function App() {
  const [contacts, setcontacts] = useState([]);
  const [editidex, seteditindex] = useState(null);
  

  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts));
  },[contacts]);

  const addName = (contact) => {
    setcontacts([...contacts, contact])
  }
  
  const updateindex = (contact) => {
    if (editidex !== null) {
        const updatedcontact = [...contacts];
        updatedcontact[editidex] = contact;
        setcontacts(updatedcontact);
        seteditindex(null);
    }
};
  const editcontact = (index) => {
       seteditindex(index);
    };
  const deletecontact = (index) =>{
    setcontacts(contacts.filter((_,i)=>i !== index));
  }
  return (
    <div className="App">

      <AddContact addName={addName} contacts={contacts} updateindex={updateindex} editcontact={editcontact} deletecontact={deletecontact} editdata={editidex !== null ? contacts[editidex] : null} /> 
      
      
    </div>
  );
}

export default App;
