import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Body from "../../Components/Common/Body";
import {motion} from "framer-motion";
import axios from "axios";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;   
`;

const Text = styled(motion.text)`
    font-size: 4rem;
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
    height: 70rem;
    margin-top: 2rem;
`;

const Title = styled(motion.div)`
    font-size: 2rem;
    border: 1px solid black;
    width: 98%;
`;

const Accordions = styled(Accordion)`
    font-size : 2rem;
`;
const AccordionItem = styled(Accordion.Item)`
    font-size : 2rem;
`;
const AccordionHeader = styled(Accordion.Header)`
    border: 1px solid blue;
    font-size : 3rem;
    width: 100%;
`;
const AccordionBody = styled(Accordion.Body)`
    border: 1px solid pink;
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
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                 aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is
                                    intended to demonstrate the <code>.accordion-flush</code> class. This is the first
                                    item's accordion body.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                 aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is
                                    intended to demonstrate the <code>.accordion-flush</code> class. This is the second
                                    item's accordion body. Let's imagine this being filled with some actual content.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                 aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Placeholder content for this accordion, which is
                                    intended to demonstrate the <code>.accordion-flush</code> class. This is the third
                                    item's accordion body. Nothing more exciting happening here in terms of content, but
                                    just filling up the space to make it look, at least at first glance, a bit more
                                    representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<FaQContainer>*/}
                    {/*    <Accordions defaultActiveKey="0" flush>*/}
                    {/*        {data.map((item, i) => (*/}
                    {/*            // <Title>Q{i+1}.{item.title}</Title>*/}
                    {/*            <Accordion.Item key={item.id} eventKey={i}>*/}
                    {/*                <Accordion.Header>{item.title}</Accordion.Header>*/}
                    {/*                <Accordion.Body>*/}
                    {/*                    <img src={item.imageUrl} />*/}
                    {/*                </Accordion.Body>*/}
                    {/*            </Accordion.Item>*/}
                    {/*        ))}*/}
                    {/*    </Accordions>*/}
                    {/*</FaQContainer>*/}
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