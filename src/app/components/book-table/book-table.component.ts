import { Component, effect, inject, signal } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../type/book';
import { catchError, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-table',
  imports: [CommonModule],
  templateUrl: './book-table.component.html',
  styleUrl: './book-table.component.scss',
})
export class BookTableComponent {
  //Before Mock Server
  // error = signal<string>('');
  // loading = signal<boolean>(false);
  // bookList = signal<Book[]>([
  //   {
  //     id: 1,
  //     name: 'Harry Potter 1',
  //     author: 'J. K. Rowling',
  //     description: 'Few kids try to use magic to save the world',
  //     category: 'Romance',
  //   },
  //   {
  //     id: 2,
  //     name: 'Harry Potter 2',
  //     author: 'J. K. Rowling',
  //     description: 'Few kids try to use magic to save the world again',
  //     category: 'Fantasy',
  //   },
  // ]);

  //After Mock Server
  bookService = inject(BookService);
  bookList = signal<Book[]>([]);
  error = signal<string>('');
  loading = signal<boolean>(false);

  constructor() {
    effect(() => {
      this.error.set('');
      this.loading.set(true);

      this.bookService
        .getBookList()
        .pipe(
          tap((books: any) => {
            this.bookList.set(books.data);
            this.loading.set(false);
          }),
          catchError((error) => {
            this.error.set(error.error.error);
            this.loading.set(false);
            return of([]);
          })
        )
        .subscribe();
    });
  }
}
