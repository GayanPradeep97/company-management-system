import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrmRoutingModule } from './crm-routing.module';
import { CrmDashboardComponent } from './crm-dashboard/crm-dashboard.component';
import { CompaniesComponent } from './companies/companies.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ContractsComponent } from './contracts/contracts.component';
import { PerposalsComponent } from './perposals/perposals.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CommunicatinsComponent } from './communicatins/communicatins.component';
import { DealsComponent } from './deals/deals.component';

@NgModule({
  declarations: [
    CrmDashboardComponent,
    CompaniesComponent,
    ActivitiesComponent,
    ContractsComponent,
    PerposalsComponent,
    ContactsComponent,
    CommunicatinsComponent,
    DealsComponent
  ],
  imports: [CommonModule, CrmRoutingModule, SharedModule],
})
export class CrmModule {}
