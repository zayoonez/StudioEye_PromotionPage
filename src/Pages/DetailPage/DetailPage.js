import React, {useRef} from "react";
import Body from "../../Components/Common/Body";
import styled, {keyframes} from "styled-components";
import { motion, AnimatePresence} from "framer-motion";
import MainAnimation from "../MainPage/MainAnimation";
import DetailTransition from "../../Components/Common/DetailTransition";
import YouTube from "react-youtube";

const VideoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const DetailPage = () => {

    const options = {
        height: "360",
        width: "640",
        playerVars: {
          autoplay: 0, // 자동 재생
          controls: 1, // 재생 컨트롤 표시
        },
      };
    return(
        <Body>
            <DetailTransition/>

            <AnimatePresence/>
                <VideoWrapper>
                    <YouTube videoId="bcOO4bu7Alc" opts={options}/>
                </VideoWrapper>
        </Body>      
        

    )
}

export default DetailPage;