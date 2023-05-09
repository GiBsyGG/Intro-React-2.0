function TodoCounter({ total, completed }) {
  if (total === 0) {
    return (
      <h1 className="text-3xl text-center">
        No tienes ToDos pendientes
      </h1>
    );
  } else if (total === completed) {
    return (
      <h1 className="text-3xl text-center">
        Completaste <span className="font-bold">todos</span> los ToDos
      </h1>
    );
  } else {
    return (
      <h1 className="text-3xl text-center">
        Has completado <span className="font-bold">{completed}</span> de{" "}
        <span className="font-bold">{total}</span> ToDos
      </h1>
    );
  }
}

export { TodoCounter };
