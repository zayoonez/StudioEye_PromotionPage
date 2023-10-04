import React from "react";
import styled from "styled-components";
import Body from "../../Components/Common/Body";
import PortfolioGrid from "./PortfolioGrid"
import {motion, useScroll, useSpring} from "framer-motion"
import {ReactComponent as LogoIcon} from '../../assets/logo/STUDIO-I.svg'


const MainBody = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color : white; 
    height: 110vh;


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
                        <StyledLogoIcon>
                            <motion.path
                              initial="start"
                              animate="end"
                              variants={variants}
                              transition={{
                                  default: { duration: 1.8 },
                                  fill: { duration: 1, delay: 1.1 }
                                }}
                            
                            />
                        </StyledLogoIcon>
                    </LogoContainer>
                    
                </MainBody>
                <ProgressBar style = {{scaleX}}></ProgressBar>
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