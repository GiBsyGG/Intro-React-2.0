import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="flex w-full justify-between items-center px-4 h-16 bg-slate-100 shadow-md">
      <CompleteIcon onComplete={onComplete} completed={completed} />
      <p className={`text-left w-64 ${completed && "line-through"}`}>{text}</p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}

export { TodoItem };
