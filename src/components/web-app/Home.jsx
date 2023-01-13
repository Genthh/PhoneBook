import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import FormModal from "./FormModal";
import ReadOnlyRow from './ReadOnlyRow'
import './Home.css'
import Header from "../Header/Header";


const Home = () => {
  const [contacts, setContacts] = useState(data);
  const [showModal, setShowModal] = useState(false);


  const [addFormData, setAddFormData] = useState({
    fullName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      lastName:  addFormData.lastName,
      address: addFormData.address,
      city: addFormData.city,
      country: addFormData.country,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
 

  const handleEditFormSubmit = () => {
    
    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      lastName: editFormData.lastName,
      city: editFormData.city,
      country: editFormData.country,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      lastName: contact.lastName,
      address: contact.address,
      city: contact.city,
      country: contact.country,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <Header/>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>      
          {contacts.map((contact) => (
              <Fragment>
                {editContactId !== contact.id ? (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditFormSubmit={handleEditFormSubmit}
                    handleEditFormChange={handleEditFormChange}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                ) : null}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <div className="new">
        <FormModal 
      handleAddFormChange={handleAddFormChange}
      handleAddFormSubmit={handleAddFormSubmit}
      visible={showModal}
      setVisible={setShowModal}
      />
      </div>
  
    </div>
  );
};

export default Home;