import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from "../models/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import * as actions from "../todo.actions";
import {AppState} from "../../app.reducer";


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @ViewChild('inputEl') textInputEl: ElementRef;
  checkCompleted: FormControl;
  textInput: FormControl;
  editing: boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.isComplete);
    this.textInput = new FormControl(this.todo.text, Validators.required);
    this.checkCompleted.valueChanges.subscribe(value =>{
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    })
  }
  toEdit(){
    this.editing = true;
    this.textInput.setValue(this.todo.text)
    setTimeout(()=>{
      this.textInputEl.nativeElement.select();
    },1)
  }

  endEdition(){
    this.editing = false;
    if(this.textInput.invalid){return;}
    if(this.textInput.value === this.todo.text){return;}

    this.store.dispatch(
      actions.edit({
        id:this.todo.id,
        text: this.textInput.value
      })
    )
  }
  deleteTodo(){
    this.store.dispatch(actions.deleteTodo({id:this.todo.id}))
  }

}
