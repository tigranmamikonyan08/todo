import type { Todo } from "../../App"
import TodoItem from "../TodoItem/TodoItem"

type TodoListProps = {
    data: Todo[]
    removeBtn: (id:number) => void
    checkTodo: (id:number) => void
}

const TodoList = ({data,checkTodo,removeBtn}:TodoListProps) =>{    

    return (
        <ul>
            {
                data.map((todo)=>{
                    return (
                        <TodoItem checkTodo={checkTodo} completed = {todo.completed} id ={todo.id} removeBtn = {removeBtn} key={todo.id} txt={todo.txt}/>
                    )
                })
            }
        </ul>
    )
}

export default TodoList