import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isAuthenticated$ = this.authService.user;

  constructor(private dataStoreService: DataStorageService,
              private authService: AuthService,
              ) {
  }

  storeRecipe() {
    this.dataStoreService.storeRecipe();
  }

  fetchRecipes() {
    this.dataStoreService.getRecipes();
  }

}
