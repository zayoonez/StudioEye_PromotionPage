import React, {useEffect} from "react";
import styled from "styled-components";
import {motion, useAnimation, Variants} from "framer-motion";
import {useInView} from "react-intersection-observer";
import Mission from "../../assets/images/Mission.png"

const BoxContainer = styled(motion.div)`
    display: flex;
    background-color: white;
    height: 30rem;
     justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    
    @media(max-width: 390px){
        height: 50rem;
    }
`;
const Title = styled.text`
    font-size: 54px;
    font-weight: 750;
    color: #FF530E;
    letter-spacing: 2px;
    margin-top: 100px;
    margin-bottom: 50px;
    text-align: center;
`;
const Img = styled(motion.img)`
    aspect-ratio: 1051 / 140;  
    position: absolute;
    top: 20rem;
    width: 70%;
    
    @media(max-width: 390px){
    left: 0%;
    height: 15rem;
    }
`;

const TitleText = styled(motion.div)`
    font-size: 4rem;
    position: absolute;
    right: 5rem;
    top: 25rem;
    font-weight: 600;
    
     @media(max-width: 780px){
    font-size: 3rem;
    }
    
     @media(max-width: 585px){
    font-size: 2rem;
    }
    
     @media(max-width: 390px){
    top: 15rem;
    right: 4rem;
    font-size: 2rem;
    }
    
    
`;
const BackText = styled(motion.div)`
    font-size: 14rem;
    color: gray;
    position: absolute;
    left: 5rem;
    top: 27rem;
    font-weight: 600;
    
    @media(max-width: 780px){
    font-size: 10rem;
    }
    
    @media(max-width: 585px){
    font-size: 6rem;
    }
    
    @media(max-width: 390px){
        top: 18rem;
        font-size: 6rem;
        left: 1rem;
    }
`;
const SubText = styled(motion.div)`
    font-size: 3rem;
    position: absolute;
    left: 5rem;
    top: 38rem;
    font-weight: 600;
    
    @media(max-width: 780px){
    font-size: 2rem;
    }
    
    @media(max-width: 585px){
    font-size: 1.5rem;
    }
    
    @media(max-width: 390px){
        top: 24rem;
        font-size: 1.5rem;
        left: 1rem;
    }
`;
const Text = styled(motion.div)`
    font-size: 2rem;
    position: absolute;
    left: 5rem;
    width: 60%;
    top: 44rem;
    
    @media(max-width: 780px){
    font-size: 1.5rem;
    }
    
    @media(max-width: 585px){
    font-size: 1rem;
    }
    
    @media(max-width: 390px){
        top: 28rem;
        font-size: 1rem;
        left: 1rem;
    }
`;

const TitleVariant =  {
    animate: { opacity: 1, x:0},
    initial: { opacity: 0, x:100},
};
const BackVariant =  {
    animate: { opacity: 0.3, x:0},
    initial: { opacity: 0, x:100},
};
const SubVariant =  {
    animate: { opacity: 1, y:0},
    initial: { opacity: 0, y:100},
};


  export default function MissionGrid() {
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
          <Title>MISSION</Title>
          <Img src={Mission}></Img>
      </BoxContainer>
    );
  }
