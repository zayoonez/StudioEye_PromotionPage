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
`;

const divVariant =  {
    animate: { opacity: 1, y:0},
    initial: { opacity: 0, y:100},
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
      </BoxContainer>
    );
  }
