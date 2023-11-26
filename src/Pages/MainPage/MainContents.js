import React, {useEffect, useState} from "react";
import styled from "styled-components";
import DragScroll from "./Components/DragScroll";
import axios from "axios";


const Wrapper = styled.div`
  background-color: #F3F4F8;
`;

const MainContents = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get('https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/projects')
            .then((response) => {
                const data = response.data;
                const urlList = [];

                for(let i = 0; i < data.data.length; i++){
                    //썸네일만 가져오기
                    urlList.push(data.data[i].imageUrlList[0]);
                }

                setImages(urlList);

            }).catch((error) => {
            console.error(error);
        })
    }

    return(
        <Wrapper>
            <div>WHAT WE DO</div>
            <div>스튜디오아이는 OTT, Youtube를 기반으로 한 콘텐츠 제작과 SNS 운영을 전문으로 하는 뉴미디어 제작사입니다</div>
            <div>예능, 드라마, 다큐멘터리, 게임, 애니메이션까지 전 장르의 콘텐츠를 제작하고 Youtube, Instagram 운영을 대행합니다</div>

            <div>CONTENT</div>
            <DragScroll images={images}></DragScroll>
        </Wrapper>
    )
}

export default MainContents;