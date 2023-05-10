import { useContext } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { EmptyTodos } from "./EmptyTodos";
import { TodosLoading } from "./TodosLoading";
import { TodosError } from "./TodosError";
import { TodoContext } from "../context/TodoContext";
import { Modal } from "./Modal";


function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    totalTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
  } = useContext(TodoContext)

  return (
    <div className="flex flex-col p-5 gap-y-10 items-center  h-full">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && totalTodos === 0 && <EmptyTodos />}
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      {openModal && (
        <Modal>
          {/* Funcionalidad de agregar ToDos */}
        </Modal>
      )}
    </div>
  );
}

export { AppUI };
