import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import DetailTransition from "../../Components/Common/DetailTransition";

const Section = styled.div`
    /* height: 100vh; */
    display: flex;
    /* justify-content: center;
    align-items: center; */
    position: relative;
    scroll-snap-align: center;
    perspective: 500px;
    flex-direction: column;
    margin-left: 30px;
`;
const VideoSection = styled.div`
    padding-top : 10px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ThumbnailImage = styled(motion.img)`
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    width: 70%;
    /* height: 80%; */
    border-radius : 20px;
    margin-bottom: 20px;
`;
const Year = styled.div`
    font-size: 90px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 50px;
    
`
const Box = styled.div`
  width: 600px;
  height: 400px;
  position: relative;
  max-height: 90vh;
  margin: 20px;
  background: var(--white);
  overflow: hidden;
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

function Image({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    const imageSrc = require(`../../assets/images/${id}.jpeg`);

    return (
        <Section>
            <Box ref={ref}>
                <Link to={'/detail'}>
                    <ThumbnailImage src={imageSrc} alt={`thumbnail${id}`} />
                </Link>
            </Box>
            <NumThumbnail ref={ref} style={{ y }}>{`#00${id}`}</NumThumbnail>
        </Section>


    );
}
const PortfolioGrid = () => {
    const [isTransitioning, setIsTransitioning] = useState(false);


    const handlePageTransition = () => {
        setIsTransitioning(true);
    };
    return (
        <>
            <Section>
                <Year>2023</Year>
                    <Link to={'/detail'} onClick={handlePageTransition}>
                    <VideoSection >
                        <ThumbnailImage src="https://img.youtube.com/vi/bcOO4bu7Alc/maxresdefault.jpg"/>
                    </VideoSection>

                    </Link>

            </Section>

            <Section>
                <Year>2022</Year>
                <VideoSection>
                    <ThumbnailImage src="https://img.youtube.com/vi/HegtBR9-5Po/maxresdefault.jpg" />

                </VideoSection>
                <VideoSection>
                    <ThumbnailImage src="https://img.youtube.com/vi/xil70dCTCBk/maxresdefault.jpg" />
                </VideoSection>
                <VideoSection>
                    <ThumbnailImage src="https://img.youtube.com/vi/MxMsTmmuWU0/maxresdefault.jpg" />
                </VideoSection>
            </Section>
            <Section>
                <Year>2021</Year>
                <VideoSection>
                <ThumbnailImage src="https://img.youtube.com/vi/bcOO4bu7Alc/maxresdefault.jpg" />
                </VideoSection>
            </Section>
        </>


    )
}


export default PortfolioGrid;