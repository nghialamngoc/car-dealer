import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-of-search-options',
  templateUrl: './result-of-search-options.component.html',
  styleUrls: ['./result-of-search-options.component.scss']
})
export class ResultOfSearchOptionsComponent implements OnInit {

  sortCritiria = [
    {value: 0, display: 'Ngày: Mới nhất'},
    {value: 1, display: 'Ngày: Cũ nhất'},
    {value: 2, display: 'Giá: Cao nhất'},
    {value: 3, display: 'Giá: Thấp nhất'}
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
