import React, { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";
import Body from "../../Components/Common/Body";
import PortfolioGrid from "./PortfolioGrid"
import {motion, useScroll, useSpring} from "framer-motion"
import {ReactComponent as LogoIcon} from '../../assets/logo/STUDIO-I_1.svg'
import CustomCursor from "../../Components/Common/CustomCursor";
import MainAnimation from "./MainAnimation";
import MainLogoAnimation from "./MainLogoAnimation";
import LogoBanner from "./LogoBanner";
import {HiArrowLongRight} from "react-icons/hi2";
import { useInView } from 'react-intersection-observer'; 
import LetterAnimation from "../../Components/Common/LetterAnimation";

//media query 처리 하기 !!

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

const LogoContainer = styled.div`
    height: 100vh;
    display: flex;
    background-color: white;
`;

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
                        

                    </LogoContainer>
                    
                {/* </MainBody> */}

                {/* <Featuredprojects><LetterAnimation text="Featured Projects"></LetterAnimation></Featuredprojects> */}
                <PortfolioGrid/>
                <LogoBanner/>
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