import React, {useEffect} from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import AboutTitle from "./Components/AboutTitle";
import studioi from "../../assets/studioi.png";
import {useInView} from "react-intersection-observer";

const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5%;
    height: 65rem;
`;

const SubTitle = styled(motion.div)`
    height: 10rem;
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;

const MainLogoDiv = styled(motion.div)`
justify-content: center;
    align-items: center;
  width: 90%;
  height: 20rem;
  display: flex;
  padding: 2%;
  margin-bottom: 2rem;
`;
const MainLogo = styled(motion.div)`
  // width: 16rem;
  height: 9rem;
  display: flex;
  margin-left: 2%;
  margin-right: 2%;
`;

const SubLogoDiv = styled(motion.div)`
    justify-content: center;
    align-items: center;
  width: 90%;
  height: 15rem;
  display: flex;
  padding: 2%;
`;

const SubLogo = styled(motion.div)`
  // width: 8rem;
  height: 4.5rem;
  display: flex;
  margin-left: 2%;
  margin-right: 2%;
`;


const Img = styled(motion.img)`
    width: 100%;
`;

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition : {duration : 1, delay: 0.7 } },
    hidden: { opacity: 0, scale: 1},
}

export default function CoOpInfoGrid() {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const control2 = useAnimation();
    const [ref2, inView2] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }

    }, [control, inView]);

    useEffect(() => {
        if (inView2) {
            control2.start("visible");
        } else {
            control2.start("hidden");
        }

    }, [control2, inView2]);

  return (
      <BoxContainer>
        <AboutTitle title={"CoOp.Company"}/>
          <SubTitle
              ref = {ref}
              variants={boxVariant}
              initial="hidden"
              animate={control}>Main CoOp.</SubTitle>
          <MainLogoDiv
                  ref = {ref}
                  variants={boxVariant}
                  initial="hidden"
                  animate={control}>
              <MainLogo><Img src={studioi} alt='logo image' /></MainLogo>
              <MainLogo><Img src={studioi} alt='logo image' /></MainLogo>
          </MainLogoDiv>
          <SubTitle
              ref = {ref2}
              variants={boxVariant}
              initial="hidden"
              animate={control2}>Else CoOp.</SubTitle>
          <SubLogoDiv
              ref = {ref2}
              variants={boxVariant}
              initial="hidden"
              animate={control2}>
              <SubLogo><Img src={studioi} alt='logo image' /></SubLogo>
          </SubLogoDiv>
        {/*<TableWidth*/}
        {/*    ref = {ref}*/}
        {/*    variants={boxVariant}*/}
        {/*    initial="hidden"*/}
        {/*    animate={control}>*/}
        {/*  <TableVertical><Img src={studioi} alt='logo image' /></TableVertical>*/}
        {/*  <TableVertical><Img src={studioi} alt='logo image' /></TableVertical>*/}
        {/*  <TableVertical><Img src={studioi} alt='logo image' /></TableVertical>*/}
        {/*</TableWidth>*/}
        {/*<TableWidth*/}
        {/*    ref = {ref2}*/}
        {/*    variants={boxVariant}*/}
        {/*    initial="hidden"*/}
        {/*    animate={control2}>*/}
        {/*  <TableVertical><Img src={studioi} alt='logo image' /></TableVertical>*/}
        {/*  <TableVertical><Img src={studioi} alt='logo image' /></TableVertical>*/}
        {/*  <TableVertical><Img src={studioi} alt='logo image' /></TableVertical>*/}
        {/*</TableWidth>*/}

      </BoxContainer>
  );
}
