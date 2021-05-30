import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop autoPlay>
                 <div>
      <img
        alt=''
        src='https://placeholdit.imgix.net/~text?txtsize=20&bg=616161&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
      />
    </div>

      <div>
      <img
        alt=''
        src='https://image.shutterstock.com/image-photo/calm-african-mother-her-funny-600w-1746359492.jpg'
      />
    </div>

     <div>
      <img
        alt=''
        src='https://image.shutterstock.com/image-photo/woman-felt-depressed-upset-sad-600w-1506663215.jpg'
      />
    </div>

     <div>
      <img
        alt=''
        src='https://image.shutterstock.com/image-photo/young-woman-taking-selfie-mobile-600w-1456170263.jpg'
      />
    </div>


     <div>
      <img
        alt=''
        src='https://image.shutterstock.com/image-photo/beautiful-girl-enjoying-fresh-air-600w-1033685779.jpg'
      />
    </div>


                
              
            </Carousel>
        </div>
    );
}
