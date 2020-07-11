import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const Material = [
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule
];

@NgModule({
  imports: [
    Material
  ],
  exports: [
    Material
  ]
})
export class MaterialComponentsModule { }
