import { Component, Input, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', 0);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitted(updatedItem: BudgetItem){

  }

}
