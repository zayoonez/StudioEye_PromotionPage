import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Data from "bootstrap/js/src/dom/data";
import Body from "../../Components/Common/Body";
import ShowContactModal from "./Component/ShowContactModal";

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

function DataTable({data, onEdit}){
    return(
        <StyledTable>
            <thead>
            <tr>
                <th>contactId</th>
                <th>category</th>
                <th>clientName</th>
                <th>organization</th>
                <th>contact</th>
                <th>email</th>
                <th>position</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => (
                <tr key={item.id} onClick={() => onEdit(item)}>
                    <td>{item.id}</td>
                    <td>{item.category}</td>
                    <td>{item.clientName}</td>
                    <td>{item.organization}</td>
                    <td>{item.contact}</td>
                    <td>{item.email}</td>
                    <td>{item.position}</td>
                </tr>
            ))}
            </tbody>

        </StyledTable>
    );
}

const ContactEditPage = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
    const [editingItem, setEditingItem] = useState(null);


    const handleEdit = (item) => {
        setEditingItem(item);
        setIsModalOpen(true); // 모달 열기
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    useEffect(() => {
        axios
            .get('https://port-0-promoationpage-server-12fhqa2blnlum4de.sel5.cloudtype.app/api/requests')
            .then((response) => {
                const data = response.data;

                console.log(data.data[1]);
                const objects = [];
                const imgObjects = [];

                for (let i = 0; i < data.data.length; i++) {
                    const obj = {
                        category: data.data[i].category,
                        clientName: data.data[i].clientName,
                        organization: data.data[i].organization,
                        contact: data.data[i].contact,
                        id: data.data[i].id,
                        email: data.data[i].email,
                        position: data.data[i].position,
                        description: data.data[i].description,
                        fileUrlList: data.data[i].fileUrlList,
                    };

                    objects.push(obj);
                }
                setData(objects);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return(
        <Body>
            <div>
                <DataTable data={data} onEdit={handleEdit}></DataTable>
                {isModalOpen && (
                    <ShowContactModal item={editingItem} onClose={handleCloseModal} />
                )}
            </div>
        </Body>
    );

}

export default ContactEditPage;
