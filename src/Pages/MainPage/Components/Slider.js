import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  overflow: hidden;
  position: relative; /* 부모 컨테이너에 position: relative; 설정 */
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  min-width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  height: 100%;
`;

const PrevButton = styled(SliderButton)`
  left: 10px;
`;

const NextButton = styled(SliderButton)`
  right: 10px;
`;

const Slider = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    return (
        <SliderContainer>
            <SliderWrapper style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                    <Slide key={index}>
                        <Image src={image} alt={`Slide ${index + 1}`} />
                    </Slide>
                ))}
            </SliderWrapper>
            <PrevButton onClick={prevSlide}>{'<'}</PrevButton>
            <NextButton onClick={nextSlide}>{'>'}</NextButton>
        </SliderContainer>
    );
};

export default Slider;
