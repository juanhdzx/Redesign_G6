import React, { useState, useEffect } from "react";


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
    <div className="App">
      <h1>Contact</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Comment</label>
        <input
          type="text"
          name="comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <input type="submit" name="SUBMIT" />
      </form>
    </div>
  );
}

export default Validation;