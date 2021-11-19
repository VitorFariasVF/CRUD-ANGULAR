import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppNaterialModule } from './app-naterial/app-naterial.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    AppNaterialModule,
    CommonModule

  ],
  exports: [ErrorDialogComponent]
})
export class SharedModule { }
