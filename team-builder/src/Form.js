import React from "react";

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    //   debugger
      const {name, value} = evt.target
      update(name, value)
  };

  const onSubmit = (evt) => {
      evt.preventDefault()
      submit()
  };

  return (
    <form className="form container" onSubmit={onSubmit}>

        <label>
          Name
          <input 
          type='text'
          name='name'
          value={values.name}
          onChange={onChange}
          placeholder='type a name...'
          />
        </label>

        <label>
          Email
          <input 
          type='email'
          name='email'
          value={values.email}
          onChange={onChange}
          placeholder='type an email...'/>
        </label>

        <label>
          Role
          <select name='role' value={values.role} onChange={onChange}>
              <option value=''>--Choose a Role--</option>
              <option value='frontend'>Front-End</option>
              <option value='backend'>Back-End</option>
              <option value='designer'>Designer</option>
          </select>
        </label>
        <div className='submit'>
            <button>submit</button>
        </div>


    </form>
  );
}
