import React, {useRef} from "react";
import styled from "styled-components";
import {motion, useAnimation, useScroll, useSpring} from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import AboutTitle from "./Components/AboutTitle";
import HistorySect from "./Components/HistorySect";

const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black;
    padding: 5%;
    height: 150vh;
`;
const Title = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 300px;
    /* background-color: gray; */
    margin: 100px;
    color: white;
    font-size: 2rem;
`;
const Line = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 300px;
    /* background-color: gray; */
    margin: 100px;
    color: white;
    font-size: 2rem;
`;
const Text = styled(motion.text)`
    color: white;
`;

const ProgressBar = styled(motion.div)`
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    height: 10px;
    background-color: gray;
    /* transform-origin: 0%; */
    /* background: var(--accent); */
`;

export default function HistoryGrid() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

  return (
      <BoxContainer>
          <AboutTitle title={"회사 연혁"}/>
          <ProgressBar style = {{scaleX}}></ProgressBar>
          <HistorySect title={"회사 연혁"} content={"content"}/>
        <Text> dfdf </Text>
      </BoxContainer>
  );
}
