import { ButtonSmall } from "./components/button";

const tasks = [
  {
    id: 1,
    title: "Wake Up",
    completed: true,
    date: new Date("2025-05-19 5:00"),
  },
  {
    id: 2,
    title: "Subuh",
    completed: true,
    date: new Date("2025-05-19 5:15"),
  },
  {
    id: 3,
    title: "Breakfast",
    completed: true,
    date: new Date("2025-05-19 6:00"),
  },
  {
    id: 4,
    title: "Olahraga",
    completed: true,
    date: new Date("2025-05-19 7:00"),
  },
  {
    id: 5,
    title: "Bootcamp",
    completed: false,
    date: new Date("2025-05-19 9:00"),
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
  return (
    <div className="p-4 ">
      <h1 className="p-8 text-3xl">Todo List</h1>

      <ul className="space-y-8">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <h2 className="text-xl font-bold">{task.title}</h2>
              <p className="font-bold">
                {task.completed ? (
                  <span className="text-green-500">🟢 Completed</span>
                ) : (
                  <span className="text-yellow-500">🟡 Incomplete</span>
                )}
              </p>
              <p>
                <span className="font-bold">Date Time: </span>
                <span>{task.date.toLocaleString()}</span>
              </p>
              <ButtonSmall>Delete</ButtonSmall>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
