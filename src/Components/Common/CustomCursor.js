import styled from "styled-components";
import {motion} from "framer-motion"
import React, { useEffect, useState } from "react";

const Cursor = styled(motion.div)`
    background-color: red;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;


`;

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x:0, 
        y:0
    });
    console.log(mousePosition);
    useEffect(()=> {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX, 
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove);

        return() => {
            window.removeEventListener("mousemove", mouseMove);
        }
    },[]);

    const cursorVariants = {
        default : {
            x:mousePosition.x -16,
            y:mousePosition.y -16
        },
        // text: {
        //     height: 150,
        //     width: 150,
        //     x: mousePosition.x - 70,
        //     y: mousePosition.y - 70,
        //     backgroundColor: "aqua",
        //     mixBlendMode: "difference",
        //   },        
      };

    
    return (
        <Cursor
        variants={cursorVariants}
        animate="default"
        ></Cursor>
      )
}

export default CustomCursor;