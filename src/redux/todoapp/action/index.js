export const ADD_TODO = "ADD TODO";


export const addTodo = (payload)=>{
    return{
type: ADD_TODO,
payload
    }
}