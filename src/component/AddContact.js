import React from 'react'
import { useState } from 'react'
import ShowContact from './ShowContact';
import { useEffect } from 'react';

export default function AddContact({ addName, updateindex,  editdata, contacts, editcontact, deletecontact  }) {
    const [contact, setcontact] = useState("");
    const [phone, setphone] = useState("");
    
    useEffect(()=>{
        if(editdata){
            setcontact(editdata.text);
            setphone(editdata.phone);
        }
    }, [editdata]);

    const handlesubmit = (e) => {
        e.preventDefault();
        if(editdata !== null){
            updateindex({
                text : contact,
                phone : phone
            });
        }else{
            addName({ text: contact, phone })
        }
      
        setcontact("");
        setphone("");
    }
    

    return (
        <div>
            <div className="container">
                <h1>Contact Manager</h1>
                <div className="content">
                    <div className="form-container">
                        <h2>Add Contact</h2>
                        <form id="contact-form" onSubmit={handlesubmit}>
                            <input type="text" id="name" onChange={(e) => setcontact(e.target.value)} value={contact} placeholder="Name" required/>
                            <input type="text" onChange={(e) => setphone(e.target.value)} value={phone} id="phone" placeholder="Phone" required/>
                            <button type="submit">{editdata ? "Update" : "Add"}</button>
                        </form>
                    </div>
                <ShowContact contacts={contacts} editcontact={editcontact} deletecontact={deletecontact}/>
                </div>
                
            </div>
            
        </div>
    )
}
