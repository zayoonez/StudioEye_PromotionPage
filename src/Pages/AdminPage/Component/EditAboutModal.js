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
`;


function EditAboutModal({ item, onCancel}) {

    const deleteProject = () => {
        // 삭제 확인 팝업

            const Id = item.id;

            axios
                .delete(`https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/partners/${Id}`)
                .then((response) => {
                    console.log('삭제되었습니다.', response);
                    onCancel(); // 삭제가 완료되면 취소 함수를 호출하여 모달을 닫습니다.
                })
                .catch((error) => {
                    console.error('삭제 중 오류가 발생했습니다.', error);
                });

    };



    return (
        <ModalContainer>
            <Modal>
                <h2>삭제 하시겠습니까?</h2>

                <button onClick={deleteProject}>삭제</button>
                <button onClick={onCancel}>취소</button>
            </Modal>
        </ModalContainer>
    );
}

export default EditAboutModal;