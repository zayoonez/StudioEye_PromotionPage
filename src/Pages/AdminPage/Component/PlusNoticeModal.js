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


function PlusNoticeModal({onCancel}) {

    const createNoticeBoardRequestDto = {
        title: ""

    }

    const [item, setItem] = useState(createNoticeBoardRequestDto);
    const [image, setImage] = useState();

    const onImageHandler = (event) => {
        setImage(()=>event.target.files[0]);

    };


    const AddNotice = () => {

        console.log(item);
        console.log(image);
        const formData = new FormData();
        formData.append(
            "createNoticeBoardRequestDto",
            new Blob([JSON.stringify(createNoticeBoardRequestDto)], { type: "application/json" })
        );
        formData.append('file', image);

        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

            axios
                .post(`https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/notice-board`, formData)
                .then((response) => {
                    console.log('등록되었습니다.', response);
                    onCancel(); // 삭제가 완료되면 취소 함수를 호출하여 모달을 닫습니다.
                })
                .catch((error) => {
                    console.error('등록 중 오류가 발생했습니다.', error);
                });

    };



    return (
        <ModalContainer>
            <Modal>
                <h2>추가</h2>
                <div>
                    <span>제목</span>
                    <input
                        type="text"
                        onChange={(e) => setItem({ ...item, title: e.target.value })}
                    />
                </div>
                <div>
                    <span>이미지</span>
                    <input type="file" accept='image/*' onChange={onImageHandler} />
                </div>
                <button onClick={AddNotice}>저장</button>
                <button onClick={onCancel}>취소</button>
            </Modal>
        </ModalContainer>
    );
}

export default PlusNoticeModal;