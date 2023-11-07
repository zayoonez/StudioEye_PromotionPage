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
    height: 60rem;
    padding: 5%;
    
     @media(max-width: 390px){
    height: 45rem;
    }
`;

const Div = styled(motion.div)`
    height: 32rem;
    width: 90%;
    margin-bottom: 2rem; 
    border: 1px solid red;
    
    @media(max-width: 520px){
    height: 20rem;
    }
    
    @media(max-width: 390px){
    height: 16rem;
    margin-bottom: 1rem; 
    }
`;

const Text = styled(motion.text)`
    font-size: 1.4rem;
    width: 90%;
    margin-bottom: 1rem;
    
    @media(max-width: 520px){
    height: 1rem;
    }
    
    @media(max-width: 390px){
    font-size: 0.75rem;
    }
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
