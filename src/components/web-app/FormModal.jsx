import React, { useState } from 'react';
import { Button, Input } from 'antd';
import Header from '../Header/Header';

function FormModal({handleAddFormChange, handleAddFormSubmit,visible,setVisible}) {
  const [phoneNumber, setPhoneNumber] = useState(['']);
  const [emailFields, setEmailFields] = useState(['']);

  const handleAddAddressField = () => {
    setPhoneNumber([...phoneNumber, '']);
  };

  const handleAddEmailField = () => {
    setEmailFields([...emailFields, '']);
  };
  const handleSaveData = () => {
    handleAddFormSubmit()
    setVisible(!visible)
  }
  return (
    
    <div>
      <Header/>
      <Button type='primary' onClick={() => setVisible(true)}>Add Contact</Button>      
      {visible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <form className='inputs' onSubmit={handleAddFormSubmit}>
                <div>
                <h1>Register new contact</h1>
              <Input
                type="text"
                name="fullName"
                required="required"
                placeholder="Enter a name..."
                onChange={handleAddFormChange}
              />
              <Input
                type="text"
                required="required"
                placeholder="Enter your lastName"
                name="lastName"
                onChange={handleAddFormChange}
              />
              <Input
                type="text"
                name="address"
                required="required"
                placeholder="Enter an address..."
                onChange={handleAddFormChange}
              />
                 <Input
                type="text"
                name="city"
                required="required"
                placeholder="Enter your city"
                onChange={handleAddFormChange}
              />
                 <Input
                type="text"
                name="country"
                required="required"
                placeholder="Enter your country"
                onChange={handleAddFormChange}
              />
             <div className='add-phoneNumber'> 
             {phoneNumber.map((index) => (
            <Input
            key={index}
            type="text"
            name={`phoneNumber${index}`}
            required="required"
            placeholder="Enter your phone number"
            onChange={handleAddFormChange}
              />
             ))} 
            <button  className='form-btn' type="primary" onClick={handleAddAddressField}>Add</button>
           </div> 
           <div className='add-phoneNumber'>
          {emailFields.map((index) => (
          <Input
          key={index}
          type="text"
          name={`email${index}`}
          required="required"
          placeholder="Enter your email"
          onChange={handleAddFormChange}
            />
          ))}
          <button className='form-btn' onClick={handleAddEmailField}>Add</button>
           </div>
          </div>   
            </form>
            <div className='buttons-antd'>
              <button className='save-button-spacing' onClick={handleSaveData}>Save</button> 
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default FormModal;   


     