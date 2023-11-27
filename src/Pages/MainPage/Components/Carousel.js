import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components";

const ContentsSlider = styled(Slider)`
    /* background-color: aliceblue; */
    height: 100%;
    width: 100%;
    /* display: flex;
    flex-direction: row; */
    
    .slick-list {
        /* height: 100%;
        object-fit: cover;
        display: flex; 
        align-items: center; */
    }
    .slick-slide {
        /* padding-right: 5px; */
        /* pointer-events: none; */
    }
`;

const Image = styled.img`
  width: 100%;
`;
const Carousel = ({images}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return(
        <ContentsSlider {...settings}>
            {images.map((image, index) => (
                <Image src={image} alt={`Slide ${index + 1}`} />
        ))}
        </ContentsSlider>
    )
}

export default Carousel;