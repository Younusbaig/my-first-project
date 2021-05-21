import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

  expenses: Expense[] = [];

  constructor(private _expenseService: ExpenseService) { }

  ngOnInit(): void {
    this._expenseService.getExpense().subscribe((data:any)=>
      {
        
        this.expenses = data;
        this.startProcess();
      }
     
    )
  }

  startProcess() {
    this._expenseService.startProcess().subscribe(()=>{
      alert('process started')
      this.moveProcess();
    }

    )
  }
  moveProcess(){
    this._expenseService.moveProcess().subscribe(()=>{
      alert('process move')
    })
  }
  onsubmit() {
    this._expenseService.getExpense().subscribe(
      data => this.expenses = data
    )
  }

}
