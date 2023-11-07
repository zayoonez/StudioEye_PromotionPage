import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const boxVariant = {
    visible: { opacity: 1, scale: 1.5, transition : {duration : 1, delay: 0.3} },
    hidden: { opacity: 0, scale: 1},
}

const Title = styled(motion.div)`
    display: flex;
    margin-top: 100px;
    margin-bottom: 100px;
    font-size: 4rem;
    font-weight: 600;
    
    @media(max-width: 700px){
    font-size: 2rem;
    }
    
    @media(max-width: 390px){
    font-size: 1.75rem;
    margin-top: 100px;
    }
    
`;


export default function AboutTitle({title}) {
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
        <Title
            ref = {ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            {title}
        </Title>
    )
};