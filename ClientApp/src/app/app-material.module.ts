import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatTableModule
  ]
})
export class AppMaterialModule { }
