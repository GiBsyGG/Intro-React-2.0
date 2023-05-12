import { useState } from "react";

function TodoForm({ setOpenModal, addTodo }) {

  // Estado para el valor del nuevo ToDo del formulario
  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <div className="w-3/4 h-2/4 bg-slate-50 rounded-3xl shadow-md flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-y-4"
      >
        <h3 className="text-xl font-bold text-center">Nuevo ToDo</h3>
        <textarea
          type="text"
          placeholder="Escribe tu nuevo ToDo"
          value={newTodoValue}
          onChange={onChange}
          cols={30}
          rows={4}
          className="p-3 border border-slate-300 focus:outline-none focus:border-violet-700 focus:ring-violet-700"
        />
        <div className="flex flex-row gap-x-3 font-bold">
          <div
            onClick={() => setOpenModal(false)}
            className="w-32 h-10 bg-gray-300 rounded-xl hover:bg-slate-200 flex justify-center items-center"
          >
            Cancelar
          </div>
          <button
            type="submit"
            className="w-32 h-10 bg-violet-700 rounded-xl text-white hover:bg-violet-400"
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  );
}

export { TodoForm };
