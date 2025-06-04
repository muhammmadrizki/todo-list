import { useState } from "react";
import type { Task } from "./modules/task/type";
import { TaskCard } from "./components/task-card";
import { Button } from "./components/button";

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Breakfast",
    completed: true,
    date: new Date("2025-05-20 8:00"),
  },
  {
    id: 2,
    title: "Go to work room",
    completed: false,
    date: new Date("2025-05-20 9:00"),
  },
  {
    id: 3,
    title: "Coding",
    completed: false,
    date: new Date("2025-05-20 10:00"),
  },
  {
    id: 4,
    title: "Lunch",
    completed: false,
    date: new Date("2025-05-20 12:00"),
  },
  {
    id: 5,
    title: "Meeting",
    completed: false,
    date: new Date("2025-05-20 13:00"),
  },
  {
    id: 6,
    title: "Working on projects",
    completed: false,
    date: new Date("2025-05-20 15:00"),
  },
  {
    id: 7,
    title: "Watch anime",
    completed: false,
    date: new Date("2025-05-20 17:00"),
  },
  {
    id: 8,
    title: "Dinner",
    completed: false,
    date: new Date("2025-05-20 19:00"),
  },
  {
    id: 9,
    title: "Sleep",
    completed: false,
    date: new Date("2025-05-20 22:00"),
  },
];

export function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const title = String(formData.get("title"));

    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      title: title,
      completed: false,
      date: new Date(),
    };

    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);

    event.currentTarget.reset();
  }

  function removeTask(id: number) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <div className="p-4 flex justify-center">
      <section className="w-full max-w-lg">
        {" "}
        <h1 className="p-8 text-3xl">Todo List</h1>
        <form onSubmit={addTask} method="post">
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Task title"
            className="p-2 border"
          />
          <Button type="submit">Add Task</Button>
        </form>
        <ul className="space-y-2">
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <TaskCard task={task} removeTask={removeTask} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
