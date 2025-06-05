import { Component, OnInit } from '@angular/core';
import { CarnewsService } from '../../services/carnews.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-carnews',
  imports:[CommonModule],
  templateUrl: './carnews.component.html',
  styleUrls: ['./carnews.component.scss']
})
export class CarnewsComponent implements OnInit {
  articles: any[] = [];

  constructor(private carNewsService: CarnewsService) {}

  ngOnInit() {
    this.carNewsService.getCarNews().subscribe((data: any) => {
      console.log(data);
      this.articles = data.articles;
    });
  }
}
