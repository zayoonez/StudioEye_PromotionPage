import React, {useEffect, useState} from "react";
import axios from "axios";
import MyAccordion from "../NoticePage/Components/MyAccordion";
import Body from "../../Components/Common/Body";
import styled from "styled-components";
import {motion} from "framer-motion";
import EditAboutModal from "./Component/EditAboutModal";
import PlusAboutModal from "./Component/PlusAboutModal";


const BoxContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;  
    width: 90%; 
`;

const AdminDiv = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    height: 5rem; 
    width: 80%;
`;

const Button = styled(motion.button)`
    
`;

const Text = styled(motion.text)`
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 16px;

  th,
  td {
    padding: 15px;
    text-align: center;
  }

  th:last-child {
    display: flex;
  }

  tbody tr {
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }
`;

const Img = styled.img`
    width: 20%;
`;

function DataTable({ data, onEdit, deleteProject }) {
    return (
        <StyledTable>
            <thead>
            <tr>
                <th>번호</th>
                <th>분류</th>
                <th>이미지</th>
                <th>링크</th>
                <th>삭제</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.is_main}</td>
                    <td><Img src={item.logoImageUrl} /></td>
                    <td>{item.link}</td>
                    <td>
                        <Button onClick={() => onEdit(item)}>삭제</Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </StyledTable>
    );
}

const AdminEditPage = () => {

    const AdminEditPageContent=()=>{

        const [data, setData] = useState([]);
        const [isEditing, setIsEditing] = useState(false);
        const [editingItem, setEditingItem] = useState(null);
        const [isPlus, setIsPlus] = useState(false);

        const handleEdit = (item) => {
            setEditingItem(item);
            setIsEditing(true);
        };

        const AddAbout = () => {
            setIsPlus(true);
        };


        const handleCancel = () => {
            setIsEditing(false);
            setIsPlus(false);
        };

        useEffect(()=>{

            axios.get('https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/partners')

                .then(response => {
                    const data = response.data;
                    console.log(data);
                    console.log(data.data[0]);
                    const objects = [];

                    for(let i = 0; i < data.data.length; i++) {

                        if(data.data[i].is_main){
                            const obj = {
                                id: data.data[i].id,
                                logoImageUrl: data.data[i].logoImageUrl,
                                link: data.data[i].link,
                                is_main: "Main CoOp."
                            };

                            console.log("여기");
                            console.log(obj);
                            objects.push(obj);
                        }
                        else {
                            const obj = {
                                id: data.data[i].id,
                                logoImageUrl: data.data[i].logoImageUrl,
                                link: data.data[i].link,
                                is_main: "Sub CoOp."
                            };

                            console.log("여기22");
                            console.log(obj);
                            objects.push(obj);
                        }
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
                        <Text>협력사 목록</Text>
                        <Button onClick={AddAbout}>등록하기</Button>
                    <DataTable data={data} onEdit={handleEdit}/>
                    {isEditing && (
                        <EditAboutModal item={editingItem} onCancel={handleCancel}/>
                    )}
                    {isPlus && (
                        <PlusAboutModal onCancel={handleCancel}/>
                    )}

                </BoxContainer>
            </>
        )
    }


    return(
        <Body>
            <AdminEditPageContent/>
        </Body>
    )
}
export default AdminEditPage;