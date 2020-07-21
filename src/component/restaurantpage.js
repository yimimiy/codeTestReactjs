import React from 'react';
import Menu from './menunavigation';
import Productdetail from './productdetailpage';
import Productpage from './productpage';

export default function restaurantpage() {
    return (
        <div>
            <Menu />
            <Productpage />
            <Productdetail />
        </div>
    )
}
