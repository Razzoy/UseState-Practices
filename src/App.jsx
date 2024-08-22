import style from './App.module.scss'
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Splitter } from "./components/Splitter/Splitter";
import { ToDo } from './components/ToDo/ToDo';
import { ToDoHeader } from './components/ToDo/ToDoHeader/ToDoHeader';
import { ToDoTask } from './components/ToDo/ToDoTask/ToDoTask';

let taskArray = [];


function App() {
  return (
    <>
      <Splitter title={"3.1.1"}></Splitter>
      <Button></Button>
      <Splitter title={"3.1.2"}></Splitter>
      <Input></Input>
      <Splitter title={"3.1.3"}></Splitter>
      <ToDo>
        <ToDoHeader></ToDoHeader>
        <ToDoTask></ToDoTask>
      </ToDo>
    </>
  );
}

export default App;
