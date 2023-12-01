import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Body from "../../Components/Common/Body";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";
import {FaRegEdit} from "react-icons/fa";
import EditMainModal from "./Component/EditMainModal";

const StyledTable = styled.table`
  width: 1440px;
  border-collapse: separate;
  border-spacing: 0 16px;

 
  td {
    padding: 15px;
    text-align: center;
  }

  tbody tr {
    background-color: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }
`;

const AdminDiv = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    position: relative;
`;
const Button = styled(motion.button)`
    font-size: 1rem;
    font-weight: 400;
    margin: 0.25rem 0;
    position: absolute;
    left: 0;
`;

const Text = styled(motion.text)`
    font-size: 54px;
    font-weight: 750;
    color: #FF530E;
    letter-spacing: 2px;
    text-align: center;
`;

function DataTable({ data, onEdit}) {
    return (
        <div>
            <StyledTable>
                <thead>
                <tr>
                    <th>번호</th>
                    <th>프로젝트 이름</th>
                    <th>고객사</th>
                    <th>상세 설명</th>
                    <th>게시여부</th>
                    <th>편집</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.client}</td>
                        <td>{item.overView}</td>
                        <td>{item.isPosted ? "O" : "X"}</td>
                        <td>
                            <button onClick={() => onEdit(item)}><FaRegEdit/></button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </StyledTable>
        </div>
    );
}

const MainEditPage = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [editingItemId, setEditingItemId] = useState(null);


    const handleEdit = (item) => {
        console.log(item);
        setEditingItem(item);
        setEditingItemId(item.id);
        setIsEditing(true);
    };

    const handleSave = () => {
        fetchData();
        setIsEditing(false);
    };

    const handleCancel = () => {
        fetchData();
        setIsEditing(false);
    };

    const Back = () => {
        navigate(`/admin`);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios
            .get('https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/projects')
            .then((response) => {
                const data = response.data;
                const objects = [];

                for (let i = 0; i < data.data.length; i++) {
                    const obj = {
                        category: data.data[i].category,
                        client: data.data[i].client,
                        date: data.data[i].date,
                        department: data.data[i].department,
                        id: data.data[i].id,
                        imageUrlList: data.data[i].imageUrlList,
                        isPosted: data.data[i].isPosted,
                        link: data.data[i].link,
                        name: data.data[i].name,
                        overView: data.data[i].overView,
                    };

                    objects.push(obj);
                }
                setData(objects);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <Body>
            <AdminDiv>
                <Button onClick={Back}>뒤로가기</Button>
                <Text>CONTENTS 목록</Text>
            </AdminDiv>
            <DataTable data={data} onEdit={handleEdit}/>
            {isEditing && (
                <EditMainModal item={editingItem} id={editingItemId} onSave={handleSave} onCancel={handleCancel}/>
            )}
        </Body>
    );
};

export default MainEditPage;