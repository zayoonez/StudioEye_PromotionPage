import React, {useState} from 'react';
import styled from 'styled-components';
import { Link, Router, Route } from "react-router-dom";
import {motion} from "framer-motion"

const ButtonSection = styled(motion(Link))`
    position: fixed;
    width: 75px;
    height: 75px;
    bottom: 3rem;
    text-align: center;
    margin-right: 15px;
    right:2rem;
    background-color: #000;
    border-radius: 50px;
    border: 2px solid #000; /* 검은색 테두리 */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */
    text-decoration: none;
`;

const ButtonText = styled.div`
    font-size: 18px;
    color: white;

`;

const ContactButton = () => {
    return (
        <ButtonSection to="/Contact" 
            animate={{ scale: [1, 1.12, 1], 
                transition: { repeat: Infinity, duration: 1.8 } }}>
            <ButtonText>
                Contact Us!
            </ButtonText>
        </ButtonSection>
    );
};

export default ContactButton;