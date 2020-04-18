import { Component, OnInit } from '@angular/core';
import { GlobaleventmanagerService } from '../../services/globaleventmanager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private globaleventmanagerService: GlobaleventmanagerService,private router:Router) {
    console.log('ToolbarComponent');
   }

  ngOnInit(): void {
  }
  
}
