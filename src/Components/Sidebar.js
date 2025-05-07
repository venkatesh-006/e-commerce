import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './Sidebar.css';
import { useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from '../redux/CardSlice'

function Sidebar({ isOpen, closeSidebar}) {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(increment({ id: item }));
    };
    const handleDecrement = (item) => {
        dispatch(decrement({ id: item }));
    };
    const handleRemoveFromCart = (item) =>{
        dispatch(removeFromCart({ id: item }));
    }
    const subtotal = cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);

    return (
        <div>
            {isOpen && (
                <div className="cart-sidebar">
                    <span className="close-btn" onClick={closeSidebar}>
                        <AiOutlineArrowRight />
                    </span>

                    <div className="cart-header">
                        <div className="cart-title">
                            <h1>Cart</h1>
                        </div>
                        <div className="separator"></div>
                    </div>

                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div className="item-image">
                                    <img src={item.image} alt={item.title} className="image" />
                                </div>

                                <div className="item-details">
                                    <div className="item-info">
                                        <p className="item-title">{item.title}</p>
                                        <p className="item-price">${item.price}</p>
                                    </div>
                                    <div className="item-actions">
                                        <button onClick={() => handleDecrement(item.id)} className="decrement-btn">-</button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button onClick={() => handleIncrement(item.id)} className="increment-btn">+</button>
                                        <button
                                            type="button"
                                            onClick={() => handleRemoveFromCart(item.id)}
                                            className="remove-btn"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </div>

                    <div className="cart-footer">
                        <div className="subtotal">
                            <p>Subtotal</p>
                            <p>${subtotal.toFixed(2)}</p>
                        </div>
                        <p className="shipping-info">
                            Shipping and taxes calculated at checkout.
                        </p>
                        <div className="checkout-btn-container">
                            <p className="checkout-btn">Checkout</p>
                        </div>
                        <div className="continue-shopping">
                            <p>
                                or &nbsp;
                                <Link to={'/'}
                                    type="button"
                                    className="continue-shopping-btn"
                                    onClick={closeSidebar}
                                >
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
