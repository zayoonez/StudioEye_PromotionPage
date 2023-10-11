import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";


const Sector = styled(motion.div)`
    display: flex;
    align-items: center;
    
    height: 10vh;
    width: 70%;
    margin-bottom: 4vh;
    border: 1px solid black;
    
`;

const Line = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5vh;
    height: 1%;
    width: 40%;
    background-color: gray;
`;

const Title = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 5vh;
    background-color: gray;
`;

const Content = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: gray; */
    font-size: 1rem;
    background-color: gray;vbackground-color: gray;
`;

export default function HistorySect({title, content}) {
    const control = useAnimation();
    const [ref, inView] = useInView();


    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <Sector>
            <Line/>
            <Title>
                {title}
            </Title>
            <Content>
                {content}
            </Content>
        </Sector>
    )
};