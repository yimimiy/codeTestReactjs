import React from 'react';
import axios from 'axios';
import Pagination from "react-js-pagination";
require("bootstrap/less/bootstrap.less");

export default class PersonList extends React.Component {
  state = {
    restaurants: [],
    filteredRestaurants: [],
    activePage: 1
  }

  async componentDidMount() {
    const response = await axios.get(`https://strapi.privatus.tech/restaurants`)
    this.setState({
      restaurants: response.data,
      filteredRestaurants: response.data.slice(0, 6)
    })
  }

  onClickPaginationNumber(num) {
    const start = (num - 1) * 6
    const end = start + 6
    this.setState({
      filteredRestaurants: this.state.restaurants.slice(start, end),
      activePage: num
    })
  }

  render() {
    return ( 
        <div className="product_container">
          <div className="product_container_list">
            { this.state.filteredRestaurants.map(restaurant => 
                <div className="product_item">
                    <a href={`/product?restaurant_id=${restaurant.id}`}  >
                      <img className="product_img" src={'https://strapi.privatus.tech' + restaurant.cover[0].url}></img>  
                    </a>
                  
                    <div className="product_detail">
                      <a href={`/product?restaurant_id=${restaurant.id}`}  >
                        <div className="product_name">
                          <p className="text medium">
                            {restaurant.name}
                          </p>
                        </div>
                      </a>
                      <div className="product_abstract">
                        <div className="product_category">{restaurant.category.name}</div>
                        <div className="product_rate">{'★'.repeat(restaurant.note)}</div>
                      </div>
                    </div>
                </div>  
            )}
          </div>
          
          <div className="pagination">
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={6}
              totalItemsCount={this.state.restaurants.length}
              pageRangeDisplayed={5}
              onChange={this.onClickPaginationNumber.bind(this)}
            />
          </div>
          
        </div>
    )
  }
}
