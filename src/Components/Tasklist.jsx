import {useState} from "react"
import Seacrh from "./UI/Seacrh";
import TaskItem from './TaskItem';
import AddTask from "./UI/AddTask";
import Model from "./ModalWindow/Model";
import "../styles/style.css";

function Tasklist () {


const [task, setTask] = useState([])

  const createTask = (newTask) => {
      setTask([...task, newTask])
  }
  const [modelActive, setModelActive] = useState(false)  //modal window
  const [navActive, setNavActive] = useState(false)  //modal navbar
  const [modalTaskActive, setModalTaskActive] = useState(false)
 
  const removeTask = (tasks) => {
    setTask(task.filter(p => p.id !== tasks.id))
  }

  //console.log(task)

  const handleClick = () => {
    
   if (navActive===true) {
        setNavActive(false)
        console.log(1)

    } else {
        console.log(2)
        return setNavActive(true)

    } 


  }



  return (
    <div className='app'>

      <Seacrh setActive = {setModelActive}></Seacrh>

      {task.map(task => <TaskItem setActive = {setModalTaskActive} remove = {removeTask} task = {task} setTasks = {setTask} key = {task.id}/>)}
      
      <Model active = {modelActive} setActive = {setModelActive} >
        <AddTask createTasks = {createTask}/>
      </Model>
    </div>
  );
}


export default Tasklist;