import React, {useEffect} from 'react'

export default function TeamMember(props) {
    const {details, edit} = props

    if (!details) {
        return <h3>Fetching Details...</h3>
    }

    const editThisMember = (evt) => {
        edit(details.name, details.email, details.role, details.id)
    }

    return (
        <div className='container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
            <div>
            <button onClick={editThisMember}>Edit</button>
            </div>
            
        </div>
    )
}