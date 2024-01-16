import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LayoutComponent } from '../layout/layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class SharedModule { }
