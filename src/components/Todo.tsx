import React, { useState } from "react";
import { styled } from "styled-components";
import "../App.css";


interface TodoProps {
    todo: Todo;
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const FormChild = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-template-columns: 5fr;
  width: 50%;
`

export default function Todo({ todo, setTodoList }: TodoProps) {
    const { order, placeholder, innerText } = todo;
    const [isDisabled, setIsDisabled] = useState(false);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const updatedTodo = { ...todo, innerText: e.target.value };
        setTodoList((prev) => prev.map((t) => t.order === todo.order ? updatedTodo : t));
    }
    const toggleInputState = (): void => {
        setIsDisabled(!isDisabled);
    }
    const handleDelete = (): void => {
        setTodoList((prev: Todo[]) => {
            const filtered = prev.filter((todo) => todo.order !== order);
            const updatedOrder = filtered.map((todo, index) => ({
                innerText: filtered[index].innerText,
                placeholder: (index + 1) + "번째 할 일",
                order: index + 1,
            }));
            return updatedOrder;
        })
    }
    return (

        <FormChild>
            <input onChange={handleInputChange} value={innerText} placeholder={placeholder} disabled={isDisabled} type="text" />
            <button onClick={toggleInputState}>{isDisabled ? "수정" : "입력"}</button>
            <button onClick={handleDelete}>삭제</button>
        </FormChild>
    )
}