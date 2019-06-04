﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list.component';
import { ListFormComponent } from './ListForm/list-form.component';
import { ListItemComponent } from './ListItem/list-item';
import { WarningMessageModule } from 'src/app/shared/warning-message/warning-message.module';

@NgModule({
  declarations: [
    ListComponent,
    ListFormComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WarningMessageModule,
    RouterModule.forChild([
      { path: 'List', component: ListComponent},
    ]),
  ]
})
export class ListModule { }
