import React, {useEffect, useState} from "react";
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
    position: relative;
    
`;

const CategoryContainer = styled(motion.div)`
    height: 40vh;
    width: 20%;
    position: absolute;
    left: 1%;
    top: 1rem;
`;

const Category = styled(motion.div)`
    height: 20%;
    margin-bottom: 5%;
    font-weight:600;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
`;


const ContContainer = styled(motion.div)`
    height: 85vh;
    width: 75%;
    border-left: 1px solid black;
    display: flex;
    flex-wrap: wrap; 
    overflow: auto;
    margin-left: 30%;
    justify-content: center;
    
`;

const Content = styled(motion.img)`
    width: 80%;
    height: 35vh;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 5vh;
    margin-top: 2vh;
    cursor: pointer;
`;

const CategoryVariants =  {
    animate: { opacity: 1, transition: { duration: 2}},
    initial: { opacity: 0,},
};

const ArtworkMainpage = () => {

    const ArtworkMainpageContent=()=>{
        const [selectedCategory, setSelectedCategory] = useState("ALL");
        const [contentToDisplay, setContentToDisplay] = useState([]);

        const changeCategory = (category) => {
            setSelectedCategory(category);
        };

        useEffect(() => {
            if(selectedCategory === "ALL"){
                setContentToDisplay([
                    <Content key={1} src="https://img.youtube.com/vi/EfQlvMi0hI8/maxresdefault.jpg" />,
                    <Content key={2} src="https://img.youtube.com/vi/6ZBjuPlDxfo/maxresdefault.jpg" />,
                    <Content key={3} src="https://img.youtube.com/vi/ZVBZ25nKlGM/maxresdefault.jpg" />,
                    <Content key={4} src="https://img.youtube.com/vi/xil70dCTCBk/maxresdefault.jpg" />,
                    <Content key={5} src="https://img.youtube.com/vi/MxMsTmmuWU0/maxresdefault.jpg" />,
                    <Content key={6} src="https://img.youtube.com/vi/_SjnRbi4oRw/maxresdefault.jpg" />,
                    <Content key={7} src="https://img.youtube.com/vi/EoNOXeDIr1Q/maxresdefault.jpg" />,
                    <Content key={8} src="https://img.youtube.com/vi/HegtBR9-5Po/maxresdefault.jpg" />,
                    <Content key={9} src="https://img.youtube.com/vi/LImkG00zmqM/maxresdefault.jpg" />,
                    <Content key={10} src="https://img.youtube.com/vi/bcOO4bu7Alc/maxresdefault.jpg" />,
                    <Content key={11} src="https://img.youtube.com/vi/wR0M-swQtNk/maxresdefault.jpg" />,
                    <Content key={12} src="https://img.youtube.com/vi/DDMepE9i4K4/maxresdefault.jpg" />,
                    <Content key={13} src="https://img.youtube.com/vi/5jAmdM2ArcA/maxresdefault.jpg" />,
                    <Content key={14} src="https://img.youtube.com/vi/UtO0wanF-hI/maxresdefault.jpg" />,
                    <Content key={15} src="https://img.youtube.com/vi/M-bPdrgdl0w/maxresdefault.jpg" />,
                ]);
            }
            if (selectedCategory === "ENTERTAINMENT") {
                setContentToDisplay([
                    <Content key={1} src="https://img.youtube.com/vi/EfQlvMi0hI8/maxresdefault.jpg" />,
                    <Content key={2} src="https://img.youtube.com/vi/6ZBjuPlDxfo/maxresdefault.jpg" />,
                    <Content key={3} src="https://img.youtube.com/vi/ZVBZ25nKlGM/maxresdefault.jpg" />,
                    <Content key={4} src="https://img.youtube.com/vi/xil70dCTCBk/maxresdefault.jpg" />,
                    <Content key={5} src="https://img.youtube.com/vi/MxMsTmmuWU0/maxresdefault.jpg" />,
                    <Content key={6} src="https://img.youtube.com/vi/_SjnRbi4oRw/maxresdefault.jpg" />,
                    <Content key={7} src="https://img.youtube.com/vi/EoNOXeDIr1Q/maxresdefault.jpg" />,
                    <Content key={8} src="https://img.youtube.com/vi/HegtBR9-5Po/maxresdefault.jpg" />,
                    <Content key={9} src="https://img.youtube.com/vi/LImkG00zmqM/maxresdefault.jpg" />,
                    <Content key={10} src="https://img.youtube.com/vi/bcOO4bu7Alc/maxresdefault.jpg" />,
                ]);
            } else if (selectedCategory === "DRAMA") {
                setContentToDisplay([
                    <Content key={1} src="https://img.youtube.com/vi/wR0M-swQtNk/maxresdefault.jpg" />,
                ]);
            } else if (selectedCategory === "CHANEL OPERATING") {
                setContentToDisplay([
                    <Content key={1} src="https://img.youtube.com/vi/DDMepE9i4K4/maxresdefault.jpg" />,
                    <Content key={2} src="https://img.youtube.com/vi/5jAmdM2ArcA/maxresdefault.jpg" />,
                    <Content key={3} src="https://img.youtube.com/vi/UtO0wanF-hI/maxresdefault.jpg" />,
                ]);
            } else if (selectedCategory === "DOCUMENTARY") {
                setContentToDisplay([
                    <Content key={1} src="https://img.youtube.com/vi/M-bPdrgdl0w/maxresdefault.jpg" />,
                ]);
            }
        }, [selectedCategory])

        return (
            <>
                <BoxContainer>
                    <CategoryContainer
                    variants={CategoryVariants}
                    initial="initial"
                    animate="animate"
                    >
                        <Category onClick={() => changeCategory("ENTERTAINMENT")}>ENTERTAINMENT</Category>
                        <Category onClick={() => changeCategory("DRAMA")}>DRAMA</Category>
                        <Category onClick={() => changeCategory("CHANEL OPERATING")}>CHANEL OPERATING</Category>
                        <Category onClick={() => changeCategory("DOCUMENTARY")}>DOCUMENTARY</Category>
                    </CategoryContainer>
                    <ContContainer
                        variants={CategoryVariants}
                        initial="initial"
                        animate="animate">
                        {contentToDisplay}
                    </ContContainer>
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