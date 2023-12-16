import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './../book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  standalone: true,
})
export class BookComponent {
  id: number;
  title: string;
  author: string;
  isbn: string;

  constructor(private bookService: BookService, private route: ActivatedRoute) {
  }

}
