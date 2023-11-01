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


function EditArtWorkModal({ item, onSave, onCancel}) {
    const navigate = useNavigate();
    const [editedItem, setEditedItem] = useState(item);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreviews, setImagePreviews] = useState([]);

    // item의 이미지 URL 목록을 초기 이미지 미리보기 배열로 설정
    useEffect(() => {
        if (editedItem.imageUrlList && editedItem.imageUrlList.length > 0) {
            setImagePreviews(editedItem.imageUrlList);
        }
    }, [editedItem.imageUrlList]);
    const handleSave = () => {
        console.log("imgURL"+ editedItem.imageUrlList);

        const requestData = {
                projectId: editedItem.id,
                department: editedItem.department,
                category: editedItem.category,
                name: editedItem.name,
                client: editedItem.client,
                date: editedItem.date,
                link: editedItem.link,
                overView: editedItem.overView,
        }

        const formData = new FormData();
        formData.append(
            "request",
            new Blob([JSON.stringify(requestData)], { type: "application/json" })
        );

        //이미지 수정 적용하지 않고 일단 기존 imageUrlList로 보냄
        formData.append('files', editedItem.imageUrlList);
        
        axios
            .put(`https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/projects`, formData)
            .then((response) => {
                console.log('수정된 데이터를 서버에 보냈습니다.', response);
                //isEditing - false;
                onSave();
            })
            .catch((error) => {
                console.error('데이터를 서버에 보내는 중 오류가 발생했습니다.', error);
            });
    };


    const deleteProject = () => {
        // 삭제 확인 팝업
        if (window.confirm("정말 삭제하시겠습니까?")) {
            const projectId = editedItem.id;

            axios
                .delete(`https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/projects/${projectId}`)
                .then((response) => {
                    console.log('프로젝트가 삭제되었습니다.', response);
                    onCancel(); // 삭제가 완료되면 취소 함수를 호출하여 모달을 닫습니다.
                })
                .catch((error) => {
                    console.error('프로젝트 삭제 중 오류가 발생했습니다.', error);
                });
        }
    };

    // ------------- 수정 필요 -----------------
    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newPreviews = [...imagePreviews, e.target.result];
                setImagePreviews(newPreviews);
                //editItem.imageUrlList = newPreviews;
            };
            reader.readAsDataURL(file);
        }

    }

    const imagePreviewComponents = imagePreviews.map((imagePreview, index) => (
        <div key={index}>
            <img src={imagePreview} alt={`Image ${index}`} width="200" />
        </div>
    ));


    return (
        <ModalContainer>
        <Modal>
            <h2>Artwork 수정</h2>
            <div>
                <span>부서</span>
                <input
                    type="text"
                    value={editedItem.department}
                    onChange={(e) => setEditedItem({ ...editedItem, department: e.target.value })}
                />
            </div>
            <div>
                <span>카테고리</span>
            <input
                type="text"
                value={editedItem.category}
                onChange={(e) => setEditedItem({ ...editedItem, category: e.target.value })}
            />
            </div>
            <div>
                <span>프로젝트 이름</span>
                <input
                    type="text"
                    value={editedItem.name}
                    onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
                />
            </div>
            <div>
                <span>고객사</span>
                <input
                    type="text"
                    value={editedItem.client}
                    onChange={(e) => setEditedItem({ ...editedItem, client: e.target.value })}
                />
            </div>
            <div>
                <span>연도</span>
                <input
                    type="text"
                    value={editedItem.date}
                    onChange={(e) => setEditedItem({ ...editedItem, date: e.target.value })}
                />
            </div>
            <div>
                <span>상세 설명</span>
                <input
                    type="text"
                    value={editedItem.overView}
                    onChange={(e) => setEditedItem({ ...editedItem, overView: e.target.value })}
                />
            </div>
            <div>
                <span>동영상 링크</span>
                <input
                    type="text"
                    value={editedItem.link}
                    onChange={(e) => setEditedItem({ ...editedItem, link: e.target.value })}
                />
            </div>

            <div>
            <input type="file" id="imageInput" accept="image/*" onChange={handleImageUpload} />
            {selectedImage && (
                <img src={selectedImage} alt="Selected" width="200" />
            )}
            </div>
            <div>
                {imagePreviewComponents}
            </div>

            <button onClick={handleSave}>저장</button>
            <button onClick={onCancel}>취소</button>
            <button onClick={deleteProject}>삭제</button>
        </Modal>
        </ModalContainer>
    );
}

export default EditArtWorkModal;