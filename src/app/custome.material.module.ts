import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
    imports: [
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCheckboxModule
    ],
    exports: [
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCheckboxModule
    ],
})
export class CustomeMaterialModule {}
