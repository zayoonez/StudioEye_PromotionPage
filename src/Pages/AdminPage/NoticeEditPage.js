import React, {useEffect, useState} from "react";
import axios from "axios";
import Body from "../../Components/Common/Body";
import styled from "styled-components";
import {motion} from "framer-motion";
import EditNoticeModal from "./Component/EditNoticeModal";
import PlusNoticeModal from "./Component/PlusNoticeModal";
import {AiFillDelete} from "react-icons/ai";


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
    text-align: center;
    width: 100%;
    position: relative;
`;
const Delete = styled(motion(AiFillDelete))`
  font-size: 2.25rem; 
  cursor: pointer;
`;
const Button = styled(motion.button)`
    font-size: 1rem;
    font-weight: 400;
    margin: 0.25rem 0;
    position: absolute;
    right: 0;
`;

const Text = styled(motion.text)`
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;

const StyledTable = styled.table`
  width: 1180px;
  border-collapse: separate;
  border-spacing: 0 2px;

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
    width: 60%;
`;

function DataTable({ data, onEdit, deleteProject }) {
    return (
        <StyledTable>
            <thead>
            <tr>
                <th>-</th>
                <th>제목</th>
                <th>이미지</th>
                <th>삭제</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td><Img src={item.imageUrl} /></td>
                    <td>
                        <Delete onClick={() => onEdit(item)}></Delete>
                    </td>
                </tr>
            ))}
            </tbody>
        </StyledTable>
    );
}

const NoticeEditPage = () => {

    const NoticeEditPageContent=()=>{

        const [data, setData] = useState([]);
        const [isEditing, setIsEditing] = useState(false);
        const [editingItem, setEditingItem] = useState(null);
        const [isPlus, setIsPlus] = useState(false);

        const handleEdit = (item) => {
            setEditingItem(item);
            setIsEditing(true);
        };
        const AddNotice = () => {
            setIsPlus(true);
        };

        const handleCancel = () => {
            setIsEditing(false);
            setIsPlus(false);
        };

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
                    <AdminDiv>
                    <Text>공지사항 목록</Text>
                    <Button onClick={AddNotice}>등록하기</Button>
                    </AdminDiv>
                    <DataTable data={data} onEdit={handleEdit}/>
                    {isEditing && (
                        <EditNoticeModal item={editingItem} onCancel={handleCancel}/>
                    )}
                    {isPlus && (
                        <PlusNoticeModal onCancel={handleCancel}/>
                    )}
                </BoxContainer>
            </>
        )
    }


    return(
        <Body>
            <NoticeEditPageContent/>
        </Body>
    )
}
export default NoticeEditPage;