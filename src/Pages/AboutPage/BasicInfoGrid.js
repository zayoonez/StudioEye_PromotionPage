import React from "react";
import styled from "styled-components";
import {motion, useAnimation, Variants} from "framer-motion";

const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border: 1px solid gray;
    height: 90vh;
`;
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
`;

const TextVariant: Variants = {
  visible: {
    opacity: 1,
    transition: {delay:3}
  },
  hidden: {
    opacity: 0
  }
};
const WelcomeVariant: Variants = {
  visible: {
    opacity: 1,
    transition: {staggerChildren: 0.2, delayChildren: 0.2}
  },
  hidden: {
    opacity: 0
  }
};
const letterVariant: Variants = {
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
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 400
    }
  }
};
  
  export default function BasicInfoGrid() {
    const welcome = "원하는 문구를 입력하세요";
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

        </Div>
      </BoxContainer>
    );
  }
