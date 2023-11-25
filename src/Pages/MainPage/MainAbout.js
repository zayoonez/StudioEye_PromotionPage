import React, {useState, useEffect} from "react";
import Slider from "./Components/Slider";
import axios from "axios";

const MainAbout = () => {
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
                    urlList.push(data.data[i].imageUrlList[0]);
                }

                setImages(urlList);

            }).catch((error) => {
                console.error(error);
        })
    }

    return (
        <Slider images={images}></Slider>
    );
}

export default MainAbout;
