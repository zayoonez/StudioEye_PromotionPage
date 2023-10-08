import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";


const Sector = styled(motion.div)`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 30vh;
    width: 40vw;
    padding: 4vh;
    border: 1px solid white;
`;

const boxVariant = {
    visible: { opacity: 1, scale: 1.5, y: -80, transition : {duration : 1} },
    hidden: { opacity: 0, scale: 1},
}

const Title = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: gray; */
    color: white;
    font-size: 2rem;
`;

const Content = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: gray; */
    color: white;
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