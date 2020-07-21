import React from 'react';
import Filter from './filter';
import Product from './callrestuarant';
import './style.scss';  

export default function restaurantpage() {
    return (
        <div>
            <div className="product_page">
                <Filter />
                <Product />
            </div>
        </div>
    )
}
