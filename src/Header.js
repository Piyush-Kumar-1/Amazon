import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase'

export default function Header() {

    const [{basket,user},dispatch]=useStateValue()

    const handleAuth =()=>{
        if(user){
            auth.signOut()
            window.location.reload();
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__img' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
            </Link>
            <div className='header__search'>
                <input className='header__input' type='text'/>
                <SearchIcon className='header__searchIcon'/>
            </div>
            <div className='header__right'>
                <Link to={!user && '/login'} className='x'>
                    <div onClick={handleAuth} className='header__details'>
                        <p>Hello , {user?user.email:'Guest'}</p>
                        <h3>{user?'Sign Out':'Sign in'}</h3>
                    </div >
                </Link>
                <Link to = '/orders' className='x'>
                    <div className='header__details'>
                        <p>Returns</p>
                        <h3>&Orders</h3>
                    </div>
                </Link>
                <div className='header__details'>
                    <p>your</p>
                    <h3>prime</h3>
                </div>
                <Link to='/checkout'>
                    <AddShoppingCartIcon className='icon' fontSize='large'/>
                </Link>
                <h3>{basket?.length}</h3>
            </div>
        </div>
    )
}