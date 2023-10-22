import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Body from "../../Components/Common/Body";
import {motion} from "framer-motion";
import {ReactComponent as LogoIcon} from "../../assets/logo/STUDIO-I.svg";
import {useNavigate} from "react-router-dom";


const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    
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
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap; 
    overflow: auto;
    
`;

const Content = styled(motion.img)`
    width: 45%;
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
        const contContainerRef = useRef(null);

        const changeCategory = (category) => {
            setSelectedCategory(category);
        };

        const navigate = useNavigate();

        const goToDetail = () => {
            navigate(`/detail`);
        };

        useEffect(() => {

                setContentToDisplay([
                    <Content onClick={() => goToDetail()} key={1} src="https://img.youtube.com/vi/EfQlvMi0hI8/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={2} src="https://img.youtube.com/vi/6ZBjuPlDxfo/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={3} src="https://img.youtube.com/vi/ZVBZ25nKlGM/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={4} src="https://img.youtube.com/vi/xil70dCTCBk/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={5} src="https://img.youtube.com/vi/MxMsTmmuWU0/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={6} src="https://img.youtube.com/vi/_SjnRbi4oRw/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={7} src="https://img.youtube.com/vi/EoNOXeDIr1Q/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={8} src="https://img.youtube.com/vi/HegtBR9-5Po/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={9} src="https://img.youtube.com/vi/LImkG00zmqM/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={10} src="https://img.youtube.com/vi/bcOO4bu7Alc/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={11} src="https://img.youtube.com/vi/wR0M-swQtNk/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={12} src="https://img.youtube.com/vi/DDMepE9i4K4/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={13} src="https://img.youtube.com/vi/5jAmdM2ArcA/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={14} src="https://img.youtube.com/vi/UtO0wanF-hI/maxresdefault.jpg" />,
                    <Content onClick={() => goToDetail()} key={15} src="https://img.youtube.com/vi/M-bPdrgdl0w/maxresdefault.jpg" />,
                ]);

        }, [selectedCategory])

        return (
            <>
                <BoxContainer>
                    <ContContainer
                        variants={CategoryVariants}
                        initial="initial"
                        animate="animate"
                        ref={contContainerRef}>
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