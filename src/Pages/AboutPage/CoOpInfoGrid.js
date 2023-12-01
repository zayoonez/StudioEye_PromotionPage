import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import {useInView} from "react-intersection-observer";
import axios from "axios";
import Pladi from "../../assets/images/Pladi.png"
import Eye from "../../assets/logo/logo_yellow.png"
import PD from "../../assets/images/PDRoom.png"
import See from "../../assets/images/See.png"
import Urban from "../../assets/images/UrbanPladi.png"
import Locomo from "../../assets/images/Locomo.png"

const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 5vh;
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

const LogoDiv = styled(motion.div)`
    display: flex;
    height: 10rem;
    width: 70%;
    font-size: 4rem;
    font-weight: 600;

`;
const Img = styled(motion.img)`
    width: 25%;
    height: 70%;
`;

const Space = styled.div`
    width: 12.5%;
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
          <Title>CORP.</Title>
          <LogoDiv>
              <Img src={Pladi}></Img>
              <Space />
              <Img src={Eye}></Img>
              <Space />
              <Img src={PD}></Img>
          </LogoDiv>
          <LogoDiv>
              <Img src={See}></Img>
              <Space />
              <Img src={Urban}></Img>
              <Space />
              <Img src={Locomo}></Img>
          </LogoDiv>
      </BoxContainer>
  );
}
