import { Component, OnInit } from '@angular/core';
import { SearchOption } from 'src/common/models/search-options.class';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.scss']
})
export class SearchWidgetComponent implements OnInit {

  searchOptions: SearchOption;

  constructor() { }

  ngOnInit() {
  }

  onGetSearchOptions(e){ 
    this.searchOptions = e;
  }
}
