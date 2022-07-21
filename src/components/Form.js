import React, { useState } from "react";

function Form() {
    firstName,
    lastName,
    handleFirstNameChange,
    handleLastNameChange,
  }) {
    return ( <
        form >
        <
        input type = "text"
        value = { firstName }
        /> <
        input type = "text"
        value = { lastName }
        /> <
        button type = "submit" > Submit < /button> < /
        form >
    );
}

export default Form;