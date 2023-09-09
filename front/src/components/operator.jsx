import React, { useState, useEffect } from "react";
import '../css/operator.css';
import axios from 'axios';

const Operator = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/choices/0')
            .then(response => {
                const data = response.data;
                setSymptoms(data.map(item => item.symptom));
            })
            .catch(error => {
                console.error('Произошла ошибка при получении данных:', error);
            });
    }, []);

    const changeChoices = () => {
        if (inputValue) {
            axios.get(`http://localhost:8080/api/v1/choices/list/${inputValue}`)
                .then(response => {
                    const data = response.data;
                    setSymptoms(data.choiceList.map(item =>item.symptom)); 
                })
                .catch(error => {
                    console.error('Произошла ошибка при отправке запроса:', error);
                });
        }
    };
    

    return (
        <div>
            <div className="mainPart">
                <h2>Выберите вариант</h2>
                <ul>
                    {symptoms.map((symptom, index) => (
                        <li key={index}>{symptom}</li>
                    ))}
                </ul>

                <div className="action">
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={changeChoices}>Pick</button>
                </div>
            </div>
        </div>
    );
}

export default Operator;
