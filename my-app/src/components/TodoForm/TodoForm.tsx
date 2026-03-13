import './TodoForm.css'

type TodoFormProps = {
  onAdd: (txt: string) => void;
}

const TodoForm = ({onAdd} :TodoFormProps ) =>{
    
    const hundleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const input = e.currentTarget.elements[0] as HTMLInputElement

        if (input.value.trim()) {
            onAdd(input.value)
        }
        input.value = ''
    }

    return (
            <form onSubmit={hundleSubmit}>
                <input type="text" />
                <button className='addBtn'>Add</button>
            </form>
    )
}

export default TodoForm