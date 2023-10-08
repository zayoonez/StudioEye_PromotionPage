import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import image1 from "../../assets/images/1.jpeg";
import image2 from "../../assets/images/2.jpeg";
import image3 from "../../assets/images/3.jpeg";
import image4 from "../../assets/images/4.jpeg";
import image5 from "../../assets/images/5.jpeg";

const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    height: 40vh;
`;
const Text = styled(motion.text)`
    color: black;
`;


  
  export default function BasicInfoGrid() {
    return (
      <BoxContainer>
        <Text> dfdf </Text>
      </BoxContainer>
    );
  }
