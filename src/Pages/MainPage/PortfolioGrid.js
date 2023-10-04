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
`;


const Item = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 300px;
    /* background-color: gray; */
    margin: 100px;

    /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
`;
const Thumbnail  = styled.img`
    width: 700px;
    height: 600px;
`;

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition : {duration : 0.7} },
    hidden: { opacity: 0, scale: 0},
  }

  const Image = ({ id }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);
  
    const imageSrc = require(`../../assets/images/${id}.jpeg`);

    return (
         <Item
          ref = {ref}
          src={imageSrc}
          variants={boxVariant}
          initial="hidden"
          animate={control}>
            <Thumbnail src={imageSrc} alt = {'thumnail${id}'}></Thumbnail>

          </Item>      

    );
  };
  
  export default function PortfolioGrid() {
    return (
      <BoxContainer>
        {[1, 2, 3, 4, 5].map((image) => (
            <Image key = {image} id={image}/>   
        ))}

        {/* <Box num={1} />
        <Box num={2} />
        <Box num={3} /> */}
        
      </BoxContainer>
    );
  }
