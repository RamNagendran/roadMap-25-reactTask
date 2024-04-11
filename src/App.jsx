import { useEffect, useState } from "react";
import TodoForm from "./FormWithHeader";
import TodoCards from "./cards";


function App() {
  const [allTodos, setAllTodos] = useState([]);

  return (
    <div style={{ width: "100%", height: "100vh" }} >
      <TodoForm allTodos={allTodos} setAllTodos={setAllTodos} />
      <TodoCards allTodos={allTodos} setAllTodos={setAllTodos} />
    </div>
  )
}

export default App
