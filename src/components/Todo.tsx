import React, { useState } from "react";
import { FaCheckCircle, FaCircle, FaMarker, FaTrash } from "react-icons/fa";
import { styled } from "styled-components";


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
const iconStyle: React.CSSProperties = {
    color: 'black',
    fontSize: '24px',
}

export default function Todo({ todo, setTodoList }: TodoProps) {
    const { order, placeholder, innerText } = todo;
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const updatedTodo = { ...todo, innerText: e.target.value };
        setTodoList((prev) => prev.map((t) => t.order === todo.order ? updatedTodo : t));
    }

    const handleDelete = (): void => {
        setTodoList((prev) => {
            const filtered = prev.filter((todo) => todo.order !== order);
            const updatedOrder = filtered.map((t, index) => ({
                innerText: filtered[index].innerText,
                placeholder: (index + 1) + "번째 할 일",
                order: index + 1,
                done: filtered[index].done
            }));
            return updatedOrder;
        })
    }
    const handleDone = (): void => {
        setTodoList((prev) => {
            const updatedTodo = { ...todo, done: !todo.done };
            return prev.map((t) => t.order === order ? updatedTodo : t);
        })
    }
    return (
        <FormChild>
            {todo.done ? <FaCheckCircle style={iconStyle} /> : <FaCircle style={iconStyle} />}
            <input onChange={handleInputChange} value={innerText} placeholder={placeholder} type="text" />
            <FaTrash onClick={handleDelete} />
            <FaMarker onClick={handleDone} />
        </FormChild>
    )
}