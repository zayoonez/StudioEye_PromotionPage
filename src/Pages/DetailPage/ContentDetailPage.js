import React, { useEffect, useState } from "react";
import Body from "../../Components/Common/Body";
import { useParams } from "react-router-dom";
import axios from "axios";
import YouTube from "react-youtube";
import styled from "styled-components";

const ImageBanner = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailContainer = styled.div`
  display: flex;
`;

const YoutubeContainer = styled.div``;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentDetailPage = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    const [imageList, setImageList] = useState([]);
    const [youtubePlayer, setYoutubePlayer] = useState(null);

    const APIKey = "";

    useEffect(() => {
        getDetails(id);
    }, [id]);

    const getDetails = (id) => {
        axios
            .get(`https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/projects/${id}`)
            .then((response) => {
                const data = response.data;
                const content = {
                    category: data.data.category,
                    client: data.data.client,
                    date: data.data.date,
                    department: data.data.department,
                    id: data.data.id,
                    imageUrlList: data.data.imageUrlList,
                    isPosted: data.data.isPosted,
                    link: data.data.link,
                    name: data.data.name,
                    overView: data.data.overView,
                };
                setImageList(data.data.imageUrlList);
                setDetail(content);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const imageBanner = imageList.map((image, index) => (
        <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
        </div>
    ));

    const onReady = (event) => {
        // event.target is the YouTube player that gets passed by react-youtube
        setYoutubePlayer(event.target);
    };

    const renderVideoPlayer = () => {
        if (youtubePlayer && youtubePlayer.internalPlayer && detail.link) {
            youtubePlayer.internalPlayer.loadVideoById(detail.link);
        }
    };

    useEffect(() => {
        determineVideoType();
    }, [detail.link]);

    const determineVideoType = async () => {
        try {
            if (detail.link) {
                if (detail.link.includes("/@")) {
                    // 채널의 가장 최근 영상
                    const channelUsername = detail.link.split("/@")[1];
                    const channelIdResponse = await axios.get(`https://www.googleapis.com/youtube/v3/channels?key=${APIKey}&forUsername=${channelUsername}&part=id`);
                    const channelId = channelIdResponse.data.items[0].id;
                    const latestVideoResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${APIKey}&channelId=${channelId}&part=id&order=date&type=video`);
                    const latestVideoId = latestVideoResponse.data.items[0].id.videoId;
                    setDetail({ ...detail, link: latestVideoId });
                } else if (detail.link.includes("/playlist?list=")) {
                    // 재생목록의 첫 번째 영상
                    const playlistId = detail.link.split("list=")[1];
                    const playlistResponse = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?key=${APIKey}&playlistId=${playlistId}&part=snippet&maxResults=1`);
                    const firstVideoId = playlistResponse.data.items[0].snippet.resourceId.videoId;
                    setDetail({ ...detail, link: firstVideoId });
                } else if (detail.link.includes("/user/")) {
                    // 채널의 가장 최근 영상
                    const channelUsername = detail.link.split("/user/")[1];
                    const channelIdResponse = await axios.get(`https://www.googleapis.com/youtube/v3/channels?key=${APIKey}&forUsername=${channelUsername}&part=id`);
                    const channelId = channelIdResponse.data.items[0].id;
                    const latestVideoResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${APIKey}&channelId=${channelId}&part=id&order=date&type=video`);
                    const latestVideoId = latestVideoResponse.data.items[0].id.videoId;
                    setDetail({ ...detail, link: latestVideoId });
                } else if (detail.link.includes("youtu.be")) {
                    // 동영상 주소
                    const videoId = detail.link.split("youtu.be/")[1];
                    console.log(videoId)
                    setDetail({ ...detail, link: videoId });
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Body>
            <ImageBanner>
                <div>{imageBanner}</div>
            </ImageBanner>
            <DetailContainer>
                <YoutubeContainer>
                    {detail.link && <YouTube videoId={detail.link} opts={{ width: "640", height: "390" }} onReady={onReady} />}
                </YoutubeContainer>
                <InfoContainer>
                    {detail.overView}
                </InfoContainer>
            </DetailContainer>
        </Body>
    );
};

export default ContentDetailPage;
