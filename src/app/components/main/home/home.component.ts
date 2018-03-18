import { Component } from '@angular/core';
import { PageComponent } from '../../shared/page/page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PageComponent{
  pageTitle: string = 'Home page';
}