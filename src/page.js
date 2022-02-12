import React from 'react';
import Inputer from './components/input';
import Button from './components/button';
import './page.css'
import { useState } from 'react';

function Page() {
  
  const [radio1, setradio1] = useState('radio-selector');
  const [radio2, setradio2] = useState('radio-selector');
  function radioHandler(e) {
    switch (e.target.value) {
      case '1':
          setradio2('radio-selector');
          setradio1('radio-selector active-radio');
        break;
      case '2':
          setradio1('radio-selector');
          setradio2('radio-selector active-radio');
      
        break;
      default:
        break;
    }
}
  return <div>
       <div className='container'>
        <div className='logo'>
          <img src="https://images.clickfunnels.com/34/abf2ebd3614f73b5015fc48cf14f05/logo-nav.png"  width="50" alt='logo'/>
        </div>
        <div className='heading-1' >
          Learn to launch your own Generative NFT project
          <div>step-by-step, in one afternoon!</div>
        </div>

        <div><br/></div>

        <h2 className='heading-2'>
          <div><br/></div>
          Register Now for the NFT Masterclass on Thursday, February 10th at 5:30PM PT!
        </h2>
      </div>
      <div className='form'>
        <div className='form-inner'>
          <div className='form-p-1'>
             <div className='form-p-1-inner'>
               
             </div>
          </div>
          <div className='form-p-2' >
            <div className='menu-title'>
              <div >Item</div>
              <div >Price</div>
            </div>
        <div onChange={radioHandler}>
            <div className= {radio1}>
              <div  >
              <input type="radio" id="radio-1" name="radios" value='1' /> 
              <label htmlFor="radio-1">Blockchain Mastery University - Monthly Membership</label>
              
              </div>
              <div className='radio-text'>Only $49/mo</div>
            </div>
            <div className= {radio2}>
                <div>
                <input type="radio" id="radio-2" name="radios" value='2' />
                <label htmlFor="radio-2" >Masterclass Admission</label>
                </div>
                <div className='radio-text'>$99</div>
            </div> 
        </div>
           

          </div>
          <div className='form-p-3'>
            <form className="inputs-form">
              <Inputer divId="EmailInp" inpId="input-1" label="Email:"  type="Email"
                placeholder="Enter Your Email Here..."
                value="" />
              
              <Inputer divId="CardInp" inpId="input-2" label="Credit Card Number:"  type="Card Number"
                placeholder="Card Number"
                value="" />
              
              <div className='bottom-inputs'>
        
                <Inputer divId="bottom-input-1" inpId="input-3" label="Expiry *:"  type="Date"
                  placeholder="MM / YY"
                  value="" />

                <Inputer divId="bottom-input-2" inpId="input-4" label="CVC Code:"  type="code"
                  placeholder="CVC"
                  value="" />

              </div>   
            </form>
          </div>
          <Button divId="btnDiv" btnId="btn" loading={false}>
          
            <span id="s1">Complete Order</span>
            <span id="s2">Get Instant Access</span>
           
          </Button>
          <div className='payout-div'>
            <img src="https://www.clickfunnels.com/images/credit-only.png"  width="200" alt='online-payout'/>
          </div>
        </div>
      </div>
  </div>;
}

export default Page;
