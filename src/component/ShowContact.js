import React from 'react'


export default function ShowContact({ contacts,  editcontact, deletecontact }) {
    

    return (
        <div className="contacts-container">
            <h2>Contact List</h2>
            <input type="text" id="search"  placeholder="Search Contact" />
            <div className="table-container">
                <table id="contacts-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.length === 0 ? (
                            <tr>
                                <td colSpan="3" style={{ textAlign: "center" }}>
                                    No contacts found
                                </td>
                            </tr>
                        ) : (
                            contacts.map((contact, index) => (

                                <tr key={index}>
                                    <td>{contact.text}</td>
                                    <td>{contact.phone}</td>
                                    <td className='action-buttons'>
                                        <button onClick={() => editcontact(index)} className='edit'>Edit</button>
                                        <button onClick={() => deletecontact(index)} className='delete'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

