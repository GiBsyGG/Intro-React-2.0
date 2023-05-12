function TodoCounter({totalTodos, completedTodos}) {

  if (totalTodos === 0) {
    return (
      <h1 className="text-3xl text-center">
        No tienes ToDos pendientes
      </h1>
    );
  } else if (totalTodos === completedTodos) {
    return (
      <h1 className="text-3xl text-center">
        Completaste <span className="font-bold">todos</span> los ToDos
      </h1>
    );
  } else {
    return (
      <h1 className="text-3xl text-center">
        Has completado <span className="font-bold">{completedTodos}</span> de{" "}
        <span className="font-bold">{totalTodos}</span> ToDos
      </h1>
    );
  }
}

export { TodoCounter };
