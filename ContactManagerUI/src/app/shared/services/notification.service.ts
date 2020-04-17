import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastService:ToastrService) { }
  showSuccess(message, title){
    this.toastService.success(message, title)
}
  showError(message, title){
    this.toastService.error(message, title)
  }
}
