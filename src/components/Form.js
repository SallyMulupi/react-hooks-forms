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
)
    