import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'
import TeamMember from './TeamMember'
// import axios from 'axios'


const initialFormValues = {
  name:"",
  email:"",
  role:"",
}

function App() {

const [teamMembers, setTeamMember] = useState([])
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
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {teamMembers.map(member => {
        return <TeamMember key={member.id} details={member} />
      })}
    </div>
  );
}

export default App;
