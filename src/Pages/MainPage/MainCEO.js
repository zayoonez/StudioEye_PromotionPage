import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    width: 100%;
    background-color: #FFE9D2;

`;

const AboutCEO = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 40px;
`;

const About = styled.div`
    display: flex;
    flex-direction: column;

`;

const CEOName = styled.h1`
    font-weight: bold;
    font-size: 63px;
    text-align: right;
    margin-top: 0px;
`;

const CEOInfo = styled.div`
    font-size: 20px;
    white-space: pre-line;
    text-align: right;
`;

const InfoText = " CJ ENM 디지털 제작 팀장 출신 \n TV 예능, 웹드라마, 디지털 다큐멘터리, 게임 콘텐츠 연출 \n 기업 및 정부기관 콘텐츠 제작 및 SNS 운영 \n 엔터테인먼트 아티스트 콘텐츠 제작 \n "

const DividingLine = styled.div`
    height: 100%;
    border-left : thick solid #FFA900;
    margin: 20px;
`;

const CImage = styled.div`
    /* height: 60px;
    width: 60px;
    background-color: #FFA900; */
`;

const SMain = styled.div`
    color: #FFA900;
    font-size: 110px;
    font-weight: bold;
`;
const SSub = styled.div`
    font-size: 20px;
    margin-bottom: 30px;
`;

const MainCEO = () => {
    return (
        <Wrapper>
            <AboutCEO>
                <About>
                    <CEOName>CEO 박용진</CEOName>
                    <CEOInfo>
                        {InfoText}
                    </CEOInfo>
                </About>
                <DividingLine />
                <CImage>

                </CImage>
            </AboutCEO>
            <SMain>
                ENJOY YOUR EYES
            </SMain>
            <SSub>
                고객의 목적에 맞춘 최적이 콘텐츠로 재미와 감동을 드리겠습니다.
            </SSub>
        </Wrapper>
    )

}

export default MainCEO;