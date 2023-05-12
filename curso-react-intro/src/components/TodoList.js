function TodoList(props) {
  return (
    <section className="flex flex-col w-96 items-center gap-y-3">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {props.totalTodos === 0 && !props.loading && props.onEmptyTodos()}

      {!props.loading &&
        props.searchedTodos.length === 0 &&
        props.totalTodos > 0 &&
        props.onEmptySearch(props.searchText)}

      {!props.loading &&
        props.searchedTodos.map((todo) => props.children(todo))}
    </section>
  );
}

export { TodoList };
