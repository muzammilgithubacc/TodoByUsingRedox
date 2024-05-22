import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoapp/action';
export  function Form(props) {
    const [todoValue , setTodoValue] = useState('')

    const dispatch = useDispatch()

    

    const formHandler = (e)=>{
        e.preventDefault();
let date =new Date();
let time = date.getTime();
// console.log(time);
        let todoObj={
            id: time,
            todoText : todoValue,
            completed : false
        }

        setTodoValue('')
        dispatch(addTodo(todoObj))
    }
    return (
        <>
            <div>
                <input placeholder='enter your work' className='w-72 p-2 border-blue-600 border-2   rounded '
                 type="text"
                 value={todoValue}
                 onChange={(e)=>{
                    setTodoValue(e.target.value)
                 }}
                  />
                <button className='rounded border-2 border-blue-600 p-2 bg-blue-400' onClick={formHandler}>Add</button>
                
            </div>
        </>
    )
}
