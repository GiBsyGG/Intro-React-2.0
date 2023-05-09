import { ReactComponent as CheckSVG } from "../icons/check.svg";

function CompleteIcon({ completed, onComplete }) {
  return (
    <span
      className={`w-5 h-5 hover:cursor-pointe hover:cursor-pointer ${
        completed ? "fill-green-600" : "fill-gray-500"
      }`}
      onClick={onComplete}
    >
      <CheckSVG />
    </span>
  );
}

export { CompleteIcon };
