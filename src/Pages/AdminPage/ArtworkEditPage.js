import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import EditModal from "./Component/EditModal,js";

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

function DataTable({ data, onEdit, deleteProject }) {
    return (
        <StyledTable>
            <thead>
            <tr>
                <th>번호</th>
                <th>제작부서</th>
                <th>카테고리</th>
                <th>프로젝트 이름</th>
                <th>고객사</th>
                <th>연도</th>
                <th>게시여부</th>
                <th>상세 설명</th>
                <th>동영상 링크</th>
                <th>편집</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.department}</td>
                    <td>{item.category}</td>
                    <td>{item.name}</td>
                    <td>{item.client}</td>
                    <td>{item.date}</td>
                    <td>{item.isPosted ? "O" : "X"}</td>
                    <td>{item.overView}</td>
                    <td>{item.link}</td>
                    <td>
                        <button onClick={() => onEdit(item)}>편집</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </StyledTable>
    );
}

const ArtworkEditPage = () => {
    const [data, setData] = useState([]);
    const [imgData, setImgData] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    const handleEdit = (item) => {
        setEditingItem(item);
        setIsEditing(true);
    };

    const handleSave = (editedItem) => {
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const deleteProject = () => {
        
    }


    useEffect(() => {
        axios
            .get('https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/projects')
            .then((response) => {
                const data = response.data;

                console.log(data.data[0]);
                const objects = [];
                const imgObjects = [];

                for (let i = 0; i < data.data.length; i++) {
                    const obj = {
                        category: data.data[i].category,
                        client: data.data[i].client,
                        date: data.data[i].date,
                        department: data.data[i].department,
                        id: data.data[i].id,
                        // imgList: data.data[i].imageUrlList,
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
    }, []);


    return (
        <div>
            <DataTable data={data} onEdit={handleEdit}/>
            {isEditing && (
                <EditModal item={editingItem} onSave={handleSave} onCancel={handleCancel}/>
            )}
        </div>
    );
};

export default ArtworkEditPage;
