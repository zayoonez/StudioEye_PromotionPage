import React from "react";
import styled from "styled-components";
import {motion, useAnimation, Variants} from "framer-motion";
import NaverMap from "../AboutPage/Components/NaverMap"
import AboutTitle from "./Components/AboutTitle";

const BoxContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
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
`;
const divVariant =  {
    animate: { opacity: 1, y:0},
    initial: { opacity: 0, y:100},
};
const textVariant =  {
    animate: { opacity: 1},
    initial: { opacity: 0},
};

  export default function NaverMapGrid() {

    return (
      <BoxContainer>
          <AboutTitle title={"Location"}/>
          <Div
              variants={divVariant}
              initial="initial"
              whileInView="animate"
              transition={{
                  duration: 1,
                  delay: 1,
              }}
          ><NaverMap /></Div>
          <Text
              variants={textVariant}
              initial="initial"
              whileInView="animate"
              transition={{
                  duration: 1,
                  delay: 1.5,
              }}>위치: 서울시 광나루로 162 bs성수타워</Text>
          <Text
              variants={textVariant}
              initial="initial"
              whileInView="animate"
              transition={{
                  duration: 1,
                  delay: 1.5,
              }}>오시는길: 뚝섬역(2호선) 4번출구에서 도보 5분</Text>
          
      </BoxContainer>
    );
  }
