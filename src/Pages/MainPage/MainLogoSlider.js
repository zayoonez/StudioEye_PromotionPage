import React from "react";
import styled, { keyframes } from "styled-components";
import corpLogo from "../../assets/logo/Logo.png"


const Wrapper = styled.div`
    height: 28vh;
    width: 100%;
    background-color: #FFA900;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const ScrollAnimation = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
`;

const ScrollAnimation2 = keyframes`
    0% {
    transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
`;

const SliderContainer = styled.div`
    width: 100%;
    overflow: hidden; // 여기로 overflow 이동
`;

const SlideTrack = styled.div`
    margin-top: 20px;
    width: 100%;
    justify-content: space-around;
    display: flex;
    gap: 3em;
    overflow: hidden;
`;

const SlideImg = styled.img`
    height: 100%;
    animation: ${ScrollAnimation} 25s linear infinite;
    transition: transform 1s ease-in-out;
    /* transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1); */


`;
const SlideImg2 = styled.img`
    height: 100%;
    animation: ${ScrollAnimation2} 25s linear infinite;
    transition: transform 1s ease-in-out;

`;

const MainLogoSlider = () => {
    return (
        <Wrapper>
            <SliderContainer>
                <SlideTrack>
                    <SlideImg src={corpLogo} alt="" />
                    <SlideImg src={corpLogo} alt="" />
                    <SlideImg src={corpLogo} alt="" />
                    <SlideImg src={corpLogo} alt="" />
                    <SlideImg src={corpLogo} alt="" />


                </SlideTrack>
                <SlideTrack>
                    <SlideImg2 src={corpLogo} alt="" />
                    <SlideImg2 src={corpLogo} alt="" />
                    <SlideImg2 src={corpLogo} alt="" />
                    <SlideImg2 src={corpLogo} alt="" />
                    <SlideImg2 src={corpLogo} alt="" />
                    <SlideImg2 src={corpLogo} alt="" />
                    <SlideImg2 src={corpLogo} alt="" />

                </SlideTrack>
            </SliderContainer>
        </Wrapper>
    )
}

export default MainLogoSlider;