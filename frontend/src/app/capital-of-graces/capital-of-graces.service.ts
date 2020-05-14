import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { CapitalOfGraces } from './capital-of-graces.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapitalOfGracesService {

  baseUrl = "http://localhost:3001/capital_of_graces";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg,'x', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition:'bottom',
    })
  }

  create(capital: CapitalOfGraces): Observable<CapitalOfGraces> {
    return this.http.post<CapitalOfGraces>(this.baseUrl, capital);
  }

  read(): Observable<CapitalOfGraces[]> {
    return this.http.get<CapitalOfGraces[]>(this.baseUrl);
  }
}
