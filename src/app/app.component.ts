import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  show = true;
  title = 'fooda';

  showRecipe(value: boolean) {
    this.show = value;
  }
}
