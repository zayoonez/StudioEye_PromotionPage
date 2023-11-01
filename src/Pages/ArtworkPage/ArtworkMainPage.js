import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Body from "../../Components/Common/Body";
import {motion} from "framer-motion";
import {ReactComponent as LogoIcon} from "../../assets/logo/STUDIO-I.svg";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import MyAccordion from "../NoticePage/Components/MyAccordion";


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
        const [data, setData] = useState([]);
        const [imgData, setImgData] = useState([]);
        const contContainerRef = useRef(null);

        const navigate = useNavigate();

        const goToDetail = (id) => {
            navigate(`/detail/${id}`);
        };

        useEffect(() => {

            axios.get('https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/projects')

                .then(response => {
                    const data = response.data;
                    console.log(data);
                    console.log(data.data[0]);
                    const objects = [];
                    const imgObjects = [];

                    for(let i = 0; i < data.data.length; i++) {
                        const obj = {
                            id: data.data[i].id,
                            title: data.data[i].title,
                            img: data.data[i].imageUrlList[0]
                        };
                        for(let j=0; j<data.data[i].imageUrlList.length;j++){
                            const ImgObj = {
                                ImgId: data.data[i].id,
                                title: data.data[i].title
                            };

                            imgObjects.push(obj);
                        }

                        objects.push(obj);
                    }
                    setImgData(imgObjects);
                    setData(objects);
                })
                .catch(error => {
                    console.error(error);
                });

        }, [])

        return (
            <>
                <BoxContainer>
                    <ContContainer
                        variants={CategoryVariants}
                        initial="initial"
                        animate="animate"
                        ref={contContainerRef}>
                        {data.map((item, i) => (
                            <Content onClick={() => goToDetail(item.id)} key={item.id} src={item.img} />
                        ))}
                        {/*{contentToDisplay}*/}
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