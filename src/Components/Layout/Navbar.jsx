import React from 'react'
import './Style.scss';
import { HiShoppingBag } from 'react-icons/hi'
const Navbar = ({ onOpen, hasItem }) => {



    return (
        <header>
            <nav className="nav">
                <div className="nav-logo">
                    دیرفود
                </div>
                <div className="nav-cart" onClick={onOpen}>
                    <div className="nav-cart__box">
                        <span className="nav-cart__box-amount">{
                            hasItem.length === 0 ? '0' : hasItem.length
                        }
                        </span>
                        <HiShoppingBag size={30} />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;