import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Carousel.css'
import axios from 'axios'

// fetch details from backend and display it in the card
const carousel = (file) => {
  

    console.log("fetching details");
    

    return (
      <>
          <div class="carousel">
            <div class="carousel_item active">
              <image src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" />
            </div>
            <div class="carousel_item">
              <image src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" />
            </div>
            <div class="carousel_item">
              <image src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHw%3D&w=1000&q=80" />
            </div>
          </div>
      </>
    );
}

export default carousel