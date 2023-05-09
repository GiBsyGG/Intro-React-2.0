function CreateTodoButton() {
  return (
    <button
      className="fixed bottom-5 right-5 w-16 h-16 rounded-full bg-purple-500 shadow-md shadow-purple-500/50 text-6xl font-extrabold text-white hover:animate-spin-fast-finite"
      onClick={() => console.log("Diste click")}
    >
      {" "}
      <span className="relative -top-2"> + </span>{" "}
    </button>
  );
}

export { CreateTodoButton };
