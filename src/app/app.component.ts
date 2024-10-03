import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./pages/userLayout/layout.component";
import { NgxSpinnerModule } from 'ngx-spinner';
import { AdminLayoutComponent } from "./pages/admin-layout/admin-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, NgxSpinnerModule, AdminLayoutComponent,AdminLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Authentication_Authorization';
}
