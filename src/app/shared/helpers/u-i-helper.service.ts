import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal, { SweetAlertIcon } from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UIHelperService {

  constructor(private _spinner:NgxSpinnerService) { }
  
  SpinnerShow = () => this._spinner.show();
  SpinnerHide = () => this._spinner.hide();

  SwalMessage(title: string, text: string, icon: SweetAlertIcon, color: string = '#8CD4F5'){
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'Ok',
      confirmButtonColor: '#8CD4F5'
    });
  }
  
  SwalMessageSuccess(title: string, text: string){
    return Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#8CD4F5'
    });
  }
  SwalMessageError(title: string, text: string){
    return Swal.fire({
      title: title,
      text: text,
      icon: 'error',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#8CD4F5'
    });
  }

  async SwalMessageErrorAsync(title: string, text: string){
    await Swal.fire({
      title: title,
      text: text,
      icon: 'error',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#8CD4F5'
    });
  }

  SwalMessageWarning(title: string, text: string){
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#8CD4F5'
    });
  }
  SwalMessageServerError(){
    Swal.fire({
      title: 'Failed',
      text: 'Internal Server Error!',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
  SwalDeleteConformation(): boolean{
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this data?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        return true;
      } 
      return false
    })
    return false;
  }
  

  async SwalConformation(title: string, text: string): Promise<any> {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
    })
  }

  async SwalShowMessage(title: string, html: string): Promise<any> {
    return Swal.fire({
      title: title,
      html: html,
      confirmButtonText: 'OK',
      confirmButtonColor: "#1a3a54"
    })
  }
}
