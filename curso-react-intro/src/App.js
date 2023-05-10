import "./App.css";
import { AppUI } from "./components/AppUI";
import { TodoProvider } from "./context/TodoContext";

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
