import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CatalogComponent } from "../catalog/catalog.component";
import { PresentationComponent } from '../presentation/presentation.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, CatalogComponent, PresentationComponent]
})
export class HomeComponent {

}
