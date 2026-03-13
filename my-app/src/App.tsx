import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'

export type data = {
    id: number
    txt: string
    completed: boolean
}

function App() {

  const [data,setData] = useState<data[]>([])

  const addTodo = (txt: string) =>{
    setData([
      ...data,
      {
        id: Math.random(),
        txt,
        completed: false
      }
    ])
  }

  const dltBtn = (id: number) =>{
    setData(
      data.filter((li)=>{
        return li.id !== id
      })
    )
  }
  
  return (
    <div className='todo'>
        <h1>Todo</h1>
      <TodoForm onAdd = {addTodo}/>
      <TodoList lists = {data} onDelete = {dltBtn}/>
    </div>
  )
}

export default App
