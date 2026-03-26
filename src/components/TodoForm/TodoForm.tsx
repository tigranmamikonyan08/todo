import './TodoForm.css'
import { useState } from 'react'

type TodoFormProps = {
    addTodo: (name:string) => void
}

const TodoForm = ({addTodo}: TodoFormProps) =>{
    const [txt,setTxt] = useState<string>('')

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        txt.trim() &&
        addTodo(txt)
        setTxt('')
    }

    return (
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>setTxt(e.target.value)} value={txt} type="text"/>
                <button className='addBtn'>Add</button>
                <div>{txt}</div>
            </form>
    )
}

export default TodoForm