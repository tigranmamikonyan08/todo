import type { data } from '../../App'

type todoItemProps = {
    lists: data
    onDelete: (id: number) => void
}

const TodoItem = ({lists, onDelete}: todoItemProps) =>{

    console.log(lists.id);
    

    return (
        <li>
            <span>{lists.txt}</span>
            <input type='checkbox' />
            <span  onClick={()=>onDelete(lists.id)}
                style={
                    {
                        color: 'red',
                        marginLeft: '10px',
                        cursor: 'pointer'
                    }
                }>X</span>
        </li>
    )
}

export default TodoItem