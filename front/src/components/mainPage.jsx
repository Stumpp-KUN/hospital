import React, { useState, useEffect } from 'react';
import '../css/mainPage.css';
import Instruction from "./instruction";

const MainPage = () =>{
    const [instruct, setInstruct] = useState(null);

    const handleInstructionChange = (instruction) => {
        setInstruct(instruction);
      };

    return(
        <div className="main">
            
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
                <button class="button-64" role="button"><span class="text">Оператор</span></button>
                <button class="button-64" role="button"><span class="text">Координатор</span></button>
                <button class="button-64" role="button"><span class="text">Администратор</span></button>
                <button class="button-64" role="button"><span class="text">Глав Администратор</span></button>
                </div>
            </div>
        </div>
    )
}

export default MainPage;