import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';
// import { MatDialog } from '@angular/material/dialog';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = [];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor(
    // public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onDeleteClick(item: BudgetItem){
    this.delete.emit(item);
  }

  // onCardClicked(item: BudgetItem){
  //   // show the edit modals
  //   const dialogRef = this.dialog.open(EditItemModelComponent, {
  //     width: '580px',
  //     data: item
  //   });

  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     if (result){
  //       // result is the update budget
  //       // replace the item with the updated/submitted item from the form
  //       this.budgetItems[this.budgetItems.indexOf(item)] = result;

  //     }
  //   })
  // }

}
