import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/modules/material.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
