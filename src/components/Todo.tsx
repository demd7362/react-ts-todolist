import React, { useState } from "react";
import "../App.css"

interface TodoProps {
    handleTodoList: (isIncrease: boolean) => void;
}

export default function Todo({ handleTodoList }: TodoProps) {
    const [inputText, setInputText] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputText(e.target.value);
    }
    const toggleInputState = (): void => {
        setIsDisabled(!isDisabled);
    }
    return (
        <div className='form-child'>
            <input onChange={handleInputChange} disabled={isDisabled} type="text" />
            <button onClick={toggleInputState}>{isDisabled ? "수정" : "입력"}</button>
            <button onClick={()=>{
                handleTodoList(false);
            }}>삭제</button>
        </div>
    )
}