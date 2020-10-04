import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: []
})
export class AngularMaterialsModule { }
