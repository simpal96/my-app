import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
    <Carousel infiniteLoop autoPlay>

          <div>
            <img
            alt='' style = {{height : "30em"}} 
            src='https://image.shutterstock.com/image-photo/calm-african-mother-her-funny-600w-1746359492.jpg'
            />
            </div>

            <div>
            <img
            alt='' style = {{height : "30em"}} 
            src='https://image.shutterstock.com/image-photo/woman-felt-depressed-upset-sad-600w-1506663215.jpg'
            />
            </div>

            <div>
            <img
            alt='' style = {{height : "30em"}} 
            src='https://image.shutterstock.com/image-photo/young-woman-taking-selfie-mobile-600w-1456170263.jpg'
            />
            </div>


            <div>
            <img
            alt='' style = {{height : "30em"}} 
            src='https://image.shutterstock.com/image-photo/beautiful-girl-enjoying-fresh-air-600w-1033685779.jpg'
            />
            </div> 
    </Carousel>
    </div>
    );
  }