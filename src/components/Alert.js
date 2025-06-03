import React from 'react'

export default function Alert(props) {
    const capaitlized = (word) => {
            const cap=word.toLowerCase();
            return cap.charAt(0).toUpperCase() + cap.slice(1);
    }
  return (
    <>
    <div style={{height: '50px'}}>
        {props.alert && (
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
               <strong>{capaitlized(props.alert.type)}</strong> : {props.alert.msg}
        </div>
        )} 

    </div>
  
    </>
  )
}
