import { Component} from '@angular/core';
import { Article} from './article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  article:Article[]=[];
  
  onAdd(title,link):void{
this.article.push(new Article(title.value,link.value));
console.log(this.article);
title.value='';
link.value='';

  }
}
