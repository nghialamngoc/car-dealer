import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  articles = [
    {
      articleTitle : 'khuyễn mãi tháng 9',
      createBy: 'Admin',
      articleContent: 'Were. Every forth one male man which. Brought won’t divide in. Hath gathering. Have. Open fifth face shall land fish kind isn’t let can’t blessed multiply third light, shall from winged, his creature isn’t midst said dominion in. Male firmament beginning dominion fourth he place shall',
      articleImageUrl: 'http://autozone.templines.org/dealer/wp-content/uploads/2016/02/1920x1200_bmw_m1series_coupe_03-470x280.jpg',
      articleDay: new Date(),
      articleUrl: ''
    },
    {
      articleTitle : 'dịch vụ bảo trì tháng 9',
      createBy: 'Admin',
      articleContent: 'Were. Every forth one male man which. Brought won’t divide in. Hath gathering. Have. Open fifth face shall land fish kind isn’t let can’t blessed multiply third light, shall from winged, his creature isn’t midst said dominion in. Male firmament beginning dominion fourth he place shall',
      articleImageUrl: 'http://autozone.templines.org/dealer/wp-content/uploads/2016/09/audi_r8_gt_5-wide-470x280.jpg',
      articleDay: new Date()
    },
    {
      articleTitle : 'khuyễn mãi tháng 9',
      createBy: 'Admin',
      articleContent: 'Were. Every forth one male man which. Brought won’t divide in. Hath gathering. Have. Open fifth face shall land fish kind isn’t let can’t blessed multiply third light, shall from winged, his creature isn’t midst said dominion in. Male firmament beginning dominion fourth he place shall',
      articleImageUrl: 'http://autozone.templines.org/dealer/wp-content/uploads/2016/02/1920x1200_bmw_m1series_coupe_03-470x280.jpg',
      articleDay: new Date()
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
