import React, { useState } from "react";

export default function Myform(props) {
  const [email, seteMail] = useState("Enter main here");

  const onclickfunctionupper = () => {
    let newtext = email.toLocaleUpperCase();
    seteMail(newtext.trim());
    props.showalert("Chnage to Upper case","success");
  };

  const onclickfunctionlower = () => {
    let newtext = email.toLocaleLowerCase();
    seteMail(newtext.trim());
  };
  const onclickfunctionclear = () => {
    let newtext = '';
    seteMail(newtext.trim());
  };
  const updatetextarea = (event) => {
    seteMail(event.target.value);
  };
  return (
    <div className="col-md-12 .bg-dark">
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter Text Below
        </label>
        <textarea
        rows="4" cols="50"
          className="form-control"
          value={email}
          onChange={updatetextarea}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        ></textarea>
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <button
        type="submit"
        onClick={onclickfunctionupper}
        className="btn btn-primary"
      >Uppercase</button>
      <button
        type="submit"
        onClick={onclickfunctionlower}
        className="btn btn-primary mx-2"
      >Lowercase</button>
      <button
        type="submit"
        onClick={onclickfunctionclear}
        className="btn btn-primary mx-2"
      >Clear</button>
      <div>
        <h1>Below is text counts</h1>
        Words { email.split(' ').length } . Charactor {email.length} .
        <br></br>Time to Read {0.008 * email.split(' ').length} minuts.
        <h2> Preview :</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
