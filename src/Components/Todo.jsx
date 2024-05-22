import React from 'react'
import { useSelector } from 'react-redux'

export  function Todo(props) {
    const todos = useSelector((state)=> state.operationsReducer)

    console.log(todos);

    return todos.map((todo)=>(
        <div key={todo.id} className='flex justify-between w-72 bg-blue-300'>
                <div>{todo.id}</div>    
                <div>{todo.todoText}</div>
                <div className='flex flex-col'>
                <button>edit</button>
                <button>delete</button>
                </div>
               
            </div>
    )
        
            
        
    )
}
