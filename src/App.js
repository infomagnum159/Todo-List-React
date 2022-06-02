import React, {useState} from 'react';
import './App.css';
import { nanoid } from 'nanoid';


const App = () => {
    const [tasks, setTask] = useState([
        {text: 'Do homework', id: '1'},
        {text: 'Cook eat', id: '2'},
        {text: 'Go to bed', id: '3'},
    ]);

    const [newTask, setNewTask] = useState([
        {text: '', id: ''}
    ]);

    const changeTask = (event) => {
        const newTaskCopy = [...newTask];
        const newText = {...newTaskCopy[0]};
        newText.text = event.target.value;
        newText.id = nanoid();
        newTaskCopy[0] = newText;
        setNewTask(newTaskCopy);
    };



    const addTask = () => {
        const tasksList = [...tasks];
        const newTaskCopy = {...newTask};
        const currentTask = {...newTaskCopy[0]};
        tasksList.push(currentTask);
        setTask(tasksList);
    }

    return (
        <div className="App">
                         onTextChange = {event => changeTask(event)}
                         addTask = {() => addTask()} >

        </div>
    );
};



export default App;
