import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Body from "../../Components/Common/Body";
import { motion } from "framer-motion";
import axios from "axios";
import Modal from "./Components/Modal";
import Select from 'react-select';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.div`
    font-size: 54px;
    font-weight: 750;
    color: #FF530E;
    letter-spacing: 2px;
    margin-top: 100px;
    margin-bottom: 50px;
    text-align: center;
`;
const SubTitle = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: #FFA900;
    margin-bottom: 7px;
`;
const SubContent = styled.div`
    font-size: 23px;
    font-weight: bold;
    color: black;
    white-space: pre-line;
    text-align: center;
    margin-bottom: 20px;
`;
const address = "서울시 성동구 광나루로 162 BS성수타워 5F \n 5F, 162, Gwangnaru-ro, Seondong-gu, Seoul, Korea";
const MapButton = styled.button`
    color: #FF530E;
    border: none;
    /* padding: 10px 20px; */
    font-size: 16px;
    font-weight: 100;
    cursor: pointer;
    background: transparent;
    margin-left: 20px;
    margin-top: 12px;
`;
const MapLink = styled.a`

`;
// const categories = [
//     'Entertainment',
//     'Drama',
//     'Documentary',
//     'Channel Operating',
//     'Branded',
//     'Motion Graphic',
//     'Animation',
//     'Live Commerce',
// ];

const categories = [
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Documentary', label: 'Documentary' },
    { value: 'Channel Operating', label: 'Channel Operating' },
    { value: 'Branded', label: 'Branded' },
    { value: 'Motion Graphic', label: 'Motion Graphic' },
    { value: 'Animation', label: 'Animation' },
    { value: 'Live Commerce', label: 'Live Commerce' },
];

const StyledSelect = styled(Select)`
  .Select__control {
    height: 40px;
    width: 260px;
    border: none;
    border-bottom: 1px solid #C8C9CC; 
    border-radius: 0;
    outline: none;
    font-weight: bold;
    font-size: 19px; 
    /* padding-left: 15px;  */
    cursor: pointer;
    
  }
  .Select__value-container {

  }
  .Select__control:hover {
    /* border-color: #a1a1a1; */
    border-color: rgb(255, 169, 0, 0.3);
  }
  .Select__control--is-focused {
    border: none;
    outline: none;
    box-shadow : 0px 1px #C8C9CC;
  }

  .Select__menu--is-open {
    border-color: transparent;
    box-shadow: none;

  }
  .Select__singleValue {
    background-color: red;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    /* color: rgb(255, 169, 0, 0.8); */
    /* background-color: rgb(255, 169, 0, 0.8); */
    width: 260px;
  }
  .select__menu-list {
    background-color: red;
  }
  .Select__option {
    height: 40px;
    display: "flex";
    align-items: "center";
    padding: 9px 0px 9px 15px;
    background-color: rgb(255, 169, 0, 0.4);
    &--is-selected {
    color: black;
    background-color: rgb(255, 169, 0, 1);
    font-weight: bold;
  }
  &--is-focused {
    box-shadow: none;
    background-color: rgb(255, 169, 0, 1);
  }
  }
  
`;
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    /* max-width: 900px;  */
    margin: 0 auto; // 가운데 정렬을 위한 마진 추가
`;
const RowWrapper = styled.div`
    display: flex;
    ${(props) => (props.map ?
        'gap: 0px;' : 'gap: 80px;')};
   align-items: center;
`;
// const StyledSelect = styled.select`
//     border: none;
//     border-bottom: 1px solid #C8C9CC; 
//     outline: none;
//     padding: 10px; 
//     width: 250px;
//     font-weight: bold;
//     font-size: 18px;
// `;
const UnderlinedInput = styled.input`
    border: none;
    border-bottom: 1px solid #C8C9CC;
    outline: none;
    padding-bottom: 5px;
    padding-left: 10px;
    margin-bottom: 10px;
    width: 250px;
    font-size: 18px;
    font-weight: 500;
`;

