import React from 'react'

type Iprops ={
    todo:string
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addMessage:() => void
}

const Input:React.FC<Iprops>=({todo,setTodo,addMessage}) => {
    return(
        <div>
            <input value={todo} onChange={e=>setTodo(e.target.value)} type="text" placeholder='Ad' />
            <input  value={todo} onChange={e=>setTodo(e.target.value)} type="text" placeholder='soyad' />
            <input value={todo} onChange={e=>setTodo(e.target.value)} type="text" placeholder='numara' />
            <button onClick={addMessage}>ekle</button>
        </div>
    )
}
  
   
export default Input

