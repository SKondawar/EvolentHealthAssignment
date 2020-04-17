import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class GlobaleventmanagerService {

  private _showToolBar = new BehaviorSubject<boolean>(false);
  get showToolBar() : Observable<boolean>
  {
    return this._showToolBar.asObservable();
  }
  constructor() { }
  setShowToolBarFlag(flag)
  {
    this._showToolBar.next(flag);
  }
}
