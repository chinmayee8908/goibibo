import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const Navigate=useNavigate()
  

  const [debitCard, setdebitCard] = useState(false);

  const toggleDiv1 = () => {
    setdebitCard(!debitCard);
    setupi(false)
    setNetBanking(false)
  };
  const [NetBanking, setNetBanking] = useState(false);

  const toggleDiv2 = () => {
    setdebitCard(false)
    setNetBanking(!NetBanking);
    setupi(false)
  };
  const [Mobile, setMobile] = useState(false);

  const toggleDiv3 = () => {
    setMobile(!Mobile);
    setupi(false)
    setNetBanking(false)
  };
  const [upi, setupi] = useState(false);

  const toggleDiv4 = () => {
    setupi(!upi);
    setNetBanking(false)
    setdebitCard(false)
  };
   
//debit card
const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cvv, setCvv] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const handleCardNumberChange = (event) => {
    const numbersOnly = event.target.value.replace(/\D/g, '');
    setCardNumber(numbersOnly);
    validateForm();
  };

  const handleCardNameChange = (e) => {
    const textOnly = e.target.value.replace(/[^A-Za-z\s]/g, '')
    setCardName(textOnly);
    validateForm();
  };

  const handleCvvChange = (e) => {
    const numbersOnly = e.target.value.replace(/\D/g, '');
    setCvv(numbersOnly);
    validateForm();

  };
  const validateForm = () => {
    if (cardNumber.length === 12 && cardName.trim().length > 0 && cvv.length === 3) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };
 const handlemakePayment=()=>{
  if (isFormValid){
     alert("payment successful")
  Navigate("/success")}
  else{
    alert("error")
  }
 }
  return (
    <div style={{display:'flex',height:"100vh",width:"100vw"}}>
    <div style={{display:"flex",justifyContent:"center",marginLeft:"50px",marginTop:"20px"}}>
  <div className='paymentDetails-Container-1'>
     <div><button className='paymentDetails-Header'>
       Payment options    
      </button>
      <div className='payment-Option-Container'>
          <div className='payment-Option'>
          <button  onClick={toggleDiv1}style={{border:"none",height:"50px",background:"white",borderBottom:"1px solid grey"}}>Debit/CreditCard</button>
          <button   onClick={toggleDiv2}style={{border:"none",height:"50px",background:"white",borderBottom:"1px solid grey"}}>Net Banking</button>
          <button  onClick={toggleDiv3}style={{border:"none",height:"50px",background:"white",borderBottom:"1px solid grey"}}>Mobile Wallets</button>
          <button  onClick={toggleDiv4}style={{border:"none",height:"50px",background:"white",borderBottom:"1px solid grey"}}>UPI</button>
          </div>
          <div className='payment-option-Field'>
          {debitCard && (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>Enter Your Card Details</div>
        <div
          style={{
            backgroundColor: 'grey',
            height: '270px',
            width: '400px',
            marginLeft: '20px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ padding: '20px' }}>
            <div>Card Number</div>
            <input type='text' value={cardNumber} onChange={handleCardNumberChange} maxLength="12"/>
            <div>Name of the Card</div>
            <input type='text' value={cardName} onChange={handleCardNameChange} />
            <div style={{ width: '70px' }}>CVV</div>
            <input type='text' value={cvv} style={{ width: '50px' }} onChange={handleCvvChange}maxLength="3" />
          </div>
          <button
            onClick={handlemakePayment}
            style={{ width: '300px', backgroundColor: 'orangered', marginLeft: '20px' }}
          >
          Make Payment:</button>
            </div>
           
            </div>)  }            
            {NetBanking&& <div></div> }
            {Mobile&& <div>mobile</div> }
            {upi&& <div></div> }
          </div>
      </div>
      </div> 
  </div>
  </div>
  </div>  
  )
}

export default Payment