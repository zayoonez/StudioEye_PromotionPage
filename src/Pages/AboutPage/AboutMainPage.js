import React, { useEffect } from "react";
import styled from "styled-components";
import Body from "../../Components/Common/Body";
import BasicInfoGrid from "./BasicInfoGrid";
import HistoryGrid from "./HistoryGrid";
import CoOpInfoGrid from "./CoOpInfoGrid";
import { motion } from "framer-motion";
import { ReactComponent as LogoIcon } from "../../assets/logo/STUDIO-I.svg";
import GreetingGrid from "./GreetingGrid";
import NaverMapGrid from "./NaverMapGrid";


const AboutMainpage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const AboutMainpageContent = () => {
        return (
            <>
                <BasicInfoGrid />
                <GreetingGrid />
                <CoOpInfoGrid />
                <NaverMapGrid />
            </>
        )
    }


    return (
        <Body>
            <AboutMainpageContent />
        </Body>
    )
}
export default AboutMainpage;