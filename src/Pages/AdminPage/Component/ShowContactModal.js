import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
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

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  height: 80%;
  overflow-y: auto;
`;
const Div = styled.div`
    height: 40%;
    padding: 2%;
    overflow: auto;
    margin: 1% 0;
    border: 0.5px solid black;
`;
const FileDiv = styled.div`
    height: 20%;
    padding: 2%;
    overflow: auto;
    margin: 1% 0;
    border: 0.5px solid black;
`;
const ImagePreviewContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

function ShowContactModal({ item, onClose }) {
    const [fileList, setFileList] = useState([]);

    useEffect(() => {
        if (item.fileUrlList && item.fileUrlList.length > 0) {
            setFileList(item.fileUrlList);
        }
    }, [item.fileUrlList]);

    const downloadFile = (url) => {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.target = '_blank';

        const fileName = url.substring(url.lastIndexOf('/') + 1);

        anchor.download = fileName;

        // 화면에 보이지는 않지만 클릭 이벤트를 발생하기 위해 추가
        document.body.appendChild(anchor);
        // 클릭 이벤트 발생
        anchor.click();
        //다운로드 후 앵커 요소 삭제
        document.body.removeChild(anchor);
    };

    return (
        <ModalBackground>
            <ModalContent>
                <h2>문의사항</h2>
                <Div>
                <p>{item.description}</p>
                </Div>
                <FileDiv>
                    {fileList.map((file, index) => (
                        <div key={index}>
                            {file.toLowerCase().endsWith('.png') && (
                                <div>
                                    <img src={file} alt={`Image ${index}`} />
                                </div>
                            )}
                            <div>
                                <a href={file} target="_blank" rel="noreferrer">
                                    {file.substring(file.lastIndexOf('/') + 1)}
                                </a>
                                <button onClick={() => downloadFile(file)}>Download</button>
                            </div>

                        </div>
                    ))}
                </FileDiv>
                <button onClick={onClose}>Close</button>
            </ModalContent>
        </ModalBackground>
    );
}

export default ShowContactModal;