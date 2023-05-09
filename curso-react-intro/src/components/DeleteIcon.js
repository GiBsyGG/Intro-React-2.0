import { ReactComponent as DeleteSVG } from "../icons/delete.svg";

function DeleteIcon({ onDelete }) {
  return (
    <span
      className="w-5 h-5 hover:cursor-pointer fill-gray-500 hover:fill-red-600 relative -top-8"
      onClick={onDelete}
    >
      <DeleteSVG />
    </span>
  );
}

export { DeleteIcon };
