import type { data } from '../../App'
import TodoItem from '../TodoItem/TodoItem';

type todoListProps = {
    lists: data[];
    onDelete: (id: number) => void
}

const TodoList = ({lists, onDelete}: todoListProps ) =>{

    return (
        <ul>
            {
                lists.map((obj)=>{
                    return <TodoItem key={obj.id} lists = {obj} onDelete = {onDelete}/>
                })
            }

        </ul>
    )
}

export default TodoList