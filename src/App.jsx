import React from "react"
import { Form } from "./Components/Form"
import { Todo } from "./Components/Todo"


function App() {
 

  return (
    <>
    <div className="flex flex-col items-center mt-5" >
    <h1 className=' mb-5 text-center text-2xl  text-black font-bold bg-slate-400'>Enter Your Work in Todo</h1>
    <Form/>
    <Todo/>
    </div>
    
    </>
  )
}

export default App
