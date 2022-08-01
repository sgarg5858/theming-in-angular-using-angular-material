import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public themeService:ThemeService) { }

  changeTheme(theme:boolean)
  {
    console.log(theme,typeof theme);
    this.themeService.themeChange(theme);
  }

  ngOnInit(): void {
  }

}