const InputWrapper = styled.div`
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
`;
const Label = styled.label`
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 18px;
    color: #6A6B6D;
    opacity: 0.8;
`;
const UnderlinedTextarea = styled.textarea`
    all: unset; 
    resize: none;
    border: none;
    border-bottom: 1px solid #C8C9CC;
    outline: none;
    margin-bottom: 16px;
    width: 100%;
    height: 30px;
    font-size: 18px;
    overflow: hidden;
    line-height: 30px;
    font-weight: 500;
    display: block;
    padding-left: 10px;
    overflow-wrap: break-word;
`;
const SubmitButton = styled(motion.button)`
    border: 1.5px solid #FFA900; 
    width: 120px; 
    height: 40px; 
    background-color: transparent;
    color: #FFA900;
    font-size: 19px; 
    font-weight: bold;
    margin-left: auto; 
    margin-bottom: 100px;
    cursor: pointer;
    &:hover {
        background-color: #FFA900;
        color: #ffffff; 
    }
`;
const ContactPage = (e) => {
    const textareaRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);
    const [fileList, setFileList] = useState([]);
    const FileTextRef = useRef(null);
    const [formData, setFormData] = useState({
        category: 'Entertainment',
        clientName: '',
        organization: '',
        email: '',
        contact: '',
        description: '',
        position: 'default',
    });
    const emailCheck = (email) => {
        const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
        if (!emailRegEx.test(email)) {
            alert("이메일 형식이 올바르지 않습니다. 다시 입력해주세요.");
            return false;
        }
        return true; //형식에 맞을 경우, true 리턴
    }

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCategoryChange = (e) => {
        setFormData({
            ...formData,
            "category": e.value,
        });
    };

    // textarea 입력값에 따른 높이 조절
    const handleTextAreaDataChange = (e) => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = "0px";
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + "px";
        }
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emptyData = {
            organization: "소속",
            email: "이메일 주소",
            clientName: "이름",
            organization: "조직",
            contact: "연락처",
            description: "프로젝트 내용",
        };
        for (const key in formData) {
            if (formData[key] === "") {
                alert(`${emptyData[key]}을(를) 작성해주세요!`);
                return;
            }
        }
        const isValidEmail = emailCheck(formData.email);

        // 이메일 형식이 올바르지 않으면 더 이상 처리하지 않고 종료
        if (!isValidEmail) {
            return;
        }

        //5초 후 홈으로 이동 setTimeout할지말지
        const requestData = new FormData();
        requestData.append("request", new Blob([JSON.stringify(formData)], { type: "application/json" }));
        axios.post('https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/requests', requestData)
            .then((response) => {
                console.log(response.data, "임다. ");
                setIsModalOpen(true);
                setFormData({ // 폼 데이터 초기화
                    category: 'Entertainment',
                    //초기화 설정..
                    clientName: '',
                    organization: '',
                    email: '',
                    contact: '',
                    description: '',
                    position: 'default',
                });
            })
            .catch((error) => {
                console.error("에러 발생", error);
            })
    }
    return (
        <Body>
            <Wrapper>
                <Title>CONTACT</Title>
                <SubTitle>ADDRESS</SubTitle>
                <RowWrapper map>
                    <SubContent>{address}</SubContent>
                    <MapLink href="https://naver.me/xJqS8qd3" target="_blank"><MapButton>MAP</MapButton></MapLink>
                </RowWrapper>
                <SubTitle>TEL</SubTitle>
                <SubContent>02-2038-2663</SubContent>
                <SubTitle>FAX</SubTitle>
                <SubContent>070-7549-2443</SubContent>
                <Title>PROJECT REQUEST</Title>
                <FormContainer>
                    <InputWrapper>
                        <Label>문의 종류</Label>
                        {/* <StyledSelect
                            name="category"
                            onChange={handleDataChange}
                        >
                            {categories.map((category, index) => (
                                <option
                                    key={index}
                                    name="category"
                                    id={category}
                                    value={category}
                                >{category}</option>
                            ))}
                        </StyledSelect> */}
                        <StyledSelect
                            classNamePrefix="Select"
                            options={categories}
                            defaultValue={categories[0]}
                            onChange={(e) => handleCategoryChange(e)}
                        />
                    </InputWrapper>
                    <RowWrapper>
                        <InputWrapper>
                            <Label>이름</Label>
                            <UnderlinedInput type="text" value={formData.clientName} name="clientName" onChange={handleDataChange} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>소속</Label>
                            <UnderlinedInput type="text" value={formData.organization} name="organization" onChange={handleDataChange} />
                        </InputWrapper>
                    </RowWrapper>
                    <RowWrapper>
                        <InputWrapper>
                            <Label>이메일</Label>
                            <UnderlinedInput type="email" value={formData.email} name="email" onChange={handleDataChange} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>연락처</Label>
                            <UnderlinedInput type="text" placeholder="ex) 010-1234-5678" value={formData.contact} name="contact" onChange={handleDataChange} />
                        </InputWrapper>
                    </RowWrapper>
                    <InputWrapper>
                        <Label>프로젝트 내용</Label>
                        <UnderlinedTextarea
                            ref={textareaRef}
                            autoComplete="off"
                            value={formData.description}
                            name="description"
                            onChange={handleTextAreaDataChange}
                        />
                    </InputWrapper>
                    <SubmitButton
                        type="submit"
                        onClick={handleSubmit}
                        whileHover={{ scale: 1.04 }}
                        transition={{ ease: "easeInOut", stiffness: 200, damping: 5 }}
                    >문의하기</SubmitButton>
                </FormContainer>
                <Modal isModalOpen={isModalOpen} closeModal={closeModal}></Modal>
            </Wrapper>
        </Body>
    )
}

export default ContactPage;
