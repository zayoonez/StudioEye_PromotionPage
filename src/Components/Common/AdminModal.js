import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 배경을 어둡게 처리 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* 다른 요소 위에 표시 */
`;

const Modal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Text = styled.text`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;

const Button = styled.button`
    font-size: 1rem;
    font-weight: 400;
    margin: 1rem 0.25rem;
`;

const Div = styled.div`
    margin: 0.5rem 0;
`;


function AdminModal({onCancel}) {

    const navigate = useNavigate();

    const checkAdmin = () => {
        navigate('/admin');
    };



    return (
        <ModalContainer>
            <Modal>
                <Text>비밀번호를 입력하세요</Text>
                <Div>
                    <input
                        type="text"
                    />
                </Div>
                <div>
                <Button onClick={checkAdmin}>확인</Button>
                <Button onClick={onCancel}>취소</Button>
                </div>
            </Modal>
        </ModalContainer>
    );
}

export default AdminModal;