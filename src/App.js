import './App.css';
import Search from './components/Input';
import Task from './components/Task';
import { useState } from "react";

function App() {
  //initialize listTask with some default tasks
  const [listTask, setListTask] = useState([
    {status: '', title: 'Clean up bedroom'}, 
    {status: '', title: 'Buy some milk'}
  ]);

  const [numberTaskDone, setNumberTaskDone] = useState(0);

  const addTask = task => {
    setListTask([...listTask, task]);
  }

  const setDone = index => {
    if (listTask[index].status === ''){
      listTask[index].status = 'done';
      setNumberTaskDone(numberTaskDone + 1);
    }else{
      listTask[index].status = '';
      setNumberTaskDone(numberTaskDone - 1);
    }
    setListTask([...listTask]);
  }

  return (
    <div className="App">
      <Search onAdding={addTask}/>
      {listTask.map((value, index) => <Task key={index} index={index} status={value.status} title={value.title} onDone={setDone}/>)}
      <div className="task_left">{listTask.length - numberTaskDone} task left!</div>
    </div>
  );
}

export default App;
