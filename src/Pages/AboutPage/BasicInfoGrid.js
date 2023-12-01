import React from "react";
import styled from "styled-components";
import {motion, useAnimation, Variants} from "framer-motion";
import {BsChevronDoubleDown} from "react-icons/bs";

const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    height: 20rem;
    padding-top: 10rem;
    
     @media(max-width: 390px){
    height: 20rem;
    padding-top: 10rem;
    }
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
const TextDiv = styled.div`
   white-space: pre-line;

`;

const Text = styled.text`
`;
  
  export default function BasicInfoGrid() {

    return (
      <BoxContainer>
          <Title>ABOUT</Title>
          <TextDiv>
                  2010년 설립된 스튜디오 아이는 다양한 장르를 소화할 수 있는 PD들이 모여
          </TextDiv>
          <TextDiv>
              클라이언트 맞춤형 콘텐츠 제작과 운영 대행 서비스를 제공하고 있으며
          </TextDiv>
          <TextDiv>
              드라마, 애니메이션 등을 전문으로 하는 여러 계열사들과도 협력하고 있습니다.
          </TextDiv>
      </BoxContainer>
    );
  }
