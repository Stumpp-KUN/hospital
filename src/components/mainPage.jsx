import React, { useState, useEffect } from 'react';
import '../css/mainPage.css';
import Instruction from "./instruction";
import { Link } from 'react-router-dom';

const MainPage = () =>{
    const [instruct, setInstruct] = useState(null);

    const handleInstructionChange = (instruction) => {
        setInstruct(instruction);
      };

    return(
        <div className="mainik">
            
            <div className="mainGuide">
            <Instruction onInstructionChange={handleInstructionChange} />

            {instruct && (
                    <div className="instructionContainer">
                        <span className="instructionText">{instruct.instruction}</span>
                    </div>
                )}

            </div>


            <div className="slideBar">
                <h1>Функции</h1>
                <div>
                    <Link to="/operator" className='link'>
                <button class="button-64" role="button"><span class="text">Оператор</span></button>
                </Link>
                <button class="button-64" role="button"><span class="text">Координатор</span></button>
                <Link to="/adminauth" className='link'>
                <button class="button-64" role="button"><span class="text">Администратор</span></button>
                </Link>
                <button class="button-64" role="button"><span class="text">Глав Администратор</span></button>
                </div>
            </div>
        </div>
    )
}

export default MainPage;