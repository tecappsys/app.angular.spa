import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE_KEY,THEME_UI,ThemeService } from '@tecappsys/library-angular';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public isDarkTheme:boolean;
  private URL_SEARCH:string = '/search/';

  public constructor(
    private router:Router,
    public themeService: ThemeService
  ){}
  
  public ngOnInit(){
    const currentTheme = window.localStorage.getItem(LOCAL_STORAGE_KEY.THEME_UI);
    this.isDarkTheme = (currentTheme === THEME_UI.DARK)
  }

  public onChangeIsDarkTheme(isDarkTheme:boolean){
    this.isDarkTheme = isDarkTheme;
    this.themeService.toggleTheme(isDarkTheme ? THEME_UI.DARK : THEME_UI.LIGHT);
  }

  public onBackView(urlBackView:string){
    this.router.navigate([urlBackView])
  }

  public onSearch(search:string){
    if(typeof search === 'string'){
      this.router.navigate( [`${this.URL_SEARCH}${search}`] );
    }     
  }

}