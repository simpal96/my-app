import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
    <Carousel infiniteLoop autoPlay>


    <div>
    <img alt='' style = {{height : "30em"}}  src='img/img1.jpg' />
    </div>

    <div>
    <img alt='' style = {{height : "30em"}}  src='img/img2.png'/>
  </div>


    <div>
    <img alt='' style = {{height : "30em"}}  src='img/img3.png'  />
    </div>

    <div>
    <img alt='' style = {{height : "30em"}}  src='img/img4.png' />
    </div>


    </Carousel>
    </div>
    );
}