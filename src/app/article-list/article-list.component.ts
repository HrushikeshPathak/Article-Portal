import { Component, OnInit,Input } from '@angular/core';
import {Article} from '../article.model';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
@Input() article:Article[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
