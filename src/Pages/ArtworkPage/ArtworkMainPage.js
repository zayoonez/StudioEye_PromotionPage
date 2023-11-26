import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Body from "../../Components/Common/Body";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import studioi from '../../assets/logo/mainLogo.png'


const BoxContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    height: 90vh;
    transition: background 0.3s; /* 배경 전환에 트랜지션 적용 */   
`;

const Text = styled.text`
    color: #ff530E;
    font-size: 3.5rem;
    font-weight: 600;
    margin-top: 2rem;
`;
const Client = styled.text`
    font-size: 1rem;
`;
const Title = styled.text`
    margin-top: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
`;
const Background= styled.div`
    transition: background 0.6s; /* 배경 전환에 트랜지션 적용 */
    position: absolute;
    bottom: calc(10vh - 4rem);
    width: ${props => props.mainWidth}px;
    border: 1px solid red;
    z-index: 1;
    
`;

const ContContainer = styled(motion.div)`
    margin-top: 5vh;
    height: 50vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap; 
    overflow: auto;
    z-index: 2;
`;
const Div = styled.div`
    width: 29%;
    margin-left: 2%;
    margin-right: 2%;
    margin-bottom: 5vh;
    margin-top: 2vh;
`;
const Content = styled(motion.img)`
    width: 100%;
    aspect-ratio: 1024 / 720;
    cursor: pointer;
`;

const Img = styled(motion.img)`
    aspect-ratio: 1024 / 720;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 100%);
    pointer-events: none;
    z-index: 1;
`;

const CategoryVariants =  {
    animate: { opacity: 1, transition: { duration: 2}},
    initial: { opacity: 0,},
};

const ArtworkMainpage = () => {

    const ArtworkMainpageContent=()=>{
        const [data, setData] = useState([]);
        const contContainerRef = useRef(null);
        const [hoveredItemId, setHoveredItemId] = useState(studioi);
        const [mainWidth, setMainWidth] = useState(0);

        const navigate = useNavigate();

        const goToDetail = (id) => {
            navigate(`/detail/${id}`);
        };

        useEffect(() => {

            axios.get(`/api/projects`)

                .then(response => {
                    const data = response.data;
                    console.log(data);
                    console.log(data.data[0]);
                    const objects = [];
                    const imgObjects = [];

                    for(let i = data.data.length-1; i >= 0; i--) {
                        const obj = {
                            id: data.data[i].id,
                            title: data.data[i].name,
                            client: data.data[i].client,
                            img: data.data[i].imageUrlList[0]
                        };
                        objects.push(obj);
                    }
                    setData(objects);
                })
                .catch(error => {
                    console.error(error);
                });

        }, [])

        useEffect(() => {
            // 화면 크기확인
            const handleResize = () => {
                const screenWidth = window.innerWidth;
                if (screenWidth > 1180) {
                    setMainWidth(1180);

                } else {
                    // 1184px 이하일 경우 추가 너비를 0으로 설정
                    setMainWidth(screenWidth);
                }
            };

            // 초기 로드와 화면 크기 변경 시에도 적용
            handleResize();
            window.addEventListener('resize', handleResize);

            // 컴포넌트 언마운트 시 리스너 해제
            return () => {
                window.removeEventListener('resize', handleResize);
            };

        }, []);

        return (
            <>
                <BoxContainer>
                    <Text>Contents</Text>
                    <ContContainer
                        variants={CategoryVariants}
                        initial="initial"
                        animate="animate"
                        ref={contContainerRef}>
                        {data.map((item, i) => (
                            <Div>
                                <Content onClick={() => goToDetail(item.id)}
                                         onMouseOver={() => setHoveredItemId(item.img)}
                                         onMouseOut={() => setHoveredItemId(studioi)}
                                         key={item.id} src={item.img} />
                                <div>
                                <Client>{item.client}</Client>
                                </div>
                                <Title>{item.title}</Title>
                            </Div>
                        ))}
                        {/*{contentToDisplay}*/}
                    </ContContainer>
                    <Background>
                        <Img src={hoveredItemId}/>
                    </Background>
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