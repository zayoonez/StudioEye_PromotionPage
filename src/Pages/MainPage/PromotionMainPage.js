import React, { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";
import Body from "../../Components/Common/Body";
import PortfolioGrid from "./PortfolioGrid"
import {motion, useScroll, useSpring} from "framer-motion"
import {ReactComponent as LogoIcon} from '../../assets/logo/STUDIO-I_1.svg'
import CustomCursor from "../../Components/Common/CustomCursor";
import MainAnimation from "./MainAnimation";
import MainLogoAnimation from "./MainLogoAnimation";
import {HiArrowLongRight} from "react-icons/hi2";
import { useInView } from 'react-intersection-observer'; 
import LetterAnimation from "../../Components/Common/LetterAnimation";

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
const MainBody = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color : white; 
    height: 100vh - 4rem;
`;
const UnderlinedButton = styled.button`
    text-decoration: underline;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 13px;
    color: #333; /* 텍스트 색상을 원하는 색상으로 변경하세요 */
`;
const AboutContainer = styled.div`
    width: 40%;
    height: 200px;
    margin-left: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
`;
const ArrowIcon = styled(HiArrowLongRight)`
    font-size: 50px;
    color: red;
    border-color: black;
`;

//media query 처리 하기 !!

const AboutUs = styled(motion.div)`
    font-size: 20px;
`;
const aboutvariants = {
    hidden: { opacity: 0, x: -30 }, // Initial state (hidden)
    visible: { opacity: 1, x: 0 }
}
// const Featuredprojects = styled.div`
//     text-align: center;
//     font-size: 30px;
//     font-weight: bold;
// `;
const AnimatedText = styled.div`
    font-size: 100px;
    width: 500px;
    height: 200px;
    font-weight: bold;
`;

const ProgressBar = styled(motion.div)`
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    height: 10px;
    background-color: gray;
    /* transform-origin: 0%; */
    /* background: var(--accent); */
`;

const StyledLogoIcon = styled(LogoIcon)`
    width: 500px;
    height: 200px;
    background-color: white;
`;
const LogoContainer = styled.div`
    height: 100vh;
    display: flex;
    background-color: white;
`;
const Wrapper = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    justify-content: space-between;
    /* max-width: 100%; */
    flex-wrap: wrap; /* 화면 크기가 작아지면 아래로 내려갈 수 있도록 설정 */
`;
// const variants = {
//     start: { pathLength: 0, fill: "rgba(255, 255, 255,0)" },
//     end: { pathLength: 1, fill: "rgba(255, 255, 255, 1)" }
//   };
const PromotionMainpage = () => {
    const {scrollYProgress} = useScroll();
    
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const PromotionMainpageContent=()=>{
        return (
            <>            
                {/* <MainBody> */}
                    <LogoContainer>
                        {/* <StyledLogoIcon>
                        </StyledLogoIcon> */}
                        {/* <AnimatedText >
                            STUDIO i
                        </AnimatedText> */}
                        <MainLogoAnimation/>
                        {/* <RotatingCircle></RotatingCircle> */}
                        

                    </LogoContainer>
                    
                {/* </MainBody> */}

                {/* <Featuredprojects><LetterAnimation text="Featured Projects"></LetterAnimation></Featuredprojects> */}
                <PortfolioGrid/>
                <ProgressBar style = {{scaleX}}></ProgressBar>


            </>
        )
    }


    return(
        <Body>

            <PromotionMainpageContent/>
            <CustomCursor />

        </Body>
    )
}
export default PromotionMainpage;