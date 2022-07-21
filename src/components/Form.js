import React, { useState } from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) 
return (
  <form>
  <input type="text" onChange={handleFirstNameChange} value={firstName} />
  <input type="text" onChange={handleLastNameChange} value={lastName} />
   {/* <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
)
    