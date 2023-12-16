import { Routes } from '@angular/router';
import { BooksListComponent } from './books-list/books-list.component';
import { MembersListComponent } from './members-list/members-list.component';
import { LoansListComponent } from './loans-list/loans-list.component';

export const routes: Routes = [
    { path: 'books-list-app', component: BooksListComponent },
    { path: 'members-list-app', component: MembersListComponent },
    { path: 'loans-list-app', component: LoansListComponent },
  ];