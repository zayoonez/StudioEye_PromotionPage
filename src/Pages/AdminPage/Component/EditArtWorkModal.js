import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: #fff;
  padding: 2% 10% 2% 10%;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
`;

const ImagePreviewContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

function EditArtWorkModal({ item, onSave, onCancel }) {
    const navigate = useNavigate();
    const [editedItem, setEditedItem] = useState(item);
    const [selectedImages, setSelectedImages] = useState([]);
    const [existingImageUrlList, setExistingImageUrlList] = useState([]);

    useEffect(() => {
        if (editedItem.imageUrlList && editedItem.imageUrlList.length > 0) {
            setExistingImageUrlList(editedItem.imageUrlList);
        }
    }, [editedItem.imageUrlList]);

    const handleSave = () => {
        const requestData = {
            projectId: editedItem.id,
            department: editedItem.department,
            category: editedItem.category,
            name: editedItem.name,
            client: editedItem.client,
            date: editedItem.date,
            link: editedItem.link,
            overView: editedItem.overView,
            existingImageUrlList: existingImageUrlList,
        };

        const formData = new FormData();

        formData.append(
            'request',
            new Blob([JSON.stringify(requestData)], { type: 'application/json' })
        );

        selectedImages.forEach((image) => {
            formData.append('files', image);
        });

        axios
            .put(
                'https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/projects',
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data', charset: 'utf-8' },
                }
            )
            .then((response) => {
                console.log('수정된 데이터를 서버에 보냈습니다.', response);
                onSave();
            })
            .catch((error) => {
                console.error('데이터를 서버에 보내는 중 오류가 발생했습니다.', error);
            });
    };

    const deleteProject = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            const projectId = editedItem.id;

            axios
                .delete(
                    `https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/projects/${projectId}`
                )
                .then((response) => {
                    console.log('프로젝트가 삭제되었습니다.', response);
                    onCancel();
                })
                .catch((error) => {
                    console.error('프로젝트 삭제 중 오류가 발생했습니다.', error);
                });
        }
    };

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setSelectedImages([...selectedImages, ...files]);
    };

    const handleRemoveImage = (index) => {
        const newSelectedImages = [...selectedImages];
        newSelectedImages.splice(index, 1);
        setSelectedImages(newSelectedImages);
    };

    const handleRemoveExistingImage = (index) => {
        const newExistingImages = [...existingImageUrlList];
        newExistingImages.splice(index, 1);
        setExistingImageUrlList(newExistingImages);
    }

    const selectedImageComponents = selectedImages.map((image, index) => (
        <div key={index}>
            <img src={URL.createObjectURL(image)} alt={`Image ${index}`} width="200" />
            <button onClick={() => handleRemoveImage(index)}>Remove</button>
        </div>
    ));

    const imagePreviewComponents = existingImageUrlList.map((imagePreview, index) => (
        <div key={index}>
            <img src={imagePreview} alt={`Image ${index}`} width="200" />
            <button onClick={() => handleRemoveExistingImage(index)}>Remove</button>
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
                    <input type="file" id="imageInput" accept="image/*" multiple onChange={handleImageUpload} />
                    {selectedImageComponents}
                </div>
                <ImagePreviewContainer>{imagePreviewComponents}</ImagePreviewContainer>

                <button onClick={handleSave}>저장</button>
                <button onClick={onCancel}>취소</button>
                <button onClick={deleteProject}>삭제</button>
            </Modal>
        </ModalContainer>
    );
}

export default EditArtWorkModal;