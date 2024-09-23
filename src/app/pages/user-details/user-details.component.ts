import { Component, ViewChild } from '@angular/core';
import { AuthenticationServiceService } from '../../serivces/authentication-service.service';
import { UIHelperService } from '../../shared/helpers/u-i-helper.service';
import { User } from '../../shared/models/user.model';
//import { RegularModule } from '../../shared/modules/regular.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/modules/material.module';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule,MaterialModule,MatTableModule, MatPaginatorModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  constructor(private AuthenticationServiceService: AuthenticationServiceService, private UIHelperService: UIHelperService) { }

  user: User[] = [];
  displayedColumns: string[] = ['id', 'userName', 'email', 'phoneNumber', 'dateOfBirth', 'insertedDate', 'updatedDate', 'updatedBy'];
  dataSource! : MatTableDataSource<User>;
  //dataSource = new MatTableDataSource<User>(this.user);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.GetUser();
    this.dataSource=new MatTableDataSource<User>(this.user);
  }

  
  GetUser() {
    this.UIHelperService.SpinnerShow();
    this.AuthenticationServiceService.GetUser().subscribe({
      next: (res) => {
        this.UIHelperService.SpinnerHide();
        if (res == null) {
          this.UIHelperService.SwalMessageError('Error', 'No Data Found');
        } else {
          console.log(res);
          this.user = res;
          this.dataSource.data= res;
        }
      }, error: (err) => {
        this.UIHelperService.SpinnerHide();
        this.UIHelperService.SwalMessageError('Failed', 'failed to load the data');

      }

    })
  }

}