import { useCallback, useReducer, useState } from 'react';
import { createGlobalStyle, styled } from 'styled-components';
import Todo from './components/Todo';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  
  const addTodoList = () => {

    const newTodo: Todo = {
      order: todoList.length,
      placeholder: todoList.length + 1 + '번째 할 일',
      done: false
    }
    setTodoList((prev: Todo[]): Todo[] => {
      return [...prev, newTodo];
    })

  }

  return (
    <>
      <GlobalStyle />

      <Form>
        <button onClick={addTodoList}>추가</button>
        {todoList.map((todo: Todo) => {
          return <Todo key={todo.order} todo={todo} setTodoList={setTodoList} />
        })}
      </Form>
    </>
  );
}
export default App;
