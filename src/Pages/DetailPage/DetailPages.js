import { motion, useTransform, useScroll } from "framer-motion";
import React, {useEffect, useRef , useState} from "react";
import HorizontalScroll from "react-scroll-horizontal";
import styled from "styled-components";
import Body from "../../Components/Common/Body";
import image from "../../assets/images/1.jpeg"
import {useParams} from "react-router-dom";
import LetterAnimation from "../../Components/Common/LetterAnimation";
import axios from "axios";

//subdiv 없게 
//height 설정이랑 width 난감 재설정 필요
//라이브러리 이용 말고 scroll hidden 후 framer motion 적용도 생각중

const StyledBody = styled(Body)`
  display: flex;
  flex-direction: column;
`;
const MainDiv = styled.div`
  position: absolute;
  left: -1px;
  height: 93vh;
  //이게 ..........calc 가 안먹어 ! 100vh - 4rem 을 해야되는데 .. !
  width: 100vw;
`;
const Title = styled(motion.div)`
  width: 80vw;
  height: 100px;
  color: black;
  text-align: center;
  position: fixed;
  font-weight: 500;
  font-size: 100px;
  top: 20vh;
  margin : 10px;
`;

const Client = styled.div`
  color: black;
  font-size: 50px;
  font-weight: 500;
  position: fixed;
  bottom: 80px;
  margin-left: 100px;
`;

const Date = styled.div`
  color: black;
  font-size: 40px;
  font-weight: 400;
  position: fixed;
  bottom: 30px;
  margin-left: 100px;

`;

const OverView = styled.div`
  font-size: 30px;
  padding : 45vh 20vh;
  color: white;
`;
const VideoContainer = styled.div`
  width: 45vw;
  //width 와 height 같게 하는 방법
  padding-bottom: 45vw;
  border-radius: 50%;
  background-color: red;
`;


const FirstDetail = styled.div`
  position: relative;
  /* background-color: lightgrey; */
  /* background-image: url(../../assets/images/1.jpeg); */
  /* background: url(${image}); */
  /* background-size: cover; */
`;
const BackGround = styled.div`
    width: 80vw;
    height: 100vh;
    background-size: cover;
    opacity: 0.3;
    /* background-color: beige; */
`;
const SecondDetail = styled.div`
  background-color: black;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const ThirdDetail = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailPages = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [imgData, setImgData] = useState([]);
  
  useEffect(() => {
    getDetails(id);
  },[]);



  const getDetails = (id) => {
    axios.get(`https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/projects/${id}`)
      .then(response => {
        const data = response.data;
        console.log(data.data.id, "zzzz");
        console.log(data.data , "zz");
        const objects = [];
        const imgObjects = [];

        const obj = {
          category: data.data.category,
          client: data.data.client,
          date: data.data.date,
          department: data.data.department,
          id: data.data.id,
          isPosted: data.data.isPosted,
          link: data.data.link,
          name: data.data.name,
          overView: data.data.overView,
          img: data.data.imageUrlList[0]
        };
      //   const ImgObj = {
      //     ImgId: data.data.id,
      //     title: data.data.title
      // };

        // imgObjects.push(ImgObj);
        objects.push(obj);
        setImgData(imgObjects);
        setDetail(obj);
      })
      .catch(error => {
        console.error(error);
    });
  };
  const First = {
    width : '80vw', height : '100%'
  }
  const Second = {
    width : '60vw', height : '100%'
  }
  const Third = {
    width : '80vw', height : '100%'
  }

  //title animation 해
  return(
    <StyledBody>
      <MainDiv>
        <HorizontalScroll reverseScroll = {true} config={{damping:15}}>
        <FirstDetail reverseScroll = {true} style={First}>
            <BackGround style={{ backgroundImage: `url(${detail.img})` }}/>
            <Title 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}> 
                {detail.name} </Title>
            {/* <LetterAnimation about detailTitle text="x"></LetterAnimation> */}
            <Client>{detail.client}</Client>
            <Date>2023</Date>
          </FirstDetail>
          <SecondDetail reverseScroll = {true} style = {Second}>
            <OverView>{detail.overView}</OverView>
          </SecondDetail>
          <ThirdDetail reverseScroll = {true} style = {Third}>
            <VideoContainer>
              
            </VideoContainer>
          </ThirdDetail>
        </HorizontalScroll>
      </MainDiv>

    </StyledBody>
  )
};


export default DetailPages;
