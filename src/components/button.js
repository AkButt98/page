import React, { useState } from 'react';
import '../styles/button.css'
function Button(props) {
  const [loading, setloading] = useState(props.loading);

  function loader() {
    return <div className='lds-dual-ring'/>
  }
  function clickHandler() {
   setloading(true)
  }
  return <div id={props.divId} aria-disabled="false" onClick={clickHandler}>
         <button type="submit" id={props.btnId} >
            {loading ? loader() : props.children  }
          </button>     
          </div> ;
}

export default Button;
