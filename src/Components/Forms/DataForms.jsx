import React from 'react'
import { HiPlus } from 'react-icons/hi';
import './Style.scss'


const Data = ({ dataItems, onAdd }) => {


    return (
        <section className="product">
            <div className="container">
                <div className="product-box">

                    {
                        dataItems.map(data => (
                            <div className="product-box__content" key={data.id}>
                                <div className="product-box__content-img"></div>
                                <div className="product-box__content-name">{data.title}</div>
                                <div className="product-box__content-footer">
                                    <span className="product-box__content-footer__price">{data.price}/000</span>
                                    <span className="product-box__content-footer__button" onClick={() => onAdd(data)}><HiPlus size={24} /></span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )


}


export default Data;