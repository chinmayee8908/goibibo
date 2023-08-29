import React from 'react';
import { IoIosPhonePortrait } from 'react-icons/io';
import Modal from 'react-bootstrap/Modal';
import './Signin.css';

const Signin = ({ isOpen, onClose, handleMobileNumberChange, handleSignIn, mobileNumber }) => {

  const number = /^[0-9]{10}$/;

  const isMobileNumberValid = number.test(mobileNumber);

  return (
    <Modal show={isOpen} onHide={onClose}>
      <div className='signinModal'>
        <div style={{ display: 'flex', justifyContent: 'center', height: '50px', textAlign: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '30px' }}>
          <h2 style={{ marginTop: '20px' }}>LogIn/SignUp</h2>
          <div style={{ marginTop: '30px' }}>
            <span>
              <IoIosPhonePortrait />
            </span>
            <input
              className={`mobileNumber ${isMobileNumberValid ? '' : 'invalid'}`}
              type='tel'
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              placeholder='Continue With Number'
              pattern={number}
              title='Please enter a valid 10-digit mobile number'
            />
          </div>
        </div>
        <div className='loginButton'>
          <button style={{ width: '250px', marginLeft: '100px' }} onClick={handleSignIn} disabled={!isMobileNumberValid}>
            Continue
          </button>
        </div>
        <div style={{ marginTop: '30%', fontSize: '12px', display: 'flex', justifyContent: 'center' }}>
          I Agree To The Terms and Condition & Privacy Policies
        </div>
      </div>
    </Modal>
  );
};

export default Signin;
