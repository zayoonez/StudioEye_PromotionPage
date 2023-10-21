import Body from "../../Components/Common/Body";
import {useNavigate} from "react-router-dom";
const AdminMainPage = () => {

    const navigate = useNavigate();
    function moveToEditPage(moveTo) {
        navigate('/admin/'+moveTo);
    }

    return(
        <Body>
            <button onClick={() => moveToEditPage('about')}>about</button>
            <button onClick={() => moveToEditPage('artwork')}>Artwork</button>
            <button onClick={() => moveToEditPage('contact')}>contact</button>
            <button onClick={() => moveToEditPage('notice')}>notice</button>
        </Body>
    )
}

export default AdminMainPage;