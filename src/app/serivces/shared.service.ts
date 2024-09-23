import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private notifyChild2Source = new Subject<void>();
  notifyChild2$ = this.notifyChild2Source.asObservable();

  triggerChild2Function() {
    this.notifyChild2Source.next();
  }
}
