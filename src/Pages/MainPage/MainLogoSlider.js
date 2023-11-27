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
    100% { transform: translateX(-1000%); }
`;

const SliderContainer = styled.div`
    overflow: hidden; // 여기로 overflow 이동
`;

const SlideTrack = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    gap: 3em;
    overflow: hidden;
`;

const SlideImg = styled.image`
    height: 100px;
    animation: ${ScrollAnimation} 30s linear infinite;
`;

const MainLogoSlider = () => {
    return (
        <Wrapper>
            <SliderContainer>
                <SlideTrack>
                    <SlideImg src={corpLogo} alt="">
                    </SlideImg>
                    <SlideImg>
                        <img src={corpLogo} alt="" />
                    </SlideImg>
                    <SlideImg>
                        <img src={corpLogo} alt="" />
                    </SlideImg>
                    <SlideImg>
                        <img src={corpLogo} alt="" />
                    </SlideImg>                    
                </SlideTrack>
            </SliderContainer>
            <SliderContainer>
                <SlideTrack>
                    <SlideImg>
                        <img src={corpLogo} alt="" />
                    </SlideImg>
                    <SlideImg>
                        <img src={corpLogo} alt="" />
                    </SlideImg>
                    <SlideImg>
                        <img src={corpLogo} alt="" />
                    </SlideImg>
                    <SlideImg>
                        <img src={corpLogo} alt="" />
                    </SlideImg>                    
                </SlideTrack>
            </SliderContainer>
        </Wrapper>
    )
}

export default MainLogoSlider;