import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";

import {AppState} from "../../app.reducer";
import {setFilter, validFilters} from "../../filter/filter.actions";
import {filter} from "rxjs/operators";
import {clearAllTodo} from "../todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: validFilters = 'todos';
  filters: validFilters[] = ['todos','completed','pending'];
  pending: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // this.store.select('filter')
    //   .subscribe( filter => this.currentFilter = filter)

    this.store.subscribe(state =>{
       this.currentFilter = state.filter;
       this.pending = state.todos.filter(todo =>!todo.isComplete ).length;


      })
  }
  changeFilter(filter:validFilters){
    this.store.dispatch(setFilter({filter}))
  }
  clearCompleted(){
    this.store.dispatch(clearAllTodo());
  }

}
