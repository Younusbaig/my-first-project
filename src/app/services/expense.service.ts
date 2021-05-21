import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expense} from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  
  private getUrl: string = "http://localhost:8085/api/v1/";




  constructor(private _httpClient: HttpClient) { }

  getExpense(): Observable<Expense[]> {
    return this._httpClient.get<Expense[]>(this.getUrl+"expenses")
    
    
  }
  startProcess(): Observable<Expense[]> {
    return this._httpClient.get<Expense[]>(this.getUrl+"startprocess")
    
  }
  moveProcess(): Observable<Expense[]> {
    return this._httpClient.get<Expense[]>(this.getUrl+"moveprocess")
    
  }


  saveExpense(expense: Expense): Observable<Expense> {
    return this._httpClient.post<Expense>(this.getUrl, expense)
  }

  getExpenseId(id: number): Observable<Expense>{
    return this._httpClient.get<Expense>(`${this.getUrl}/${id}`).pipe(
      map(response => response)
    )
  }
 // claim(userId: number, userTask: string): Observable<Expense>{
   // return this._httpClient.get<Expense>()
  }



