import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LayoutComponent } from '../userLayout/layout.component';
import { AuthenticationServiceService } from '../../serivces/authentication-service.service';
import { SharedService } from '../../serivces/shared.service';
import { UIHelperService } from '../../shared/helpers/u-i-helper.service';
import { Router } from '@angular/router';
import { Response } from '../../shared/models/responses/response.model';
//import { RegularModule } from '../../shared/modules/regular.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/modules/material.module';
import { RouterModule } from '@angular/router';
import { SessionHelper } from '../../shared/helpers/session-helper';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,MaterialModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  loginform!: FormGroup;
  username!: string;
  password!: string;
  layout!: LayoutComponent;
  constructor(private formgroup: FormBuilder, private _authenticationService: AuthenticationServiceService,
    private _router: Router, private uihelperservice: UIHelperService, private sharedService: SharedService) {
    this.loginform = this.formgroup.group({
      uname: ['ishfaq'],
      psw: ['Ish1234271@']
    })
  }

  ngOnInit(): void {
    if (this._authenticationService.IsLoggedIn()) {
      this._router.navigate(['/product-details']);
    }
  }


  Submit() {
    //this.uihelperservice.SpinnerShow();
    this.username = this.loginform.get('uname')?.value;
    this.password = this.loginform.get('psw')?.value;
    //this.uihelperservice.SpinnerShow();
    console.log(this.username + this.password)
    if (this.username == null || this.password == null || this.username == '' || this.password == '') {
      this.uihelperservice.SwalMessageWarning('Warning', 'Plese enter the Information');
    } else {
      this.uihelperservice.SpinnerShow();
      this._authenticationService.login(this.username, this.password).subscribe({
        next: (val: Response) => {

          this.uihelperservice.SpinnerHide();
          console.log(val);
          if (val.isSuccess) {
            //console.log(true)
            // this.uihelperservice.SwalMessageSuccess(val.status, val.message).then(result => {
            //   if (result.isConfirmed) {
                this._authenticationService.storeToken(val.message);
                //this._router.navigate(['/product-details']);
                //this._router.navigate(['/user-details']);

                this.sharedService.triggerChild2Function();
                console.log(SessionHelper.getRole())
                this._router.navigate([`/${SessionHelper.getRole()}`]); 
                //this._router.navigate([`/${'User'}`]); 
                //   this._router.navigateByUrl('/layout', { skipLocationChange: true }).then(() => {
                //     this._router.navigate(['/product-details']);
                // }); 
            //   }
            // });
          } else {
            console.log(false)
            this.uihelperservice.SwalMessageError(val.status, val.message).then(result => {
              if (result.isConfirmed) {
                this.loginform = this.formgroup.group({
                  uname: ['ishfaq'],
                  psw: ['Ish1234271@']
                })
              }
            });
          }
        }, error: (error: any) => {
          this.uihelperservice.SpinnerHide();
          this.uihelperservice.SwalMessageServerError();
        }
      })
    }
  }
}
