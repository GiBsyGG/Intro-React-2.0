import "./App.css";
import { useTodos } from "./custom_hooks/useTodos";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { EmptyTodos } from "./components/EmptyTodos";
import { EmptySearch } from "./components/EmptySearch";
import { TodosLoading } from "./components/TodosLoading";
import { TodosError } from "./components/TodosError";
import { StorageChangeAlert } from "./components/StorageChangeAlert";
import { Modal } from "./components/Modal";

function App() {
  const {
    loading,
    error,
    searchedTodos,
    totalTodos,
    completedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    searchValue,
    setSearchValue,
    setOpenModal,
    addTodo,
    sincronizeTodos
  } = useTodos();

  return (
    <div className="flex flex-col p-5 gap-y-10 items-center  h-full">
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
      <TodoSearch searchValue={searchValue} 
      setSearchValue={setSearchValue}
      loading={loading} />

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        // Luego de pasar los props normales los siguientes son Puros Render Props
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearch={(searchText) => <EmptySearch searchText={searchText} />}
        // render={ (todo) => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => toggleCompleteTodo (todo.text)}
        //     onDelete={() => deleteTodo (todo.text)}
        //   />
        // )}
      >
        
        {/* Y esto es el equivalente en render function de la render prop render de arriba.
        en TodoList ya no llamariamos a render sino a children */}
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}

      </TodoList>

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />

      <StorageChangeAlert sincronize={sincronizeTodos}/>

      {openModal && (
        <Modal>
          <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
        </Modal>
      )}
    </div>
  );
}

export default App;
