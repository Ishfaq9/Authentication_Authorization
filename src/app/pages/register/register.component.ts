import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MaterialModule } from '../../shared/modules/material.module';
import { RegisterDto } from '../../shared/models/register-dto.model';
import { FormControl, Validators, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AuthenticationServiceService } from '../../serivces/authentication-service.service';
import { Router, RouterModule } from '@angular/router';
import { UIHelperService } from '../../shared/helpers/u-i-helper.service';
import { Response } from '../../shared/models/responses/response.model';
import { SessionHelper } from '../../shared/helpers/session-helper';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  hide = true;
  resgierDto = RegisterDto;
  registerForm!: FormGroup;

  constructor(private authenticationService: AuthenticationServiceService,
    private router: Router, private fb: FormBuilder, private uihelperservice: UIHelperService) {
    this.registerForm = this.fb.group({
      userName: ['Ishfaq'],
      phoneNumber: ['01912120037'],
      dateOfBirth: ['2024-08-31'],
      email: ['ishfaq.rahman9@gmail.com'],
      psw: ['Ish1234271@1'],
    });
  }

  ngOnInit() {
    if (SessionHelper.getToken() != null) {
      this.router.navigate(['signin']);
    }
  }


  Submit() {
    const registerData = new RegisterDto({
      UserName: this.registerForm.value.userName,
      PhoneNumber: this.registerForm.value.phoneNumber,
      Email: this.registerForm.value.email,
      Password: this.registerForm.value.psw,
      DateOfBirth: this.registerForm.value.dateOfBirth
    });
    //console.log(registerData)
    if (registerData.UserName == '' || registerData.PhoneNumber == '' || registerData.Email == '' || registerData.Password == '' || registerData.DateOfBirth == '') {
      this.uihelperservice.SwalMessageWarning('Warning', 'Plese enter the Information');
    } else {
      registerData.DateOfBirth = new Date(this.registerForm.value.dateOfBirth).toISOString().slice(0, 10);
      this.uihelperservice.SpinnerShow();
      this.authenticationService.Register(registerData).subscribe({
        next: (val: Response) => {
          this.uihelperservice.SpinnerHide();
          if (val.isSuccess) {
            this.uihelperservice.SwalMessageSuccess(val.status, val.message).then(result => {
              if (result.isConfirmed) {
                this.router.navigate(['signin']);
              }
            })
          } else {
            this.uihelperservice.SwalMessageError(val.status, val.message);
            this.registerForm = this.fb.group({
              userName: [''],
              phoneNumber: [''],
              dateOfBirth: [''],
              email: [''],
              psw: [''],
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
