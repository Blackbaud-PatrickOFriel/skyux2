import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkyModalModule } from '../modal.module';
import { ModalTest2Component } from './modal.component2.fixture';

@NgModule({
  declarations: [
    ModalTest2Component
  ],
  imports: [
    CommonModule,
    SkyModalModule
  ],
  entryComponents: [
    ModalTest2Component
  ]
})
export class SkyModalFixtures2Module { }
