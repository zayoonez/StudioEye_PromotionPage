import React from "react";
import styled from "styled-components";
import Body from "../../Components/Common/Body";
import {motion} from "framer-motion";
import {ReactComponent as LogoIcon} from "../../assets/logo/STUDIO-I.svg";


const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    padding-right: 8vw;
`;

const CategoryContainer = styled(motion.div)`
    height: 45vh;
    width: 25vw;
    position: absolute;
    left: 5vw;
    top: 5rem;
`;

const Category = styled(motion.div)`
    width: 100%;
    height: 20%;
    margin-bottom: 5%;
    font-weight:600;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
`;


const ContentContainer = styled(motion.div)`
    height: 85vh;
    width: 60vw;
    position: absolute;
    right: 8vw;
    top: 5rem;
    border-left: 1px solid black;
    display: flex;
    flex-wrap: wrap; 
    overflow: auto;
`;

const Content = styled(motion.div)`
    width: 45%;
    margin: 2%;
    border: 1px solid black;
    height: 45%;
`;

const ArtworkMainpage = () => {

    const ArtworkMainpageContent=()=>{
        return (
            <>
                <BoxContainer>
                    <CategoryContainer>
                        <Category>ENTERTAINMENT</Category>
                        <Category>DRAMA</Category>
                        <Category>CHANEL OPERATING</Category>
                        <Category>DOCUMENTARY</Category>
                    </CategoryContainer>
                    <ContentContainer>
                        <Content></Content>
                        <Content></Content>
                        <Content></Content>
                        <Content></Content>
                    </ContentContainer>
                </BoxContainer>
            </>
        )
    }


    return(
        <Body>
            <ArtworkMainpageContent/>
        </Body>
    )
}
export default ArtworkMainpage;