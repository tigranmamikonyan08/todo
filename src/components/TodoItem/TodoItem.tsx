type TodoItem = {
    txt:string
    id:number
    completed:boolean
    checkTodo: (id:number) => void
    removeBtn: (id:number) => void
}

const TodoItem = ({txt,id,completed,checkTodo,removeBtn}:TodoItem) =>{
    return (
        <li>
            <span
                style={{
                    textDecoration: completed ? 'line-through' : 'none' 
                }}
            >{txt}</span>
            <input onChange={()=> checkTodo(id)} type="checkbox" checked={completed}/>
            <span onClick={() => removeBtn(id)} style={{
                color: 'red',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                cursor: "pointer",
            }}>X</span>
        </li>
    )
}

export default TodoItem