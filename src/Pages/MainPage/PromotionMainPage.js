import React, { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";
import Body from "../../Components/Common/Body";
import PortfolioGrid from "./PortfolioGrid"
import {motion, useScroll, useSpring} from "framer-motion"
import {ReactComponent as LogoIcon} from '../../assets/logo/STUDIO-I_1.svg'
import CustomCursor from "../../Components/Common/CustomCursor";
import MainAnimation from "./MainAnimation";


const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const RotatingCircle = styled.div`
    height: 50px;
    width: 50px;
    background-color: red;
    border-radius: 50%;
    animation: ${rotate} 6s linear infinite;
    transform-origin: 50% 50%;
`;
const MainBody = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color : white; 
    height: 110vh;
`;

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
    height: auto;
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

    const variants = {
        start: { pathLength: 0, fill: "rgba(255, 255, 255,0)" },
        end: { pathLength: 1, fill: "rgba(255, 255, 255, 1)" }
      };

    
    const PromotionMainpageContent=()=>{
        return (
            <>            
                <MainBody>
                    <LogoContainer>
                        {/* <StyledLogoIcon>
                        </StyledLogoIcon> */}
                        {/* <AnimatedText >
                            STUDIO i
                        </AnimatedText> */}
                        <MainAnimation/>
                        {/* <RotatingCircle></RotatingCircle> */}
                        

                    </LogoContainer>
                    
                </MainBody>
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