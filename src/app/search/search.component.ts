import { Component,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Search } from './search.model';
import { SearchService } from './search.service';
interface BusRes {
  animals: Search[];
  criteria: string;
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy {
  criteria: string ='';
  loading: boolean = false;
  criteriaSelected: BusRes = {animals: [],criteria: ''};
  private subResponse: Subscription;
  private loadingResponse: Subscription = Subscription.EMPTY;
  constructor(public SearchService: SearchService){
    this.subResponse = Subscription.EMPTY;
  }

  onCriteriaSelectedFromChild(criteria: number){
    // this.criteriaSelected = criteria;
    switch (criteria) {
      case 0:
        this.criteria='';
        this.criteriaSelected = {animals: [],criteria: this.criteria};
        break;
      case 1:
        this.criteria='frog';
        this.SearchService.getFrogs;
        break;
      case 2:
        this.criteria='fox';
        this.SearchService.getFoxs;
        break;
      case 3:
        this.criteria='dragon';
        this.SearchService.getDragons;
        break;
      default:
        break;
    }
    this.loadingResponse = this.SearchService.getLoading().subscribe(r=>{
      // console.log(r)
      this.loading=r;
    })
    this.subResponse = this.SearchService.getBusquedaObservable().subscribe((r: Search[])=>{
      this.criteriaSelected = {animals: r, criteria: this.criteria};
    })
  }

  ngOnDestroy(): void {
    console.log('Dejando Componente')
    this.subResponse.unsubscribe();
    this.loadingResponse.unsubscribe();
  }
}

