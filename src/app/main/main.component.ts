import { Component} from '@angular/core';
import { THEME_UI } from '../shared/enums/theme-ui.enum';
import { ThemeService } from '../core/theme.service';
import { LOCAL_STORAGE_KEY } from '../shared/enums/local-storage-key.enum';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public isDarkTheme:boolean;

  public constructor(public themeService: ThemeService){}
  
  public ngOnInit(){
    const currentTheme = window.localStorage.getItem(LOCAL_STORAGE_KEY.THEME_UI);
    this.isDarkTheme = (currentTheme === THEME_UI.DARK)
  }

  public onChangeIsDarkTheme(isDarkTheme:boolean){
    this.themeService.toggleTheme(isDarkTheme ? THEME_UI.DARK : THEME_UI.LIGHT);
  }

}
