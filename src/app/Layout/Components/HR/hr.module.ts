import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { HrRoutingModule } from './hr-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HrRoutingModule, SharedModule],
})
export class HrModule {}
