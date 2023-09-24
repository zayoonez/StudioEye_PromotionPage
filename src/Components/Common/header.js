import React, {useState} from 'react';
import styled from 'styled-components';
import Responsive from './responsive';
import { HiMenu } from "react-icons/hi";
import Offcanvas from 'react-bootstrap/Offcanvas';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled(Responsive)`
  height: 4rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  
  .logo {
    font-size: 2.25rem;
    font-weight: 600;
    letter-spacing: 2px;
    white-space: nowrap;
    
    @media(max-width: 390px){
    font-size: 1.625rem;
    }
  }
  .menu{
    margin-right: 5%;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트
 */


const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <div className="logo">STUDIO I</div>
                    <div className="menu" onClick={handleShow}>
                        <HiMenu className="MenuIcon" size="2.25rem" />
                    </div>
                </Wrapper>
            </HeaderBlock>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header;