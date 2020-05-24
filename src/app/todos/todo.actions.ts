import {createAction, props} from "@ngrx/store";


export  const addTodo = createAction(
  '[Todo Component] Adding todo',
  props<{text: string}>()
);

export  const toggle = createAction(
  '[Todo Component] Toggle Todo',
  props<{id: number}>()
);
export  const edit = createAction(
  '[Todo Component] edit Todo',
  props<{id: number, text:string}>()
);
export  const deleteTodo = createAction(
  '[Todo Component] delete Todo',
  props<{id: number}>()
);

export  const toggleAll = createAction(
  '[Todo Component] toggleAll todo',
  props<{completed:boolean}>()
);

export  const clearAllTodo = createAction('[Todo Component] clear all');
