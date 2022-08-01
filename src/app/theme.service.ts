import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  private darkThemeBehaviorSubject = new BehaviorSubject<boolean>(localStorage.getItem('dark-theme') === 'true' ? true :false);
  public isDarkTheme$=this.darkThemeBehaviorSubject.asObservable();

  themeChange(isDarkTheme:boolean)
  {
    console.log(isDarkTheme)
    this.darkThemeBehaviorSubject.next(isDarkTheme);
    
    localStorage.setItem('dark-theme',String(isDarkTheme));
  }
}
