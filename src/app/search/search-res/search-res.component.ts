import { Component, Input } from '@angular/core';
import { Search } from '../search.model';

interface SeaRes{
  animals:Search[];
  criteria:string;
}

@Component({
  selector: 'app-search-res',
  templateUrl: './search-res.component.html',
  styleUrls: ['./search-res.component.css']
})
export class SearchResComponent {
  @Input() criteriaListenedFromExternalComponent: SeaRes = {animals: [],criteria: ''};
  @Input() loading: boolean = false;
}
