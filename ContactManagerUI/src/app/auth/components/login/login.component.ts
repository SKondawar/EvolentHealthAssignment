import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { GlobaleventmanagerService } from 'src/app/shared/services/globaleventmanager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // loading = false;
  // submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService : AuthService,
      private globalEventManagerService:GlobaleventmanagerService
      //private alertService: AlertService
  ) {
      // redirect to home if already logged in
      // if (this.authenticationService.currentUserValue) {
      //     this.router.navigate(['/']);
      // }
      this.globalEventManagerService.setShowToolBarFlag(false);
      this.authService.setIsUserLoggedIn(false);
      
  }

  ngOnInit() {
      
      this.loginForm = this.formBuilder.group({
          username : ['admin',Validators.required],
          password : ['admin',Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get lfCtrls() 
  { 
    return this.loginForm.controls; 
  }

  onSubmit() {
        if (this.loginForm.invalid) {
          return;
        }
        else
        {
          if(this.authService.login(this.lfCtrls.username.value,this.lfCtrls.password.value))
          {
            this.globalEventManagerService.setShowToolBarFlag(true);
            //
            this.router.navigate(['/welcome']);
          }
        }
    }
}
