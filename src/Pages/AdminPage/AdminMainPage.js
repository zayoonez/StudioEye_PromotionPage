import Body from "../../Components/Common/Body";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {motion} from "framer-motion";
import { GrContact } from "react-icons/gr";
import {AiFillYoutube} from "react-icons/ai";
import {BsFillInfoCircleFill,BsFillPatchQuestionFill} from "react-icons/bs";

const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;   
`;

const Div = styled(motion.div)`
    width: 20%;
    height: 30vh;
    padding-top: 20vh;
    flex-direction: column;
    text-align: center;
    border: 1px solid black;
    margin: 1%;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
`;

const AboutLogo = styled(motion(BsFillInfoCircleFill))`
  width: 100%;
  font-size: 2.25rem; 
  cursor: pointer;
`;
const ContactLogo = styled(motion(GrContact))`
  width: 100%;
  font-size: 2.25rem; 
  cursor: pointer;
`;
const ArtworkLogo = styled(motion(AiFillYoutube))`
  width: 100%;
  font-size: 2.25rem; 
  cursor: pointer;
`;
const NoticeLogo = styled(motion(BsFillPatchQuestionFill))`
  width: 100%;
  font-size: 2.25rem; 
  cursor: pointer;
`;

const AdminMainPage = () => {

    const navigate = useNavigate();
    function moveToEditPage(moveTo) {
        navigate('/admin/'+moveTo);
    }

    return(
        <Body>
            <BoxContainer>
                <Div onClick={() => moveToEditPage('about')}><AboutLogo/>ABOUT</Div>
                <Div onClick={() => moveToEditPage('artwork')}><ArtworkLogo/>CONTENTS</Div>
                <Div onClick={() => moveToEditPage('mainpage')}><NoticeLogo/>MAINPAGE</Div>
                <Div onClick={() => moveToEditPage('contact')}><ContactLogo/>CONTACT</Div>
            </BoxContainer>
        </Body>
    )
}

export default AdminMainPage;