import React, {useContext, useEffect, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import {VscChromeClose} from 'react-icons/vsc'
import axios from 'axios'


function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)
            setTotal(total)
        }
        getTotal()
    },[cart])

    const addToCart = async () => {
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }
    const increment = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity += 1
            }
        })
        setCart([...cart])
        addToCart()
    }
    const decrement = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })
        setCart([...cart])
        addToCart()
    }
    const removeProduct = id => {
        if(window.confirm('Вы хотите удалить этот продукт?')) {
            cart.forEach((item, index) => {
                if(item._id === id) {
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
            addToCart()
        }
    }

    if (cart.length === 0) 
        return <h2 style={{textAlign: 'center', fontSize: '2rem', fontWeight: '400', margin: '200px 0 200px 0', color: 'silver'}}>В корзине пусто</h2>


    return (
        <div>
            {cart.map((product) => (
                <div className="detail cart" key={product._id}>
                    <img src={product.images.url} alt="" />

                    <div className="box-detail">
                        <h2>{product.title}</h2>

                        <h3>{product.price * product.quantity} руб.</h3>
                        <p>{product.description}</p>
                        <p>{product.content}</p>

                        <div className="amount">
                            <button onClick={() => decrement(product._id)}> - </button>
                            <span>{product.quantity}</span>
                            <button onClick={() => increment(product._id)}> + </button>
                        </div>

                        <div className="delete" onClick={() => removeProduct(product._id)}>
                            <VscChromeClose fontSize={27} className="overlay__close" />
                        </div>
                    </div>
                </div>
            ))}

            <div className="total">
                <h3>Итого: {total} руб.</h3>
                <Link to="#!">Payment</Link>
            </div>
        </div>
    )
}
export default Cart