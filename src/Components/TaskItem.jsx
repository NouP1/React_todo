import React from 'react'
import { useState } from "react";
import classes from './task.module.css'

const TaskItem = ({setActive, task, setTask}) => {
    
    const [check, setCheck] = useState(false);

    
    
   
    return (
        <div className = {classes.tasks}>
            <div className={classes.conteiner}  onClick = {() => setActive(true)}>
                <strong className={check? classes.active : classes.description} >{task.title}</strong>
                <div className={check? classes.active : classes.description}>{task.body}</div>
            </div>
            <label>
                <input className={classes.checkinput} 
                onClick = {() => {
                    if (check) {
                        setCheck(false)
                        task.status = false
                        console.log(task)
                        
                    } else {
                        setCheck(true)
                        task.status = true
                        console.log(task)
                        
                    }   
                }}
                type = "checkbox"/>

                <span className={classes.checkbox} >
                </span>
            </label>
        </div>
    )
  }

export default TaskItem;