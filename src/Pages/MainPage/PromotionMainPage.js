import React from "react";
import styled from "styled-components";
import Body from "../../Components/Common/Body";

const MainBody = styled.div`
    display : flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
 

`;

const Wrapper = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
    width: 80%;
    justify-content: space-between;
    /* max-width: 100%; */
    flex-wrap: wrap; /* 화면 크기가 작아지면 아래로 내려갈 수 있도록 설정 */
`;

const PromotionMainpage = () => {

    const PromotionMainpageContent=()=>{
        return (
            <>
                <MainBody>

                </MainBody>
            </>
        )
    }


    return(
        <Body>
            <PromotionMainpageContent/>
        </Body>
    )
}
export default PromotionMainpage;