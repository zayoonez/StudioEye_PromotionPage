import React from "react";
import styled from "styled-components";
import {motion, useAnimation, Variants} from "framer-motion";
import {BsChevronDoubleDown} from "react-icons/bs";

const BoxContainer = styled(motion.div)`
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    height: 40rem;
    padding-top: 25rem;
`;

// const Background = styled(motion.div)`
//     display: fixed;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     background-color: gray;
//     background-size: 100%;
//     width: 100%;
//     background-attachment: scroll;
//     background-repeat: no-repeat;
// `;
const TextWelcome = styled(motion.div)`
  font-size: 2rem;
  font-weight: 600;
  width: 60%;
  text-align: right:
`;
const Text = styled(motion.div)`
  text-align: right;
  font-size: 2rem;
  font-weight: 600;
  width: 60%;
`;

const StyledLetter = styled(motion.span)`
  display: inline-block;
  font-size: 6rem;
  font-weight: 600;
`;
const Div = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50rem;
`;

const TextVariant = {
  visible: {
    opacity: 1,
    transition: {delay:3}
  },
  hidden: {
    opacity: 0
  }
};
const WelcomeVariant = {
  visible: {
    opacity: 1,
    transition: {staggerChildren: 0.2, delayChildren: 0.2}
  },
  hidden: {
    opacity: 0
  }
};
const letterVariant = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 400,
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 400
    }
  }
};



const GoDown = styled(motion.div)`
  font-size: 5rem; 
`;

const DownVariant =  {
  animatego: { opacity: 1, y:20},
  initialgo: { opacity: 0, y:-20},
};
  
  export default function BasicInfoGrid() {
    const welcome = "원하는 문구";
    const text = "STUDIO I";

    return (
      <BoxContainer>
        <TextWelcome
            whileInView="visible"
            initial="hidden"
            variants={WelcomeVariant}
        >
          {Array.from(welcome).map((letter, index) => (
              <StyledLetter key={index} variants={letterVariant}>
                {letter === " " ? "\u00A0" : letter}
              </StyledLetter>
          ))}
        </TextWelcome>
        <Text
            whileInView="visible"
            initial="hidden"
            variants={TextVariant}
        >
            {Array.from(text).map((letter, index) => (
                <StyledLetter key={index} variants={letterVariant} >
                    {letter === " " ? "\u00A0" : letter}
                </StyledLetter>
            ))}
        </Text>
        <Div>
          <GoDown
              variants={DownVariant}
              initial="initialgo"
              animate="animatego"
              transition={{
                ease: "easeInOut",
                duration: 1.5,
                repeatType: "loop",
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
          >
            <BsChevronDoubleDown />
          </GoDown>
        </Div>
      </BoxContainer>
    );
  }
