import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../shared/modules/material.module';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule,RouterModule,MaterialModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
