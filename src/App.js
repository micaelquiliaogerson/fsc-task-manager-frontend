import { useState } from "react";
import TaskItem from "./components/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "01",
      name: "First Task",
      active: true,
    },
    {
      id: "02",
      name: "Second Task",
      active: true,
    },
  ]);
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default App;
