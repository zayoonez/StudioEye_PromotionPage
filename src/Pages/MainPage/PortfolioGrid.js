import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import DetailTransition from "../../Components/Common/DetailTransition";
import { useInView } from 'react-intersection-observer'; 
import LetterAnimation from "../../Components/Common/LetterAnimation";
import Arrow from "../../assets/icon/Arrow2.png"
import axios from "axios";

const ArrowImg = styled.img`
    width: 60px;
    height: 30px;
    position: relative;
    display: flex;
    margin-left: 50px;
    
`;

// const Line = styled(motion.div)`
//     background-color: red;
//     /* width: 100vw; */
//     height: 7px;
//     //아 여기 . . problem
//     margin-top: 30px;
//     border-radius: 5px;
// `;
// const lineVariants = {
//     hidden: { width: 0 }, // 초기 너비를 0으로 설정하여 숨깁니다.
//     visible: { width: '100vw' } ,
// }
const Section = styled(motion.div)`
    display: flex;
    /* scroll-snap-align: center; */
    /* perspective: 500px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 10vh;
    /* margin-left: 30px; */
`;
const VideoSection = styled(motion.div)`
    padding-top : 10px;
    /* height: 100vh; */
    display: flex;
    /* padding-left: 100px; */
    width: 100%;
    /* justify-content: space-between; */
`;
const infovariants = {
    hidden: { opacity: 0, x: 20 }, // Initial state (hidden)
    visible: { opacity: 1, x :0},  // Animate to this state (visible)
}
const thumbnailvariants = {
    hidden: { opacity: 0, x: -20 }, // Initial state (hidden)
    visible: { opacity: 1, x :0},  // Animate to this state (visible)
}
const Featuredprojects = styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
`;
const ThumbnailImage = styled(motion.img)`
    width: 100%;
    border-radius : 20px;
    margin-bottom: 20px;
`;
const Year = styled(motion.div)`
    font-size: 90px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 80px;
    
`
const BasicInfo = styled(motion.div)`
    width: 80%;
    margin-left: 50px;
    font-size: 25px;
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;

`;
const NumThumbnail = styled(motion.h2)`
    margin: 0;
    color: var(--accent);
    left: calc(50% + 130px);
    font-size: 56px;
    font-weight: 700;
    letter-spacing: -3px;
    line-height: 1.2;
    position: absolute;
