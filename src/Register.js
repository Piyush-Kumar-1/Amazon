import React, {useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'

export default function Register() {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[name,setName]=useState()
    const history=useHistory()

    const register =e=>{
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push('/')
              
            }).catch(error=>alert(error.message))
    }

    return (
        <div>
            <div className='login'>
                <Link to='/'>
                    <img className='login__img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''/>
                </Link>
                <div className='login__container'>
                    <h1>Sign-In</h1>
                    <h3>Username</h3>
                    <input className='login__containerInput' type='text' value={name}  onChange={e=>setName(e.target.value)} />
                    <form>
                        <h3>Email</h3>
                        <input className='login__containerInput' type='text' value={email}  onChange={e=>setEmail(e.target.value)}/>
                        <h3>Password</h3>
                        <input className='login__containerInput'  type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                        <button onClick={register} className='button'>Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
