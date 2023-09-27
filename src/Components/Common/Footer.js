import React, {useState} from 'react';
import styled from 'styled-components';
import Responsive from './responsive';
import { HiMenu,HiX } from "react-icons/hi";
import Offcanvas from 'react-bootstrap/Offcanvas';
import {motion} from "framer-motion";
import {Variants} from "framer-motion";

const FooterBlock = styled.div`
  position: fixed;
  width: 100%;
`;
const Wrapper = styled(Responsive)`
  height: 8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: red;

`;

const Footer = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const text = "STUDIO I";
    return (
        <>
            <FooterBlock>
                <Wrapper>
                    <div>
                        dfafadsf
                    </div>
                </Wrapper>
            </FooterBlock>


        </>
    );
};

export default Footer;