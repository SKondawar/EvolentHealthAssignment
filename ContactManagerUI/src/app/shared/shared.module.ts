import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { GlobaleventmanagerService } from './services/globaleventmanager.service';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports:[ToolbarComponent,MatToolbarModule,MatButtonModule],
  providers:[GlobaleventmanagerService]
})
export class SharedModule { }
