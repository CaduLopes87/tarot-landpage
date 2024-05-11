import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CommonQuestionsComponent } from './components/common-questions/common-questions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    HeaderComponent,
    CatalogComponent,
    PresentationComponent,
    CommonQuestionsComponent,
  ],
})
export class HomeComponent {}
