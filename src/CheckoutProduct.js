import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

export default function CheckoutProduct({id,title,img,price,rating}) {

    const[{},dispatah] =useStateValue()

    const remove =()=>{
        dispatah({
            type:'REMOVE',
            id:id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img src={img} alt=''/>
            <div className='checkoutProduct__details'>
                <p>{title}</p>
                <p>$ {price}</p>
                <p>{'🌟'.repeat(rating)}</p>
                <button onClick={remove}>Remove</button>
            </div>
        </div>
    )
}
