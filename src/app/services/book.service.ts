import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from '../type/book';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';
  constructor() { }

  getBookList(): Observable<{data:Book[]}>{
    const params = new HttpParams().set('error', 'true');
    return this.http.get<{data:Book[]}>(`${this.baseUrl}/api/books/list`, { params });
  }
}
