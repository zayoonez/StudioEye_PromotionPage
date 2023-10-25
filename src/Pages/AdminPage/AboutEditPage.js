import example from "../../assets/images/1.jpeg";
import styled from "styled-components";


const Thumbnail = styled.img`
  width: 30%;
`;

const AboutEditPage = () => {

    return(
        <div>
            <button>Edit</button>
            <span>회사소개 제목: </span>
            <span>원하는 문구 STUDIO I</span>
            <span>회사 이미지</span>
            <Thumbnail src={example}></Thumbnail>
            <span>회사 슬로건: </span>
            <span>현재 회사 슬로건</span>
            <span>상세 설명</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sun
                in culpa qui officia deserunt mollit anim id est laborum.
            </span>
        </div>
    )
    
}

export default AboutEditPage;