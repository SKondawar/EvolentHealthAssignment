import { Component,AfterViewInit } from '@angular/core';
import { GlobaleventmanagerService } from './shared/services/globaleventmanager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ContactInfo';
  display = false;
  ShowLoader:boolean = false;
  constructor(private globalEventManagerService: GlobaleventmanagerService) {
   
  }
  ngAfterViewInit(): void {
    this.globalEventManagerService.showToolBar.subscribe(value => {
      this.display=value;
    }
    );
  }  
}
