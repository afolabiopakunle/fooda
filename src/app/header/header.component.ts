import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  show!: boolean;
  @Output() showRecipe = new EventEmitter<boolean>();

  switchPage(show: boolean) {
  this.show = show;
  this.showRecipe.emit(this.show)
}

}
