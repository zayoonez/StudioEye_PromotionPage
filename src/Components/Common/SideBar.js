import React, {useState} from 'react';
import styled from 'styled-components';
import Responsive from './responsive';

const Block = styled.div`
  position: fixed;
  width: 8vw;
  height: 95vh;
  top: 4rem;
  right:0;
  background-color: transparent;



 
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 40vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-top: 10vh;
  padding-top: 1.25vh;
  padding-bottom: 1.25vh;
  justify-content: space-between; 
  
  
  .logo {
    font-size: 2.25rem;
    font-weight: 600;
    letter-spacing: 2px;
    white-space: nowrap;
    
    
    @media(max-width: 390px){
    font-size: 1.625rem;
    }
  }
  .menu{
    margin-right: 5%;
  }
`;

const Text = styled.text`
    font-size: 1.5rem;
    font-weight: 600;
    writing-mode: vertical-rl;
    white-space: nowrap;
    margin-bottom: 1rem;
    cursor: pointer;
    
     @media(max-width: 390px){
    font-size: 1.25rem;
    }
`;



const SideBar = () => {
    const goManagement = () => {
        window.location.href = "http://13.124.68.5:3000/";
    };

    return (
        <>
            <Block>
                <Wrapper>
                    <Text>notice</Text>
                    <Text>instagram</Text>
                    <Text onClick={goManagement} >management</Text>
                </Wrapper>
            </Block>



        </>
    );
};

export default SideBar;