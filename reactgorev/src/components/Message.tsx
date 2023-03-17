import React from 'react'

type props={
    todos: Todos[]
}
const Message:React.FC<props> =({todos}) => {
    return(
        <div>
            {
               todos.map((todo,i)=> (
                <div key={i}>{todo.message}  -  <span style={{cursor:"pointer"}}>x</span><div/>
               )

               )
            }
        </div>
    )

}



export default Message
