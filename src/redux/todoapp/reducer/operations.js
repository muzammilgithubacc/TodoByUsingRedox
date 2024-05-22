import { ADD_TODO } from "../action";

const initialState=[
    { id : 1 , todoText: "Hooks" , completed: true},
    { id : 2 , todoText: "Context Api" , completed: false},
    { id : 3 , todoText: "Redux" , completed: false},     
]

export const operationsReducer = (state=initialState,action)=>{
if(action.type == ADD_TODO){
    return [...state, action.payload];
}else{
    return state;
}


}