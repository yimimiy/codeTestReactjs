import React, { Component } from 'react';
import Showslider from './productslide';
import axios from 'axios';
import './style.scss';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ProductDetail extends Component {
    state = {
        restaurant: null
    }

    async componentDidMount() {
        const params = new URLSearchParams(this.props.location.search)
        const restaurantId = Number(params.get('restaurant_id'))
        const response = await axios.get('https://strapi.privatus.tech/restaurants')
        const restaurant = response.data.find(r => r.id === restaurantId)
        if (!restaurant) {
            window.location.href = '/'
        }
        this.setState({ restaurant })
    }

    render() {
        if (!this.state.restaurant) {
            return null
        }

        const reviews = []
        for (const review of this.state.restaurant.reviews) {
            reviews.push(
                <p className="text">
                    {review.content}
                </p>
            )
        }

        return (
            <div className="product_detail_page">

                <div className="product_detail_header">

                    <a href="/" className="back_button">
                        <span className="text">
                            Back 
                        </span>
                    </a>
                    <div className="product_detail_name">
                        <span className="text large">
                            {this.state.restaurant.name}
                        </span>
                    </div>
                    <div className="product_detail_category">
                        <span className="text">
                        {this.state.restaurant.price.slice(1)}$ - {this.state.restaurant.category.name} - {this.state.restaurant.district.slice(1)}
                        </span>
                    </div>
                    <div className="product_detail_rate">
                        <span className="text">
                            {'★'.repeat(this.state.restaurant.note)}
                        </span>
                    </div>

                </div>
    
                <Showslider images={this.state.restaurant.cover} />

                <Tabs defaultActiveKey="Information" transition={false} id="uncontrolled-tab-example">
                    <Tab eventKey="Information" title="Information">
                        <div className="information_container">
                            <div className="column">
                                <div className="column_item">
                                    <p className="text large">
                                        Opening hours
                                    </p>
                                    <span className="text">
                                        {this.state.restaurant.opening_hours[0].day_interval}
                                    </span><br></br>
                                    <span className="text">
                                        {this.state.restaurant.opening_hours[0].opening_hour}
                                    </span><br></br>
                                    <span className="text">
                                        {this.state.restaurant.opening_hours[0].closing_hour}
                                    </span>
                                </div>
                            </div>
                            <div className="column">
                                <div className="column_item">
                                    <p className="text large">
                                        Details
                                    </p>
                                    <span className="text">
                                        {this.state.restaurant.phone}
                                    </span>
                                </div>
                                <div className="column_item">
                                    <p className="text large">
                                        Neighbourhood
                                    </p>
                                    <span className="text">
                                        {this.state.restaurant.district.slice(1)}
                                    </span>
                                </div>
                            </div>
                            <div className="column">
                                <div className="column_item">
                                    <p className="text large">
                                        Location
                                    </p>
                                    <span className="text">
                                        {this.state.restaurant.address}
                                    </span>
                                </div>
                                <div className="column_item">
                                    <p className="text large">
                                        Websites
                                    </p>
                                    <span className="text">
                                        {this.state.restaurant.website}
                                    </span>
                                </div>
                                <div className="column_item">
                                    <p className="text large">
                                        Phone
                                    </p>
                                    <span className="text">
                                        {this.state.restaurant.phone}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey="Reviews" title="Reviews">
                        <div className="review_container">
                            {reviews}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
