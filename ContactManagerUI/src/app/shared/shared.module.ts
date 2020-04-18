import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { GlobaleventmanagerService } from './services/globaleventmanager.service';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  exports:[ToolbarComponent,MatToolbarModule,MatButtonModule,MatIconModule,MatMenuModule],
  providers:[GlobaleventmanagerService]
})
export class SharedModule { }
