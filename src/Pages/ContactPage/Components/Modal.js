import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// props로 받아서 성공 Modal, 실패 Modal 띄울 계획
// 아 그럴 필요 없을 듯. . . . . . 성공만 띄우고 
//나머지는 유효성 검사랑, 필수 작성 안된 부분 모달 alert로 해주면 될 듯 합니다 !!



const ModalBack = styled.div`
    background: rgba(43, 43, 43, 0.8); 
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    position: fixed;
    top: 0;
    left: 0;
`;
const Container = styled.div`
    width: 25rem;
    height: 20rem;
    background-color: whitesmoke;
    /* border-radius: 20px; */
    display: flex;
    flex-direction: column;
    padding: 3rem;
    align-items: center;
    justify-content: center;
    position: relative;
`;
const Content = styled.div`
    font-size: 40px;
`;
const CloseModalButton = styled.button`
    position: absolute;
    height: 2.7rem;
    width: 12rem;
    bottom : 30px;
    border-radius: 20px;
    border-color : black;
    cursor: pointer;
    font-size: 18px;
`;

const Modal = ({ isModalOpen, closeModal }) => {


    return (
        <>
            {isModalOpen && (
                <ModalBack>
                    <Container>
                        <Content>문의가 완료되었습니다. </Content>
                        <CloseModalButton onClick={closeModal}>닫기</CloseModalButton>                    </Container>
                </ModalBack>
            )}
        </>
    )
}

export default Modal;