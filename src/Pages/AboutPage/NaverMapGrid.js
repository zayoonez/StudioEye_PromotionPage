import React, {useEffect} from "react";
import styled from "styled-components";
import {motion, useAnimation, Variants} from "framer-motion";
import NaverMap from "../AboutPage/Components/NaverMap"
import AboutTitle from "./Components/AboutTitle";
import {useInView} from "react-intersection-observer";

const BoxContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 93vh;
    padding: 5%;
`;

const Div = styled(motion.div)`
    height: 50vh;
    width: 90%;
    margin-bottom: 2vh;
`;

const Text = styled(motion.text)`
    font-size: 1.4rem;
    width: 90%;
    margin-bottom: 1vh;
`;
const divVariant =  {
    animate: { opacity: 1, y:0},
    initial: { opacity: 0, y:100},
};
const textVariant =  {
    animate: { opacity: 1, y:0},
    initial: { opacity: 0, y:100},
};

  export default function NaverMapGrid() {
      const control = useAnimation();
      const [ref, inView] = useInView();

      useEffect(() => {
          if (inView) {
              control.start("animate");
          } else {
              control.start("initial");
          }

      }, [control, inView]);

    return (
      <BoxContainer>
          <AboutTitle title={"Location"}/>
          <Div
              ref = {ref}
              variants={divVariant}
              initial="initial"
              animate={control}
              transition={{
                  duration: 1,
                  delay: 1,
              }}
          ><NaverMap /></Div>
          <Text
              ref = {ref}
              variants={textVariant}
              initial="initial"
              animate={control}
              transition={{
                  duration: 1,
                  delay: 1.5,
              }}>위치: 서울시 광나루로 162 bs성수타워</Text>
          <Text
              ref = {ref}
              variants={textVariant}
              initial="initial"
              animate={control}
              transition={{
                  duration: 1,
                  delay: 1.5,
              }}>오시는길: 뚝섬역(2호선) 4번출구에서 도보 5분</Text>

          
      </BoxContainer>
    );
  }
