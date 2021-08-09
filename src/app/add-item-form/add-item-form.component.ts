import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', 0);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
    // if (this.item){
    //   // this means that an existing item object was passed into this component
    //   // therefore this is not a new item
    //   this.isNewItem = false;
    // } else {
    //   this.isNewItem = true;
    // }
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.formSubmit.emit(form.value);
    form.reset(); //reset the form
  }

}
