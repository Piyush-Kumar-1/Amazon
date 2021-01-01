import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'

export default function Product({title,price,rating,img,id}) {

    const [{},dispatch]=useStateValue()

    const addToBasket1=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                price:price,
                rating:rating,
                img:img
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    <p>{'🌟'.repeat(rating)}</p>
                </div>
            
            </div>
            <img className='product__img' src={img} alt=''/>
            <button onClick={addToBasket1} className='product__button'>add to cart</button>

    </div>
    )
}
