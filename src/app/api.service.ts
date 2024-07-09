// api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://backend_ip_or_hostname:5000/api'; // Replace with actual backend IP or hostname

  constructor(private http: HttpClient) { }

  // HTTP GET request to fetch items from backend
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/items`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // HTTP POST request to send data to backend
  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/post`, data, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // HTTP PUT request to update data on backend
  updateItem(id: number, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(`${this.apiUrl}/items/${id}`, data, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // HTTP DELETE request to delete item on backend
  deleteItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/items/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Example method to handle errors
  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError(error);
  }

  // Add more methods as needed for your application
}
