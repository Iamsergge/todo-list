import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import CreateTaskPopup from './modals/createTask';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <TodoList/>
    <CreateTaskPopup/>
    </div>
  );
}

export default App;
