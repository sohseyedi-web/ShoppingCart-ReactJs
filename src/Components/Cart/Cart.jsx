import React from 'react'
import './Style.scss'
const Cart = ({ onRemove, hasItem, onAdd, onDelete }) => {


    const cartItem = hasItem.length > 0;
    const totalPrice = hasItem.reduce((price, item) => price + item.quantity * item.price, 0)
    return (
        <>
            <div className="back" onClick={onRemove}></div>
            <div className="cart">
                {hasItem.length === 0 && <div>سفارشی ثبت نشده</div>}
                {
                    <>
                        <ul className="cart-list">
                            {
                                hasItem.map(item => (
                                    <li className="cart-list__content" key={item.id}>
                                        <div>
                                            <h2>{item.title}</h2>
                                            <div className="cart-box__items-content-box">
                                                <span className="cart-box__items-content-box__price">{item.price}/000</span>
                                            </div>
                                        </div>
                                        <div>
                                            <button onClick={() => onDelete(item)} className="btn-minus cart-box__items-content__button">-</button>
                                            <span className="cart-box__items-content__amount">{item.quantity}</span>
                                            <button onClick={() => onAdd(item)} className="btn-add cart-box__items-content__button">+</button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="cart-total">
                            <span className="cart-total__amount">جمع : </span>
                            <span className="cart-total__price">{totalPrice}/000</span>
                        </div>
                        <div className="cart-button">
                            <button onClick={onRemove}>&times;</button>
                            {cartItem && <button>تکمیل سفارش</button>}
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default Cart;


