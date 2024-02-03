
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";
import { useState } from "react";

function App() {
  const [taskTodo, setTaskTodo] = useState<number>(0);

  const handleTaskTodo = (qtd: number) => {
    setTaskTodo(qtd);
  }

  return (
    <div className="container">
      <Header 
        todo={taskTodo}
      />

      <TodoList 
        handleTaskTodo={handleTaskTodo}
      />
    </div>
  );
}

export default App;
