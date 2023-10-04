import React from "react";
import styled from "styled-components";
import Body from "../../Components/Common/Body";
import PortfolioGrid from "./PortfolioGrid"
import {motion, useScroll} from "framer-motion"
import {ReactComponent as LogoIcon} from '../../assets/logo/STUDIO-I.svg'


const MainBody = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color : white;
    height: 100vh;
 
`;
const ProgressBar = styled(motion.div)`
    position: fixed;
    top: 4rem;
    left: 0;
    right: 0;
    height: 10px;
    background-color: black;
    transform-origin: 0%;
`;
const StyledLogoIcon = styled(LogoIcon)`
    width: 500px;
    height: 200px;
    background-color: white;
`;
const LogoContainer = styled.div`
    height: auto;
    display: flex;
    /* background-color: white; */
`;

// const MainLogo = styled.

const Wrapper = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    justify-content: space-between;
    /* max-width: 100%; */
    flex-wrap: wrap; /* 화면 크기가 작아지면 아래로 내려갈 수 있도록 설정 */
`;
const variants = {
    start: { pathLength: 0, fill: "rgba(255, 255, 255,0)" },
    end: { pathLength: 1, fill: "rgba(255, 255, 255, 1)" }
  };

const PromotionMainpage = () => {
    const {scrollYProgress} = useScroll();
    const PromotionMainpageContent=()=>{
        return (
            <>
            <ProgressBar style = {{scaleX:scrollYProgress}}></ProgressBar>
                <MainBody>
                    <LogoContainer>
                        <StyledLogoIcon />
                    </LogoContainer>
                </MainBody>
                <PortfolioGrid/>

            </>
        )
    }


    return(
        <Body>
            <PromotionMainpageContent/>

        </Body>
    )
}
export default PromotionMainpage;