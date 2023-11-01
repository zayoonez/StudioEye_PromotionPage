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

function PlusArtworkModal({ onSave, onCancel }) {
    const [imageList, setImageList] = useState([]);

    const onImageHandler = (event) => {
        setImageList([...imageList, ...event.target.files]);

    };

    const [data, setData] = useState({
        department: "",
        category: "",
        name: "",
        client: "",
        date: "",
        link: "",
        overView: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        // 입력값을 서버에 보낼 수 있도록 작업

        const formData = new FormData();
        formData.append("request", new Blob([JSON.stringify(data)], {type: "application/json"}));
        imageList.forEach(image => {
            formData.append('files', image);
        });

        axios
            .post(` https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/projects`, formData)
            .then((response) => {
                console.log('등록되었습니다.', response);
                onSave()
                onCancel(); // 삭제가 완료되면 취소 함수를 호출하여 모달을 닫습니다.
                // 입력값 초기화
                setData({
                    department: "",
                    category: "",
                    name: "",
                    client: "",
                    date: "",
                    link: "",
                    overView: "",});

                //fetchData();
                ;
            })
            .catch((error) => {
                console.error('등록 중 오류가 발생했습니다.', error);
            });

    };

    return (
        <ModalContainer>
        <Modal>
            <h2>Artwork 생성</h2>
            <div>
                <span>부서</span>
                <input
                    type="text"
                    name="department"
                    value={data.department}
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>카테고리</span>
                <input
                    type="text"
                    name="category"
                    value={data.category}
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>프로젝트 이름</span>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>고객사</span>
                <input
                    type="text"
                    name="client"
                    value={data.client}
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>연도</span>
                <input
                    type="text"
                    name="date"
                    value={data.date}
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>상세 설명</span>
                <input
                    type="text"
                    name="overView"
                    value={data.overView}
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>동영상 링크</span>
                <input
                    type="text"
                    name="link"
                    value={data.link}
                    onChange={handleChange}
                />
            </div>
            <div>
                <span>이미지</span>
                <input type="file" accept='image/*' multiple onChange={onImageHandler} />
            </div>
            <button onClick={handleSubmit}>저장</button>
            <button onClick={onCancel}>취소</button>
        </Modal>
        </ModalContainer>
    );
}


export default PlusArtworkModal;