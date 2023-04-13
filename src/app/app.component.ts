import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loader = true;
  show = true;
  title = 'fooda';

  ngOnInit() {
    setTimeout(() => this.loader = false, 3000)
  }

  showRecipe(value: boolean) {
    this.show = value;
  }
}
