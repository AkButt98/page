import React from 'react';
import { useState } from 'react';
import '../styles/input.css'
function Inputer(props) {
    const [value, setVlaue] = useState(props.value);
  return <div id={ props.divId}>
            <label className='label' for={props.label}>{props.label}</label><br></br>
            <input id={props.inpId} type={props.type}
            placeholder={props.placeholder} 
            value={value}
            onChange={(e) => setVlaue(e.target.value)}/>
        </div>;
}

export default Inputer;
