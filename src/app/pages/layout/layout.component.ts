import { Component } from '@angular/core';
import { SharedService } from '../../serivces/shared.service';
import { AuthenticationServiceService } from '../../serivces/authentication-service.service';
import { SessionHelper } from '../../shared/helpers/session-helper';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/modules/material.module';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,RouterModule,MaterialModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  username: string=SessionHelper.getEmail()!;

  
  constructor(private authenticaionService: AuthenticationServiceService,private sharedService:SharedService,private router:Router ) {
    this.username= SessionHelper.getEmail()!;
  }
  ngOnInit() {
    this.sharedService.notifyChild2$.subscribe(() => {
      this.ngOnInit();
    });
    this.username = SessionHelper.getEmail()!;
  }

  // ngOnInit() {
  //   this.username = SessionHelper.getEmail()!;
  // }

  IsLoggedIn(): boolean {
    return SessionHelper.getToken() != null;
  }
  LogOut() {
    this.authenticaionService.LogOut();
    this.router.navigate(['home']);
  }
}
