import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Body from "../../Components/Common/Body";
import {motion} from "framer-motion";
import axios from "axios";
import Accordion from 'react-bootstrap/Accordion';


const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;   
`;

const Text = styled(motion.text)`
    font-size: 5rem;
    font-weight: 600;
`;
const FaQContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;   
    border: 1px solid red;
    width: 100%;
`;

const AccordionItem = styled(Accordion.Item)`
    font-size : 2rem;
    padding: 30px 20px 20px 10px;
`;
const AccordionHeader = styled(Accordion.Header)`
    border: 1px solid blue;
`;
const AccordionBody = styled(Accordion.Body)`
    
`;

const NoticeMainpage = () => {

    const NoticeMainpageContent=()=>{
        const [data, setData] = useState([]);

        useEffect(()=>{

            axios.get('https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/notice-board')

                .then(response => {
                    const data = response.data;
                    console.log(data);
                    console.log(data.data[0]);
                    const objects = [];

                    for(let i = 0; i < data.data.length; i++) {
                        const obj = {
                            id: data.data[i].id,
                            imageUrl: data.data[i].imageUrl,
                            title: data.data[i].title
                        };
                        console.log("여기");
                        console.log(obj);
                        objects.push(obj);
                    }
                    setData(objects);
                })
                .catch(error => {
                    console.error(error);
                });
        },[]);

        return (
            <>
                <BoxContainer>
                    <Text>notice</Text>
                    <FaQContainer>
                        <Accordion defaultActiveKey={null} flush>
                            {data.map((item, i) => (
                            <AccordionItem key={item.id-1} eventKey={item.id-1}>
                                <AccordionHeader>{item.title}</AccordionHeader>
                                <AccordionBody>
                                    <img src={item.imageUrl}/>
                                </AccordionBody>
                            </AccordionItem>
                            ))}
                        </Accordion>
                    </FaQContainer>
                </BoxContainer>
            </>
        )
    }


    return(
        <Body>
            <NoticeMainpageContent/>
        </Body>
    )
}
export default NoticeMainpage;