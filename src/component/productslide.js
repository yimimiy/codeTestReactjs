import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


export default class PersonList extends Component {
    constructor(props) {
      super(props)
      this.slideRef = React.createRef()
    }

    render() {
      const images = []
      for (const image of this.props.images) {
        images.push(
          <div className="each-fade">
            <div className="image-container">
                <img src={`https://strapi.privatus.tech${image.url}`} />
            </div>
            {/* <h2>First Slide</h2> */}
          </div>
        )
      }

      return ( 
        <div className="restaurant_slide">
            <div className="slide-container">
                <Slide ref={this.slideRef}>
                    {images}
                </Slide>
            </div>

            <div className="slide_picker">
                <div className="slide_picker_item" onClick={() => this.slideRef.current.goTo(0)}>
                  <img src={`https://strapi.privatus.tech${this.props.images[0].url}`} />
                </div>
                <div className="slide_picker_item" onClick={() => this.slideRef.current.goTo(1)}>
                  <img src={`https://strapi.privatus.tech${this.props.images[1].url}`} />
                </div>
                {this.props.images[2] && <div className="slide_picker_item" onClick={() => this.slideRef.current.goTo(2)}>
                  <img src={`https://strapi.privatus.tech${this.props.images[2].url}`} />
                </div>}
            </div>

        </div>
      )
    }
  }
  
