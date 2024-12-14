import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const collectdata = () => {

        return (
            console.warn(name, password, email)
        )
    }
    return (
        <div className='Register'>
            <h1>Register</h1>
            <input className='signin' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name' />
            <input className='signin' type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
            <input className='signin' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <button className='button' onClick={collectdata} type='button'>Sign Up</button>

        </div>
    )
}

export default Signup