`;

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

//back 연결시 orchestration 적용 stagger
const PortfolioGrid = () => {
    // const [ref, inView] = useInView(); // Hook to detect when Year is in view
    const [ref2, inView2] = useInView(); // Hook to detect when Year is in view
    const [ref3, inView3] = useInView(); // Hook to detect when Year is in view
    const { ref, inView } = useInView({
        threshold: 0.2,
        // triggerOnce: true,
      });
    const [data, setData] = useState([]);
    const [imgData, setImgData] = useState([]);

    useEffect(() => {

        axios.get('https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/projects')
            .then(response => {
                const data = response.data;
                console.log(data);
                const objects = [];
                const imgObjects = [];

                for(let i = 0; i < 5; i++) {
                    const obj = {
                        id: data.data[i].id,
                        overView: data.data[i].overView,
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
            <Section ref={ref}>
                
                <Featuredprojects><LetterAnimation text="Our Projects"></LetterAnimation></Featuredprojects>

                {data.map((item, i) => (
                    <VideoSection >
                        <Link to={`/detail/${item.id}`}>
                            <ThumbnailImage
                                variants={thumbnailvariants}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                transition={{ duration: 1 }}
                                src={item.img}/>
                        </Link>
                        {/* <InfoContainer> */}
                        <BasicInfo
                            variants={infovariants}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            transition={{ duration: 1 }}
                        >{item.overView}
                        </BasicInfo>
                        {/* <ArrowImg src={Arrow} /> */}
                        {/* </InfoContainer> */}
                    </VideoSection>
                ))}
                {/*<VideoSection >*/}
                {/*    <Link to={'/detail'}>*/}
                {/*        <ThumbnailImage*/}
                {/*        variants={thumbnailvariants}*/}
                {/*        initial="hidden"*/}
                {/*        animate={inView ? "visible" : "hidden"}                        */}
                {/*        transition={{ duration: 1 }}  */}
                {/*        src="https://img.youtube.com/vi/bcOO4bu7Alc/maxresdefault.jpg"/>*/}
                {/*    </Link>*/}
                {/*    /!* <InfoContainer> *!/*/}
                {/*        <BasicInfo*/}
                {/*        variants={infovariants}*/}
                {/*        initial="hidden"*/}
                {/*        animate={inView ? "visible" : "hidden"}                        */}
                {/*        transition={{ duration: 1 }}*/}
                {/*        >개그맨 황제성이 출연해 다양한 소재에 대한 궁금증을 해결하기 위해 */}
                {/*            백과사전 속으로 떠나는 탐험! DK백과사전 기반 필수 지식을 알기 쉽고 재미있게 풀어낸 어린이 지식 충전 예능 콘텐츠*/}
                {/*        </BasicInfo>*/}
                {/*        /!* <ArrowImg src={Arrow} /> *!/*/}
                {/*    /!* </InfoContainer> *!/*/}
                {/*</VideoSection>*/}

                {/*<VideoSection >*/}
                {/*    <Link to={'/detail'} >*/}
                {/*        <ThumbnailImage */}
                {/*        variants={thumbnailvariants}*/}
                {/*        initial="hidden"*/}
                {/*        animate={inView ? "visible" : "hidden"} */}
                {/*        transition={{ duration: 1.5 }}  */}
                {/*        src="https://img.youtube.com/vi/HegtBR9-5Po/maxresdefault.jpg" />*/}
                {/*    </Link>*/}
                {/*    <BasicInfo*/}
                {/*    variants={infovariants}*/}
                {/*    initial="hidden"*/}
                {/*    animate={inView ? "visible" : "hidden"} */}
                {/*    transition={{ duration: 1.5 }}*/}
                {/*    >tvND X 글로벌 스포츠 브랜드 언더아머 브랜디드 콘텐츠*/}
                {/*        총상금 5,000만원이 걸린 고등학생 스포츠 서바이벌 프로그램*/}
                {/*        사전 선발된 24명의 고교생들이 3박 4일 동안 다양한 게임을 통해*/}
                {/*        대결을 펼치고 점수를 얻는 서바이벌 예능*/}
                {/*        </BasicInfo>*/}
                {/*</VideoSection>*/}
                {/*<VideoSection >*/}
                {/*    <Link to={'/detail'}>*/}
                {/*        <ThumbnailImage */}
                {/*        variants={thumbnailvariants}*/}
                {/*        initial="hidden"*/}
                {/*        animate={inView ? "visible" : "hidden"} */}
                {/*        transition={{ duration: 2 }}  */}
                {/*        src="https://img.youtube.com/vi/xil70dCTCBk/maxresdefault.jpg" />*/}
                {/*    </Link>*/}
                {/*    <BasicInfo*/}
                {/*    variants={infovariants}*/}
                {/*    initial="hidden"*/}
                {/*    animate={inView ? "visible" : "hidden"} */}
                {/*    transition={{ duration: 2 }}*/}
                {/*    >tvND X 글로벌 스포츠 브랜드 언더아머 브랜디드 콘텐츠*/}
                {/*        총상금 5,000만원이 걸린 고등학생 스포츠 서바이벌 프로그램*/}
                {/*        사전 선발된 24명의 고교생들이 3박 4일 동안 다양한 게임을 통해*/}
                {/*        대결을 펼치고 점수를 얻는 서바이벌 예능</BasicInfo>*/}
                {/*</VideoSection>*/}
                {/*<VideoSection>*/}
                {/*    <Link to={'/detail'} >*/}
                {/*        <ThumbnailImage */}
                {/*        variants={thumbnailvariants}*/}
                {/*        initial="hidden"*/}
                {/*        animate={inView ? "visible" : "hidden"} */}
                {/*        transition={{ duration: 3 }}  */}
                {/*        src="https://img.youtube.com/vi/MxMsTmmuWU0/maxresdefault.jpg" />*/}
                {/*    </Link>*/}
                {/*    <BasicInfo>tvND X 글로벌 스포츠 브랜드 언더아머 브랜디드 콘텐츠*/}
                {/*        총상금 5,000만원이 걸린 고등학생 스포츠 서바이벌 프로그램*/}
                {/*        사전 선발된 24명의 고교생들이 3박 4일 동안 다양한 게임을 통해*/}
                {/*        대결을 펼치고 점수를 얻는 서바이벌 예능</BasicInfo>*/}
                {/*</VideoSection>*/}
                {/* <Year>2021</Year> */}
            </Section>
        </>


    )
}


export default PortfolioGrid;