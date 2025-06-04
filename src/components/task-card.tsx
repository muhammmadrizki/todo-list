import type { Task } from "../modules/task/type";
import { ButtonSmall } from "./button";

export function TaskCard({
  task,
  removeTask,
}: {
  task: Task;
  removeTask: (id: number) => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p className="font-bold">
        {task.completed ? (
          <span className="text-green-600">🟢 Completed</span>
        ) : (
          <span className="text-yellow-600">🟡 Incomplete</span>
        )}
      </p>
      <p>
        <span className="font-bold">Date Time: </span>
        <span>{task.date.toLocaleString()}</span>
      </p>

      <ButtonSmall onClick={() => removeTask(task.id)}>Delete</ButtonSmall>
    </div>
  );
}
