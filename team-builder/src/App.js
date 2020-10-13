import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'
// import axios from 'axios'


const initialFormValues = {
  name:"",
  email:"",
  role:"",
}

function App() {

const [teamMember, setTeamMember] = useState([])
const [formValues, setFormValues] = useState(initialFormValues)

const updateForm = (inputName, inputValue) => {

}

const submitForm = () => {

}

// useEffect(() => {

// }, [])


  return (
    <div className="App">
      <Form 
    </div>
  );
}

export default App;
