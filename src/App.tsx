import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'

export type Todo = {
    id: number,
    txt: string,
    completed: boolean
  }

function App() {
  
  const [txt,setTxt] = useState<string>('')
  const [data,setData] = useState<Todo[]>([])

  const addTodo = () => {
    setData([
      ...data,
      {
        id: Math.random(),
        txt,
        completed: false
      }
    ])
  }

  const removeBtn = (id:number) => {
    setData(
      data.filter((todo)=>{
        return todo.id !== id
      })
    )
  }

  const checkTodo = (id:number) => {
    setData(
      data.map((todo)=>{
        if (todo.id === id) {
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  return (
    <div className='todo'>
        <h1>Todo</h1>
        <TodoForm txt = {txt} setTxt = {setTxt} addTodo = {addTodo}/>
        <TodoList checkTodo={checkTodo} removeBtn = {removeBtn} data = {data}/>
    </div>
  )
}

export default App
