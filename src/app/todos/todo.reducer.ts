import {createReducer, on} from "@ngrx/store";
import {addTodo, clearAllTodo, deleteTodo, edit, toggle, toggleAll} from "./todo.actions";
import {Todo} from "./models/todo.model";


export const initialState:Todo[] = [
  new Todo('Save the world'),
];

const _todoReducer = createReducer(initialState,

  on(addTodo, (state, {text}) => [...state, new Todo(text)]),
  on(toggleAll, (state,{completed})=>state.map(todo=>{
    return {
      ...todo,
      isComplete: completed
    }
  })),
  on(toggle, (state, {id}) =>{
      return state.map(todo=>{
       if(todo.id === id){
         return {
           ...todo,
           isComplete: !todo.isComplete
         }
       }else {
         return todo;
       }

      });
  }),
  on(edit, (state, {id,text}) =>{
    return state.map(todo=>{
      if(todo.id === id){
        return {
          ...todo,
              text
        }
      }else {
        return todo;
      }

    });
  }),
  on(deleteTodo , (state,{id})=>state.filter(todo => todo.id !== id )),
  on(clearAllTodo , state=>state.filter(todo => !todo.isComplete ))



  );

 export  function todoReducer(state, action) {

   return _todoReducer(state, action);

 }
