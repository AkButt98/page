import React from 'react';

function Button(props) {
    
  return <div id={props.divId} aria-disabled="false">
        <a href="#submit-form" id={props.btnId} >
            <span id={ props.span1}>Complete Order</span>
            <span id={ props.span2}>Get Instant Access</span>
        </a>
  </div> ;
}

export default Button;
