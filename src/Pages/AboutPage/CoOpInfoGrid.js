import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import AboutTitle from "./Components/AboutTitle";
import {useInView} from "react-intersection-observer";
import axios from "axios";

const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 65rem;
    
    @media(max-width: 390px){
    height: 40rem;
    width: 90%;
    }
`;

const SubTitle = styled(motion.div)`
    height: 10rem;
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    
    @media(max-width: 700px){
    font-size: 1.75rem;
    height: 5rem;
    }
    
    @media(max-width: 390px){
    font-size: 1.75rem;
    height: 5rem;
    }
`;

const MainLogoDiv = styled(motion.div)`
  justify-content: center;
  align-items: center;
  width: 90%;
  // height: 20rem;
  display: flex;
  padding: 2%;
  margin-bottom: 2rem;
  word-wrap: break-word;
  

`;
const MainLogo = styled(motion.div)`
  // width: 16rem;
  height: 9rem;
  display: flex;
  margin-left: 2%;
  margin-right: 2%;
  cursor: pointer;
  
  @media(max-width: 700px){
    height: 4.5rem;
    }
`;

const SubLogoDiv = styled(motion.div)`
  justify-content: center;
  align-items: center;
  width: 90%;
  word-wrap: break-word;
  display: flex;
  padding: 2%;
 
`;

const SubLogo = styled(motion.div)`
  // width: 8rem;
  height: 4.5rem;
  display: flex;
  margin-left: 2%;
  margin-right: 2%;
  
  @media(max-width: 390px){
    height: 2.25rem;
    }
  
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

    const [mainData, setMainData] = useState([]);
    const [subData, setSubData] = useState([]);

    const goManagement = (link) => {
        window.location.href = `${link}`;
    };

    useEffect(()=>{

        axios.get('https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/partners')

            .then(response => {
                const data = response.data;
                console.log(data);
                console.log(data.data[0]);
                const objects = [];
                const objects2 = [];

                for(let i = 0; i < data.data.length; i++) {

                    if(data.data[i].is_main){
                        const obj = {
                            id: data.data[i].id,
                            logoImageUrl: data.data[i].logoImageUrl,
                            link: data.data[i].link,
                            is_main: "Main CoOp."
                        };

                        console.log("여기");
                        console.log(obj);
                        objects.push(obj);
                    }
                    else {
                        const obj = {
                            id: data.data[i].id,
                            logoImageUrl: data.data[i].logoImageUrl,
                            link: data.data[i].link,
                            is_main: "Sub CoOp."
                        };

                        console.log("여기22");
                        console.log(obj);
                        objects2.push(obj);
                    }
                }
                setMainData(objects);
                setSubData(objects2);
            })
            .catch(error => {
                console.error(error);
            });
    },[]);

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
              {mainData.map((item) => (
                  <MainLogo><Img src={item.logoImageUrl} alt='logo image' onClick={() => goManagement(item.link)}/></MainLogo>
              ))}
              {/*<MainLogo><Img src={studioi} alt='logo image' /></MainLogo>*/}
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
              {subData.map((item) => (
                  <SubLogo><Img src={item.logoImageUrl} alt='logo image' /></SubLogo>
              ))}
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
