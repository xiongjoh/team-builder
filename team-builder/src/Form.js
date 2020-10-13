import React from "react";

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {};

  const onSubmit = (evt) => {};

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div>

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
          <select>
              <option>--Choose a Role--</option>
              <option></option>
              <option></option>
              <option></option>
          </select>
        </label>

      </div>
    </form>
  );
}
