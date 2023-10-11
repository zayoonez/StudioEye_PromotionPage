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
`;

const TableWidth = styled(motion.ul)`
  width: 90%;
  height: 30vh;
  display: flex;
  padding: 2%;
`;

const TableVertical = styled(motion.li)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style-type: none;
  width: 26%;
  margin-left: 5%;
  margin- right: 5%; 
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
        <TableWidth
            ref = {ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}>
          <TableVertical><Img src={studioi} alt='logo image' /></TableVertical>
          <TableVertical><Img src={studioi} alt='logo image' /></TableVertical>
          <TableVertical><Img src={studioi} alt='logo image' /></TableVertical>
        </TableWidth>
        <TableWidth
            ref = {ref2}
            variants={boxVariant}
            initial="hidden"
            animate={control2}>
          <TableVertical><Img src={studioi} alt='logo image' /></TableVertical>
          <TableVertical><Img src={studioi} alt='logo image' /></TableVertical>
          <TableVertical><Img src={studioi} alt='logo image' /></TableVertical>
        </TableWidth>

      </BoxContainer>
  );
}
