
import React, { useState } from 'react';
import './FormModal.css'; 
import { Button, Input } from 'antd';

function EditModal({ updatedContact, handleEditFormSubmit }) {
    const [isShowModal, setIsShowModal] = useState(false);
    const [fullName, setFullName] = useState(updatedContact.fullName);
    const [lastName, setLastName] = useState(updatedContact.lastName);
    const [address, setAddress] = useState(updatedContact.address);
    const [city, setCity] = useState(updatedContact.city);
    const [country, setCountry] = useState(updatedContact.country);
    const [email, setEmail] = useState(updatedContact.email);
    const [phoneNumber, setPhoneNumber ] = useState(updatedContact.phoneNumber);
    const [isPhoneNumber, setIsPhoneNumber] = useState(['']);
    const [emailFields, setEmailFields] = useState(['']); 
    const handlePhoneNumber = () => {
    setIsPhoneNumber([...isPhoneNumber, '']);
  };

  const handleAddEmailField = () => {
    setEmailFields([...emailFields, '']);
  };

    return (
      <div>
        <button className='edit-contact' onClick={(event) => {setIsShowModal(true); event.preventDefault()}}>Edit Contact</button>
        {isShowModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <form className='inputs' onSubmit={handleEditFormSubmit}>
                  <div>
                  <h1>Edit contact</h1>
                <Input
                  type="text"
                  name="fullName"
                  required="required"
                  placeholder="Enter your name"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
                <Input
                  type="text"
                  required="required"
                  placeholder="Enter your lastName"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
                <Input
                  type="text"
                  name="address"
                  required="required"
                  placeholder="Enter your address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
                <Input
                  type="text"
                  name="city"
                  required="required"
                  placeholder="Enter your city"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
                <Input
                  type="text"
                  name="country"
                  required="required"
                  placeholder="Enter your country"
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                />
                <div className='add-phoneNumber'>
                     {isPhoneNumber.map((index) => (
                 <Input
                key={index}
                type="text"
                name={`phoneNumber${index}`}
                required="required"
                placeholder="Enter your phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
               />
                ))} 
                <button className='field-btn' type="primary" onClick={(event) => {handlePhoneNumber(); event.preventDefault()}}>Add</button>
                </div> 
                <div className='add-phoneNumber'>
                {emailFields.map((index) => (
                <Input
                key={index}
                type="text"
                name={`email${index}`}
                required="required"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
               />
               ))}
               <button className='field-btn'onClick={(event) => {handleAddEmailField(); event.preventDefault()}}>Add</button>
                </div>       
               </div>
              </form>
                <button className='button-spacing' onClick={() => {handleEditFormSubmit({
                  fullName: fullName,
                  lastName: lastName,
                  address: address,
                  city: city,
                  country: country,
                  phoneNumber: phoneNumber,
                  email: email
                }); setIsShowModal(false)}}>Save</button>
                </div>
             </div>
           )}
         </div>
     );
   }
   export default EditModal