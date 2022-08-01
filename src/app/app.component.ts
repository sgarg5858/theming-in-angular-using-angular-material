import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theming-in-angular-using-angular-material';
  constructor(public themeService:ThemeService)
  {
    this.themeService.isDarkTheme$.subscribe((value:boolean)=>{
      console.log(value);
    })
  }
}
