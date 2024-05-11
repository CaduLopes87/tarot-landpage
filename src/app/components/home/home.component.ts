import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CommonQuestionsComponent } from './common-questions/common-questions.component';

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
