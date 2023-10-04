import React from "react";
import '../css/adminAuth.css';
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AdminAuth = () =>{
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState("");
    const [loginMessage, setLoginMessage] = useState("Введите логин"); 
    const [passwordMessage, setPasswordMessage] = useState("Введите пароль"); 
    const [inputImage, setInputImage] = useState("clear-icon.png");

    const clearInput = (field) => {
        if (field === "username") {
            setUsername("");
            setLoginMessage("");
        } else if (field === "password") {
            setPassword("");
            setPasswordMessage("");
        }
    };

    const handleLogin = async () => {
        try {
            const data = {
                login: username,
                password: password,
            };
            
            const jsonData = JSON.stringify(data);
            
            const response = await axios.post("https://ec2-13-49-16-252.eu-north-1.compute.amazonaws.com:5000/api/auth/login", jsonData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.data.accessToken && response.data.refreshToken) {
                Cookies.set("accessToken", response.data.accessToken);
                Cookies.set("refreshToken", response.data.refreshToken);
                console.log(Cookies.get('accessToken'))
                window.location.href = "/admin";
            } 
        } catch (error) {
            console.error("Произошла ошибка при входе:", error);
            setPasswordMessage("Неправильный логин или пароль");
            setLoginMessage("");
            document.getElementById("username").style.borderColor = "red";
            document.getElementById("password").style.borderColor = "red";
            setInputImage("error.png");
        }
    };

    return(
        <div className="auth">
            <div>
                <h1 className="info">Пожалуйста, введите свои данные для входа в систему</h1>
            </div>

            <div className="center-content">

            <div className="form__group field">
                    <input
                        type="input"
                        className="form__field"
                        placeholder="Name"
                        id="username"
                        name="name"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="username" className="form__label">Имя пользователя</label>
                    <p className="under">{loginMessage}</p>
                    {username && (
                        <img src={inputImage} alt="Clear" className="clear-icon" onClick={() => clearInput("username")} />
                    )}
                </div>

            <div className="form__group field">
                    <input 
                    type="input" 
                    className="form__field" 
                    placeholder="Password" 
                    id="password" 
                    name="password" 
                    required  
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password" className="form__label">Пароль</label>
                    <p className="under">{passwordMessage}</p>
                    {password && (
                        <img src={inputImage} alt="Clear" className="clear-icon" onClick={() => clearInput("password")} />
                    )}
            </div>

            <button
                    className="button-18"
                    role="button"
                    onClick={handleLogin}
                    disabled={!username || !password} 
                >Войти</button>
            </div>
        </div>
    )
}

export default AdminAuth;