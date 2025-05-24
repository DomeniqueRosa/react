import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "plfapapjfjap",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Estudar react",
      description: "muito legal",
      isCompleted: true,
    },
    {
      id: 3,
      title: "mandar beijos para namorado",
      description: "",
      isCompleted: false,
    },
  ]);

  const my = (id : any) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  function onRemove(id : any) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function onAdd(title : any, description : any) {
    const newT = {
      id: Date.now(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newT]);
  }
  //sera executada uma vez na aplicacao na iniciação da aplicacao
  useEffect(() => {
    // Defina uma função assíncrona dentro do useEffect
    const fetchData = async () => {
      const response = await fetch( 
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method : "GET",
        }
      );
      const data = await response.json();
      console.log(data);
      setTasks(data);
    };

    fetchData();
  }, []);
  // ...existing code...

  return (
    <div className="bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <Title titulo="Gerenciador de tarefas" />
        <AddTask add={onAdd} />
        {tasks.map((task) => (
          <Tasks
            key={task.id}
            task={task}
            my={() => my(task.id)}
            remove={() => onRemove(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
