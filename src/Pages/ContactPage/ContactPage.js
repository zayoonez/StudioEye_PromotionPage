import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Body from "../../Components/Common/Body";
import {motion} from "framer-motion";
import {ReactComponent as LogoIcon} from "../../assets/logo/STUDIO-I.svg";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import LetterAnimation from "../../Components/Common/LetterAnimation";

const ContactTitle = styled.div`
    margin-bottom: 30px;
    font-size: 50px;
    font-weight: 600;
`;

const FormBlock = styled.div`
    display: flex;
    flex-direction : row;
    justify-content: center;
    align-items: center;

`;
const FormBlock_1 = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    margin-right: 50px;
`;

const FormBlock_2 = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
`;
const InputBlock = styled.div`
    position: relative;
    margin: 10px;
`;

const RadioBlock = styled.div`
    display: flex;
    flex-direction: row;
`;
const RadioTitle = styled.div`
    color: rgb(0, 0, 0, 0.6);
    /* color: #495055; */
    font-size : 23px;
    margin-right: auto;
    margin-left: 10px;
    margin-bottom: 15px;
`;
const RadioBlock_1 = styled.div`
    display: flex;
    flex-direction: column;
`;
const RadioBlock_2 = styled.div`
    display: flex;
    flex-direction: column;
`;

const SharedInputStyles = `
  font-weight: 500;
  font-size: 1.4rem;
  color: #495055;
  width: 350px;
  padding: 15px 15px;
  border-radius: 1rem;
  border: 2px solid #D9D9D9;
  outline: none;

  &:valid + span,
  &:focus + span {
    transform: scale(0.8) translateY(-30px);
    background: #fff;
  }

  &:focus {
    color: #284B63;
    border-color: #284B63;
  }
`;

const InputField = styled.input`
  ${SharedInputStyles}
`;

const TextAreaField = styled.textarea`
  ${SharedInputStyles}
  height: 140px;
`;
const CLabel = styled.label`
    display: flex;
	cursor: pointer;
	font-weight: 400;
	position: relative;
	overflow: hidden;
	margin-bottom: 0.375em;
`;
const Category = styled.input`
    margin-bottom: 10px;
    position: absolute;
    left: -9999px;
    &:checked + span {
      background-color: rgb(219, 41, 23, 0.3);
      &:before {
        box-shadow: inset 0 0 0 0.4375em #000;
      }
    }
`;
// $primary-color: #00005c; // Change color here. C'mon, try it! 
// $text-color: mix(#000, $primary-color, 64%);

const CName = styled.span`
    display: flex;
    align-items: center;
    padding: 0.375em 0.75em 0.375em 0.375em;
    border-radius: 99em;
    transition: 0.25s ease;
    font-size: 18px;

    &:hover {
      background-color:  rgb(219, 41, 23, 0.2);
    }

    &:before {
      display: flex;
      flex-shrink: 0;
      content: "";
      background-color: #fff;
      width: 1.5em;
      height: 1.5em;
      border-radius: 50%;
      margin-right: 0.375em;
      transition: 0.25s ease;
      /* box-shadow: inset 0 0 0 0.125em rgb(219, 41, 23); */
      box-shadow: inset 0 0 0 0.125em #000;
    }
  
`;

const Placeholder = styled.span`
    position: absolute;
    margin: 17px 0;
    padding: 0 4px;
    font-family: Roboto, sans-serif;
    color: #6c757d;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    top: 0;
    left: 17px;
    transition: all 0.2s;
    transform-origin: 0% 0%;
    background: none;
    pointer-events: none;
`;
const CButton = styled.div`
    width: 100px;
    height: 100px;

`;

const ContactPage = () => {
    useEffect(() => {
        let checkedCategory = document.getElementById("entertainment");
        checkedCategory.checked = true;
      }, []);

    return (
        <Body>
            <LetterAnimation contact text="CONTACT US!"></LetterAnimation>
            <FormBlock>

            <FormBlock_1>
                <RadioTitle>프로젝트 카테고리</RadioTitle>

                <RadioBlock>
                    <RadioBlock_1>
                        <CLabel>
                            <Category type="radio" id="entertainment" name="radio" />
                            <CName>Entertainment</CName>
                        </CLabel>
                        <CLabel>
                            <Category type="radio" name="radio"/>
                            <CName>Drama</CName>
                        </CLabel>
                        <CLabel>
                            <Category type="radio" name="radio"/>
                            <CName>Documentary</CName>
                        </CLabel>
                        <CLabel>
                            <Category type="radio" name="radio"/>
                            <CName>Channel Operating</CName>
                        </CLabel>
                    </RadioBlock_1>
                    <RadioBlock_2>
                        <CLabel>
                            <Category type="radio" name="radio"/>
                            <CName>Branded</CName>
                        </CLabel>
                        <CLabel>
                            <Category type="radio" name="radio"/>
                            <CName>Motion Graphic</CName>
                        </CLabel>
                        <CLabel>
                            <Category type="radio" name="radio"/>
                            <CName>Animation</CName>
                        </CLabel>
                        <CLabel>
                            <Category type="radio" name="radio"/>
                            <CName>Live Commerce</CName>
                        </CLabel>
                    </RadioBlock_2>

                
                </RadioBlock>
                
                <InputBlock>
                    <TextAreaField type="text" name="성함" id="name" required spellCheck={false} />
                    <Placeholder>프로젝트 정보</Placeholder>
                </InputBlock>
            </FormBlock_1>
            <FormBlock_2>
                <InputBlock>
                    <InputField type="text" name="성함" id="name" required spellCheck={false} />
                    <Placeholder>성함</Placeholder>
                </InputBlock>
                <InputBlock>
                    <InputField type="text" name="성함" id="name" required spellCheck={false} />
                    <Placeholder>기관 혹은 기업명</Placeholder>
                </InputBlock>
                <InputBlock>
                    <InputField type="text" name="성함" id="name" required spellCheck={false} />
                    <Placeholder>연락처</Placeholder>
                </InputBlock>
                <InputBlock>
                    <InputField type="text" name="성함" id="name" required spellCheck={false} />
                    <Placeholder>이메일주소</Placeholder>
                </InputBlock>
                <InputBlock>
                    <InputField type="text" name="성함" id="name" required spellCheck={false} />
                    <Placeholder>직책</Placeholder>
                </InputBlock>
                
            </FormBlock_2>
            </FormBlock>
            <CButton>문의하기</CButton>

        </Body>
    )
}

export default ContactPage;