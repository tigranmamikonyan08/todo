import { useRef, useState } from "react"

const Todo = ()=>{
    const [li,setLi] = useState([])
    const inputRef = useRef(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
        inputRef.current.value = ''
    }

    const createLi = () =>{
        if (inputRef.current.value.trim()) {
            setLi([
            ...li,
            {
                id: Math.random(),
                name: inputRef.current.value,
                checked: false
            }
        ])
        }
        
    }

    const removeLi = (id) =>{
        setLi(
            li.filter((obj)=>{
                return obj.id !== id
            })
        )
    }

    const checkItem = (id) =>{
        setLi(
            li.map((obj)=>{
                return {
                    ...obj,
                    checked: id === obj.id ? !obj.checked : obj.checked
                }
            })
        )
        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" />
                <button onClick={()=>createLi()}>Add</button>
            </form>

            {
                li.map((obj)=>{
                    return (
                        <h2 key={obj.id}>
                            <span
                                style={{
                                    textDecoration: `${obj.checked ? 'line-through' : 'none'}`
                                }}>
                                {obj.name}
                            </span>
                            <input checked = {obj.checked} onChange={()=>checkItem(obj.id)} type="checkbox" />
                            <span
                                onClick={()=>removeLi(obj.id)}
                                style={{color:'red',
                                    cursor:'pointer',
                                    fontFamily:'monospace',
                                    marginLeft: '10px'

                                }}>X</span>
                        </h2>
                    )
                })
            }
        </>  
    )
}

export default Todo