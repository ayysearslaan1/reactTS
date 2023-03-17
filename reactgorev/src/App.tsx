
import { useState } from "react";
import Input from "./components/Input";
import { Todos } from "./Types/type";

const App:React.FC=()=> {
  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<Todos[]>([])


const addMessage=() =>{

  if(todo) setTodos([...todos,{message: todo,id: todos.length+1}])
}
console.log(todos,"todos");

  return (
    <div className="App">
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
