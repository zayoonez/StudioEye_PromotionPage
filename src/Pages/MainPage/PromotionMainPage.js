import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Body from "../../Components/Common/Body";
import PortfolioGrid from "./PortfolioGrid"
import { motion, useScroll, useSpring } from "framer-motion"
import CustomCursor from "../../Components/Common/CustomCursor";
import MainLogoAnimation from "./MainLogoAnimation";

const ProgressBar = styled(motion.div)`
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    height: 10px;
    background-color: gray;
`;

const LogoContainer = styled.div`
    height: 100vh;
    display: flex;
    background-color: white;
`;

const PromotionMainpage = () => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const PromotionMainpageContent = () => {
        return (
            <>
                <LogoContainer>
                    <MainLogoAnimation />
                </LogoContainer>
                <PortfolioGrid />
                <ProgressBar style={{ scaleX }}></ProgressBar>
            </>
        )
    }


    return (
        <Body>
            <PromotionMainpageContent />
            <CustomCursor />
        </Body>
    )
}
export default PromotionMainpage;