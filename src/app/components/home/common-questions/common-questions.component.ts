import { Component } from '@angular/core';
import { ToggleButtonInterface } from '../../../interfaces/toggle-button-content';

@Component({
  selector: 'app-common-questions',
  standalone: true,
  imports: [],
  templateUrl: './common-questions.component.html',
  styleUrl: './common-questions.component.scss',
})
export class CommonQuestionsComponent {
  isVisible: ToggleButtonInterface = {};

  toggleContent(id: number) {
    if (this.isVisible[id] === undefined) {
      this.isVisible[id] = false;
      this.isVisible[id] = !this.isVisible[id];
    } else {
      this.isVisible[id] = !this.isVisible[id];
    }
  }
}
