import React from 'react'

export default function TeamMember(props) {
    const {details} = props

    if (!details) {
        return <h3>Fetching Details...</h3>
    }

    const edit = (evt) => {
        console.log(`editing`)
    }

    return (
        <div className='container' onSubmit={edit}>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
            <button>Edit</button>
        </div>
    )
}