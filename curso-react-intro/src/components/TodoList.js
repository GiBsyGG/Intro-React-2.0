function TodoList(props) {
  return (
    <ul className="flex flex-col w-96 items-center gap-y-3">
      {props.children}
    </ul>
  )
}

export  { TodoList }