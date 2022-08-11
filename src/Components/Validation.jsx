import React, { useState, useEffect } from "react";
import "./Contact.css";

function Validation() {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://wikipedia-server101.herokuapp.com/api/contactinfo", {
      method: "POST",
      body: JSON.stringify({
        firstname: firstname,
        email: email,
        phone: phone,
        comments: comments,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };
  return (

    <div>
      <h1>Contact</h1>
      <div className="fieldset">
        <form onSubmit={handleSubmit}>

          <div className="form-row form-container" >
            <label className="form-row">Name</label>
            <input
              className="form-row"
              type="text"
              placeholder="Name..."
              name="name"
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            <label className="form-row">Email</label>
            <input
              className="form-row"
              type="text"
              placeholder="@"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form-row">Phone</label>
            <input
              className="form-row"
              type="text"
              placeholder="(###) ### ####"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <label className="form-row">Comment</label>
            <input
              className="form-row"
              type="text"
              placeholder="Leave a message..."
              name="comment"
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="submit-row">
              <input type="submit" name="SUBMIT" className="form-submit" />

            </div>
          </div>

        </form>
        
      </div>
    </div>
  );
}

export default Validation;
