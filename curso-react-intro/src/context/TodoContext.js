import { createContext } from "react";
import { useState } from "react";
import { useLocalStorage } from "../custom_hooks/useLocalStorage";

const TodoContext = createContext();

// Esto se hace para mejorar el nombre y para encapsular la lógica compartida entre los componentes
function TodoProvider({ children }) {

    // Estado para el valor de la búsqueda
    const [searchValue, setSearchValue] = useState("");

    // Estado para los ToDos, usando el custom hook que hicimos para usar el localStorage
    const {
      item: todos,
      saveItem: saveTodos,
      loading,
      error,
    } = useLocalStorage("TODOS_V1", []);

    // Estado para abrir el modal
    const [openModal, setOpenModal] = useState(false);
  
    // Estados derivados, para los ToDos completados y totales
    const completedTodos = todos.filter((todo) => todo.completed).length;
    const totalTodos = todos.length;
  
    // Estado derivado para filtrar los ToDos (no importa mayus o minus)
    // Tecuerda que al no usar {} en la función de flecha, se retorna el valor, Si usara {} para definir la función tendría que usar return
    const searchedTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
  
    // Función para marcar un ToDo como completado
    const toggleCompleteTodo = (text) => {
      // Creo una copia del array de ToDos, usando el operador spread
      const newTodos = [...todos];
      // Busco el ToDo que quiero marcar como completado
      const todo = newTodos.find((todo) => todo.text === text);
      // Cambio el valor de la propiedad completed
      todo.completed = !todo.completed;
  
      // Actualizo los ToDos con persistencia
      saveTodos(newTodos);
    };
  
    // Función para eliminar un ToDo
    const deleteTodo = (text) => {
      // Creo una copia del array de ToDos, usando el operador spread
      const newTodos = [...todos];
      // Busco el ToDo que quiero eliminar
      const todoIndex = newTodos.findIndex((todo) => todo.text === text);
      // Elimino el ToDo del array usando splice que recibe el índice y la cantidad de elementos a eliminar
      newTodos.splice(todoIndex, 1);
  
      // Actualizo los ToDos con persistencia
      saveTodos(newTodos);
    };

    // Funcion para añadir ToDos
    const addTodo = (text) => {
      // Creo una copia del array de ToDos, usando el operador spread
      const newTodos = [...todos];
      // Añado el ToDo al array
      newTodos.push({
        // Al tener el mismo nombre no es necesario text: text
        text,
        completed: false,
      });

      // Actualizo los ToDos con persistencia
      saveTodos(newTodos);
    };
  
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      toggleCompleteTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
    }}>
      { children }
    </TodoContext.Provider>
  )
}

export { TodoProvider, TodoContext };