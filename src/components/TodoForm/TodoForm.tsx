import './TodoForm.css'

type TodoFormProps = {
    txt: string,
    setTxt: React.Dispatch<React.SetStateAction<string>>
    addTodo: () => void
}

const TodoForm = ({txt, setTxt, addTodo}: TodoFormProps) =>{

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        txt.trim() &&
        addTodo()
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