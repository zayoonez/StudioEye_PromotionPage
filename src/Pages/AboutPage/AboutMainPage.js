import React from "react";
import styled from "styled-components";
import Body from "../../Components/Common/Body";
import BasicInfoGrid from "./BasicInfoGrid";
import HistoryGrid from "./HistoryGrid";
import CoOpInfoGrid from "./CoOpInfoGrid";
import {motion} from "framer-motion";
import {ReactComponent as LogoIcon} from "../../assets/logo/STUDIO-I.svg";

const MainBody = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 110vh;
`;

const StyledLogoIcon = styled(LogoIcon)`

    width: 500px;
    height: 200px;
    background-color: white;
`;
const variants = {
    start: { pathLength: 0, fill: "rgba(255, 255, 255,0)" },
    end: { pathLength: 1, fill: "rgba(255, 255, 255, 1)" }
};

const AboutMainpage = () => {

    const AboutMainpageContent=()=>{
        return (
            <>
                <MainBody>
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
                </MainBody>
                <BasicInfoGrid />
                <HistoryGrid />
                <CoOpInfoGrid />
            </>
        )
    }


    return(
        <Body>
            <AboutMainpageContent/>
        </Body>
    )
}
export default AboutMainpage;