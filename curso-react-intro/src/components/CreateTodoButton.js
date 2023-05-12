function CreateTodoButton({ setOpenModal, openModal }) {

  return (
    <button
      className={`fixed bottom-5 right-5 w-16 h-16 rounded-full bg-purple-500 shadow-md shadow-purple-500/50 text-6xl font-extrabold text-white z-10 ${openModal && "rotate-45"}`}
      // Esto solo es para mostrar que en los sets podemos recibir el estado y usarlo para cambiarlo
      onClick={() => setOpenModal(state => !state)}
    >
      {" "}
      <span className="relative -top-2"> + </span>{" "}
    </button>
  );
}

export { CreateTodoButton };
