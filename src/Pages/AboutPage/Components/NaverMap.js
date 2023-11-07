import React, { useEffect, useRef } from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";

const Div = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 27rem;
    padding: 5%;
    
    @media(max-width: 520px){
    height: 17rem;
    }
    
    @media(max-width: 390px){
    height: 13.5rem;
    }
`;

function NaverMap() {
    const mapElement = useRef(null);
    const markerLocation = { lat: 37.551442330782, lng: 127.04819402296 };
    const mapOptions = {
        center: markerLocation,
        zoom: 16,
        draggable: false,
        zoomControl: true,
    };

    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        const map = new naver.maps.Map(mapElement.current, mapOptions);

        const marker = new naver.maps.Marker({
            position: markerLocation,
            map,
        });

        // Add event listener for zoom_changed, dragend, and mousewheel events
        naver.maps.Event.addListener(map, 'zoom_changed', () => {
            map.panTo(markerLocation);
        });
        naver.maps.Event.addListener(map, 'dragend', () => {
            map.panTo(markerLocation);
        });
        naver.maps.Event.addListener(map, 'mousewheel', (e) => {
            const newZoom = map.getZoom() + e.deltaY * -0.1;
            if (newZoom < 1) {
                map.setZoom(1);
            } else if (newZoom > 18) {
                map.setZoom(18);
            } else {
                map.setZoom(newZoom);
            }
            map.panTo(markerLocation);
        });
    }, []);

    return <Div ref={mapElement}  />;
}

export default NaverMap;
