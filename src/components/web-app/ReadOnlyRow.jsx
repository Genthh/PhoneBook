import React from "react";
import { useState } from "react";
import EditModal from "./EditModal";
import './FormModal.css'

const ReadOnlyRow = ({ contact, handleDeleteClick }) => {
  const [updatedContact, setUpdatedContact] = useState(contact);
  const handleEditFormSubmit = (updatedContact) => {
    setUpdatedContact(updatedContact);
  }
  return (
    <tr>
      <td>{updatedContact.fullName}</td>
      <td>{updatedContact.lastName}</td>
      <td>{updatedContact.address}</td>
      <td>{updatedContact.city}</td>
      <td>{updatedContact.country}</td>
      <td>{updatedContact.phoneNumber}</td>
      <td>{updatedContact.email}</td>
      <td>
        <div className="actions">
          <div>
      <EditModal 
       updatedContact={updatedContact}
       handleEditFormSubmit={handleEditFormSubmit}
       />
          </div>
  
            <button className="delete-btn" type="button" onClick={() => handleDeleteClick(updatedContact.id)}>
          Delete
        </button>
        </div>
      </td>
    </tr>
  );
};


export default ReadOnlyRow;