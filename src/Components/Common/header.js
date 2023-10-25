import React, {useState} from 'react';
import styled from 'styled-components';
import Responsive from './responsive';
import { HiMenu,HiX } from "react-icons/hi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {motion} from "framer-motion";
import {Variants} from "framer-motion";
import { useNavigate } from "react-router-dom";
import studioi from '../../assets/studioi.png'

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background-color: transparent;
  // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
   z-index: 999;
`;

const AnimatedOffcanvas = styled(Offcanvas)`
  background-color: white;
  margin-top: 4rem;
  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0; 
  left: 0; 
  height: 96vh;
  
`;

const OffcanvasBody = styled(Offcanvas.Body)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const CanvasDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 95%;
  height: 70vh;
  
  @media(max-width: 840px){
    padding: 0rem;
    }
`;
const BottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 95%;
  height: 3vh;
  text-align: right;
  
`;
const Text = styled.text`
    color: rgba(0,0,0,0.2);
    font-size: 1.5rem;
    
      @media(max-width: 390px){
    color: rgba(0,0,0,0.0);
    }
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
    cursor: pointer;
    
    @media(max-width: 390px){
    font-size: 1.625rem;
    }
  }
  .menu{
    margin-right: 5%;
  }
`;
const StyledHiX = styled(motion(HiX))`
  font-size: 2.25rem; 
  cursor: pointer;
`;
const StyledHiMenu = styled(motion(HiMenu))`
  font-size: 2.25rem; 
  cursor: pointer;
`;

const MenuButton = styled(motion.button)`
    width: 20%;
    font-size: 6rem;
    font-weight: 800;
    border:none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    margin-bottom: 5vh;
    
    @media(max-width: 670px){
    font-size: 2.875rem;
    }
    
    @media(max-width: 390px){
    font-size: 1.25rem;
    }
`;
const MenuButtonyet = styled(motion.button)`
    width: 20%;
    font-size: 6rem;
    font-weight: 800;
    border:none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    margin-bottom: 5vh;
    
    @media(max-width: 670px){
    font-size: 2.875rem;
    }
    
    @media(max-width: 390px){
    font-size: 1.25rem;
    }
`;

const buttonyetVariants = {
    initial: { opacity: 0, x: 0, y: 0 },
    animate: { opacity: 1, x: 40, y: 0, transition:{type: "spring", duration: 1, bounce: 0.5} },
    hover: {scale: 1.2, color: "blue", transition:{type: "spring", duration: 1, bounce: 0.5}},
    tab: {scale: 0.9},
};

const MenuButtons = ({ children }) => {
    const navigate = useNavigate();

    const goToAbout = (go) => {
        console.log("이동")
        navigate(`/${go}`);
    };

    const buttonVariants = {
        initial: { opacity: 0, x: 0, y: 0 },
        animate: { opacity: 1, x: 40, y: 0, transition:{type: "spring", duration: 1, bounce: 0.5} },
        hover: {scale: 1.2, color: "blue", transition:{type: "spring", duration: 1, bounce: 0.5}},
        tab: {scale: 0.9},
    };

    return (
        <MenuButton
            onClick={() => goToAbout(children)}

            variants={buttonVariants}
            initial="initial"
            animate="animate"
            transition="transition"
            whileHover="hover"
            whileTap="tab"
        >
            {children}
        </MenuButton>
    );
};
const StyledLetter = styled(motion.span)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 600;
  color: blue;
`;

const canvasanimation = {
    initial: { opacity: 0, x: 0, y: 0 },
    animate: { opacity: 1, x: 0, y: 0, transition:{type: "spring", duration: 1, bounce: 0.5} },
};



const Header = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const goMain = () => {
        console.log("이동")
        navigate(`/`);
    };

    const goToAdmin = () => {
        navigate('/admin')
    }

    const text = "STUDIO I";
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <div className="logo"><img src={studioi} alt='logo image' className="SocoaLogo" onClick={goMain}/></div>
                    <div className="menu">
                        {show?<StyledHiX className="MenuIcon" onClick={handleClose} />:<StyledHiMenu className="MenuIcon" onClick={handleShow}/>}
                    </div>
                </Wrapper>
            </HeaderBlock>

            <motion.div
                variants={canvasanimation}
                initial="initial"
                animate="animate">
            <AnimatedOffcanvas show={show} onHide={handleClose} placement="top" >
                <Offcanvas.Header/>
                <OffcanvasBody>
                    <CanvasDiv>
                        <MenuButtons>ABOUT</MenuButtons>
                        <MenuButtons>ARTWORK</MenuButtons>
                        <MenuButtonyet
                            variants={buttonyetVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            whileHover="hover"
                            whileTap="tab">CONTACT</MenuButtonyet>
                    </CanvasDiv>
                    <BottomDiv>
                        <Text onClick={goToAdmin}>manage</Text>
                    </BottomDiv>
                </OffcanvasBody>
            </AnimatedOffcanvas>
            </motion.div>


        </>
    );
};

export default Header;