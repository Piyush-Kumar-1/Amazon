import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'

export default function Login() {
    const history=useHistory()

    const[email,setEmail]=useState()
    const[password,setPassword]=useState()

    const signIn =e=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
             .then((auth)=>{
                 history.push('/')
             }).catch(err=>alert(err.message))
    }

    const register =e=>{
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push('/')
              
            }).catch(error=>alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''/>
            </Link>
            <div className='login__container'>
                <h1>Sign-In</h1>
                <form>
                    <h3>Username</h3>
                    <input className='login__containerInput' type='text' value={email}  onChange={e=>setEmail(e.target.value)}/>
                    <h3>Password</h3>
                    <input className='login__containerInput'  type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button onClick={signIn} className='button'>Signin</button>
                </form>
                <button onClick={register} className='button'>Create Account</button>
            </div>

        </div>
    )
}
