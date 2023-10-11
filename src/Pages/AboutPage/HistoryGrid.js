import React, {useRef} from "react";
import styled from "styled-components";
import {motion, useAnimation, useScroll, useSpring} from "framer-motion";

import AboutTitle from "./Components/AboutTitle";
import HistorySect from "./Components/HistorySect";

const BoxContainer = styled(motion.div)`
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    border: 1px solid gray;
    padding: 5%;
`;

const Li = styled(motion.li)`
    list-style-type: none;
    border: 1px solid blue;
    margin: 2rem;
    cursor: pointer; 
`;

const ContentDiv = styled(motion.div)`
    border: 1px solid blue;
    margin: 2rem;
    display: flex;
    height: 70vh;
    width: 90%;
`;
const LeftDiv = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 50%;
`;
const LineDiv = styled(motion.div)`
    border: 1px solid black;
    width: 0.3rem;
    background-color: black;
    border-radius: 40px;
    margin-left: 10%;
`;
const RightDiv = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 50%;
`;

const linePath = "M10 10 L90 10";

const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 2 } },
};

export default function HistoryGrid() {

  return (
      <BoxContainer>
          <AboutTitle title={"HISTORY"}/>
          <ContentDiv>
              <LineDiv></LineDiv>
              <HistorySect content={"tt"} title={"tt"}></HistorySect>
          </ContentDiv>
      </BoxContainer>
  );
}
