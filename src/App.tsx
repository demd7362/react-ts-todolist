import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';


interface Todo{
  order: number;
  text: string;
  
}
function App(){
  const [todoListCount,setTodoListCount] = useState<Todo[]>([]);
  const handleTodoList = (isIncrease:boolean) => {
    setTodoListCount((prev:number)=>{
      if(!isIncrease && prev === 0){
        return prev;
      }
      return prev + (isIncrease ? 1 : -1);
    })
  }
  
  return (
    <div className='form'>
      {[...Array(todoListCount).keys()].map(index=>{
        return <Todo key={index} handleTodoList={handleTodoList}/>
      })}
    </div>
  );
}
export default App;
