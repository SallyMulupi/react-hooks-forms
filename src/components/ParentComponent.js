import React from 'react'
import DisplayData from './DisplayData';

function ParentComponent() {
    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }
    return (<div>
        <Form
        firstName={firstName}