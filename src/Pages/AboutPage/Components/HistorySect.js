import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";


const Sector = styled(motion.div)`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 10vh;
    width: 20vw;
    padding: 4vh;
    border: 1px solid black;
`;

const Title = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 2rem;
    margin-bottom: 5vh;
`;

const Content = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: gray; */
    color: black;
    font-size: 1rem;
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
            <Title>
                {title}
            </Title>
            <Content>
                {content}
            </Content>
        </Sector>
    )
};