import React, { useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import { getBasketTotal } from './reducer'
import { useHistory } from "react-router-dom";
import CurrencyFormat from 'react-currency-format'

export default function Checkout() {
    const history = useHistory();

    const [{basket},dispatch]=useStateValue()
    
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>
                <h3 className='h'>Your Shopping Basket</h3>


                {basket.map(item=>(
                     <CheckoutProduct
                        title={item.title}
                        img={item.img}
                        price={item.price}              
                        rating={item.rating}
                        id={item.id}
                        key={item.id}
                 />
                ))}
               
            </div>
            <div className="checkout__right">
                <CurrencyFormat
                    renderText={(value) => (
                    <>
                        <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="checkout__rightGift">
                        <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)} // Part of the homework
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                />

                <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
            </div>
        </div>
    )
}