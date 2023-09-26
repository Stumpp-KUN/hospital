import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Cookies from "js-cookie";

const AdminPage = () => {
    const accessToken = Cookies.get("accessToken");
    const navigate = useNavigate();

    useEffect(() => {
        if (!accessToken || accessToken === undefined) {
            navigate('/adminauth');
        }
    }, [accessToken, navigate]);

    return(
        <div>
            <h1>Admin page</h1>
        </div>
    )

}

export default AdminPage;