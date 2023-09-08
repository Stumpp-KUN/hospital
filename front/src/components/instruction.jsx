import React, { useState, useEffect, useContext } from 'react';
import '../css/instruction.css';
import axios from 'axios';

const Instruction = ({ onInstructionChange }) =>{
    const [selectedItem, setSelectedItem] = useState(null);
    const [instruct, setInstruct] = useState(null);

    const handleItemClick = (itemText) => {
        setSelectedItem(itemText);
    axios
      .get('http://localhost:8080/api/v1/instruction/', {
        params: {
            title: itemText
          }
      })
      .then(response => {
        setInstruct(response.data);
        onInstructionChange(response.data);
      })
      .catch(error => {
        console.error('Authorization error:', error);
      });


    };

    useEffect(() => {
        handleItemClick("О программе");
    }, []);

    return(
        <nav>
        <ul className="nav__links">
            <li onClick={() => handleItemClick("О программе")} 
            className={selectedItem === "О программе" ? "active" : ""}><span>О программе</span></li>

            <li onClick={() => handleItemClick("Оператор")} 
            className={selectedItem === "Оператор" ? "active" : ""}><span>Оператор</span></li>

            <li onClick={() => handleItemClick("Координатор")} 
            className={selectedItem === "Координатор" ? "active" : ""}><span>Координатор</span></li>

            <li onClick={() => handleItemClick("Администратор")} 
            className={selectedItem === "Администратор" ? "active" : ""}><span>Администратор</span></li>

            <li onClick={() => handleItemClick("Глав врач")} 
            className={selectedItem === "Глав врач" ? "active" : ""}><span>Глав врач</span></li>
        </ul>
    </nav>
    )
}

export  default Instruction;