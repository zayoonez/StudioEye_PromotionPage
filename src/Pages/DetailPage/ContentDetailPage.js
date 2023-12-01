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

const YoutubeContainer = styled.div`
  
`;

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
            <img src={image} alt={`Image ${index}`} />
        </div>
    ));

    const onReady = (event) => {
        // event.target is the YouTube player that gets passed by react-youtube
        setYoutubePlayer(event.target);
    };

    return (
        <Body>
            <ImageBanner>
                <div>{imageBanner}</div>
            </ImageBanner>
            <DetailContainer>
                <YoutubeContainer>
                {detail.link && (
                    <YouTube videoId={detail.link} opts={{ width: "640", height: "390" }} onReady={onReady} />
                )}
                </YoutubeContainer>
                <InfoContainer>
                    {detail.overView}
                </InfoContainer>
            </DetailContainer>
        </Body>
    );
};

export default ContentDetailPage;
