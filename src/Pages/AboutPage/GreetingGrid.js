import React from "react";
import styled from "styled-components";
import {motion, useAnimation, Variants} from "framer-motion";
import YouTube from 'react-youtube';

const BoxContainer = styled(motion.div)`
    display: flex;
    background-color: white;
    height: 95vh;
    position: relative;
`;
const Img = styled(motion.img)`
    font-size: 2rem;
    position: absolute;
    left: 5%;
    width: 90%;
    height: 30vh;
`;

const TitleText = styled(motion.div)`
    font-size: 4rem;
    position: absolute;
    right: 5rem;
    top: 40vh;
    font-weight: 600;
`;
const BackText = styled(motion.div)`
    font-size: 14rem;
    color: gray;
    position: absolute;
    left: 5rem;
    top: 37vh;
    font-weight: 600;
`;
const SubText = styled(motion.div)`
    font-size: 3rem;
    position: absolute;
    left: 5rem;
    top: 50vh;
    font-weight: 600;
`;
const Text = styled(motion.div)`
    font-size: 2rem;
    position: absolute;
    left: 5rem;
    width: 60%;
    top: 60vh;
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


  export default function GreetingGrid() {
    const welcome = "원하는 문구 입력";
    const text = "STUDIO I";

    return (
      <BoxContainer>
        <Img src="/logo192.png"/>

        <TitleText
            variants={TitleVariant}
            initial="initial"
            whileInView="animate"
            transition={{
                duration: 1,
            }}
        > 기획&제작&편집</TitleText>
          <BackText
              variants={BackVariant}
              initial="initial"
              whileInView="animate"
              transition={{
                  duration: 1,
                  delay: 1,
              }}>
              Slogan
          </BackText>
        <SubText
            variants={SubVariant}
            initial="initial"
            whileInView="animate"
            transition={{
                duration: 1,
                delay: 1,
            }}> 회사 슬로건을 입력하세요</SubText>
        <Text
            variants={SubVariant}
            initial="initial"
            whileInView="animate"
            transition={{
                duration: 1,
                delay: 1,
            }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </BoxContainer>
    );
  }
