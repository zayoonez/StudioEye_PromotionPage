import React, {
    useRef,
    useState,
    useLayoutEffect,
    useCallback,
    useEffect
  } from "react";
import Body from "../../Components/Common/Body";
import styled, {keyframes} from "styled-components";
import {   motion,
    useViewportScroll,
    useTransform,
    useSpring,
    useMotionValue} from "framer-motion";
import ResizeObserver from "resize-observer-polyfill";
import MainAnimation from "../MainPage/MainAnimation";
import DetailTransition from "../../Components/Common/DetailTransition";
import YouTube from "react-youtube";
import { useInView, InView } from "react-intersection-observer";
// import { useScrollPercentage } from "react-scroll-percentage";

const DetailBody = styled(Body)`
    display: flex;
    flex-direction: column;
`;

const PageBox = styled.div`
    height: calc(100vh - 4rem);
    position: relative;
    background-image: url("https://img.youtube.com/vi/HegtBR9-5Po/maxresdefault.jpg");
    background-size: cover;
    background: rgba(0, 0, 0, 0.5); /* 배경 이미지의 투명도 (0.5)를 조절합니다. */


  &::before {
    content: "";
    background: rgba(0, 0, 0, 0.5); /* 배경 이미지의 투명도 (0.5)를 조절합니다. */
    position: absolute;
    z-index: -1;
  }
  `;
const Contentt = styled.h2` 
    align-items: center;
`;
const Title = styled.div`
    font-size: 40px;
    font-weight: bold;
`;
const Client = styled.div`

`;
const OverView = styled.div`

`;
const ThumbnailImage = styled(motion.img)`
    width: 100%;
    border-radius : 20px;
    margin-bottom: 20px;
    opacity: 80%;
    height: 100%;
`;
const ScrollContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  will-change: transform;

  .ghost {
    width: 100vw;
  }
`;
const ContainerSection = styled(motion.section)`
  position: relative;
  height: 100vh;
  width: max-content;
  display: flex;
  align-items: center;
  padding: 0px 160px;
  background-color: black;
  border: 40px solid yellowgreen;
`;


const DetailContainer = styled.div`
  position: relative;
  display: flex;
  border: 15px solid black;

  & > *:not(:last-child) {
    margin-right: 45px;
  }
`;
const Example = styled.div`
  height: 40vh;
  width: 700px;
  background-color: royalblue;
  border: 15px solid magenta;
`;


const DetailPages = () => {
    // const scrollRef = useRef(null);
    // const ghostRef = useRef(null);
    // const [scrollRange, setScrollRange] = useState(0);
    // const [viewportW, setViewportW] = useState(0);

    // const scrollPerc = useMotionValue(0);

    // useLayoutEffect(() => {
    //     scrollRef && setScrollRange(scrollRef.current.scrollWidth);
    // }, [scrollRef]);

    // const onResize = useCallback((entries) => {
    //     for (let entry of entries) {
    //     setViewportW(entry.contentRect.width);
    //     }
    // }, []);

    // useLayoutEffect(() => {
    //     const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    //     resizeObserver.observe(ghostRef.current);
    //     return () => resizeObserver.disconnect();
    // }, [onResize]);

    // const { scrollYProgress } = useViewportScroll();

    // const [containerRef, percentage] = useScrollPercentage({
    //     /* Optional options */
    //     threshold: 0.1
    // });

    // useEffect(() => {
    //     scrollPerc.set(percentage);
    // }, [percentage]);

    // const transform = useTransform(
    //     scrollPerc,
    //     [0, 1],
    //     [0, -scrollRange + viewportW]
    // );
    // const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    // const spring = useSpring(transform, physics);

        return(
            <>
            {/* <div ref={containerRef}>
                <ScrollContainer>
                    {percentage}

                    <ContainerSection
                    ref={scrollRef}
                    style={{ x: spring }}
                    >
                    <DetailContainer>
                        <Example />
                        <Example />
                        <Example />
                        <Example />
                        <Example />
                    </DetailContainer>
                    </ContainerSection>
                </ScrollContainer>
                <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
            </div> */}
                 
            <DetailBody>
                <Title>
                    하이스코어
                </Title>
                <Client>
                    언더아머 X CJ ENM
                </Client>
                <OverView>
                    tvND X 글로벌 스포츠 브랜드 언더아머 브랜디드 콘텐츠
                    총상금 5,000만원이 걸린 고등학생 스포츠 서바이벌 프로그램
                    사전 선발된 24명의 고교생들이 3박 4일 동안 다양한 게임을 통해
                    대결을 펼치고 점수를 얻는 서바이벌 예능
                </OverView>


            </DetailBody>
            </>
        )
    }


export default DetailPages;

