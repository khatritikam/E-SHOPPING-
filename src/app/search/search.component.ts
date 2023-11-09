import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchValue: string = '';

  chengeSearchValue(eventData: Event){
   // console.log(eventData);
  //console.log((<HTMLInputElement>eventData.target).value);
  this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
}
