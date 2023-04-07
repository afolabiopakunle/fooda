import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
  ]
})
export class MaterialsModule { }
