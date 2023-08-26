import React from "react";

export default function Alert(props) {

    const ucfirst=(text)=>{
        const lower = text.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
  return (
    props.message && <div
      className={`alert alert-${props.message.type} alert-dismissible fade show`}
      role="alert">
      <strong>{ucfirst(props.message.type)}</strong> : {ucfirst(props.message.message)}
    </div>
  );
}
