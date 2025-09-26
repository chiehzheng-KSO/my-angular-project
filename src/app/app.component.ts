import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { RouterOutlet } from '@angular/router';
import { BookTableComponent } from './components/book-table/book-table.component';

@UntilDestroy()
@Component({
  selector: 'app-root',
  imports: [BookTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
