import React, {useRef} from "react";
import styled from "styled-components";
import {motion, useAnimation, useScroll, useSpring} from "framer-motion";

import AboutTitle from "./Components/AboutTitle";
import HistorySect from "./Components/HistorySect";

const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5%;
    height: 150vh;
`;

const Text = styled(motion.text)`
    color: white;
`;


export default function HistoryGrid() {

  return (
      <BoxContainer>
          <AboutTitle title={"회사 연혁"}/>
          <HistorySect title={"회사 연혁"} content={"content"}/>
        <Text> dfdf </Text>
      </BoxContainer>
  );
}
