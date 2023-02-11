import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search-crit',
  templateUrl: './search-crit.component.html',
  styleUrls: ['./search-crit.component.css']
})
export class SearchCritComponent {

  @Output() criteriaSelected = new EventEmitter();

  onCriteriaSelect(criteria: number) {
    this.criteriaSelected.emit(criteria);
  }
}
