import { Injectable } from '@angular/core';
import { Search } from "./search.model";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject, Subject } from "rxjs";
import { environment } from '../../env/environment.development';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  apiKey:string = environment.apiKey;
  headers = new HttpHeaders();
  header = this.headers.set('X-Api-Key', this.apiKey);

  constructor(private http:HttpClient) {}
  private busqueda: Search[] = [];
  private busquedaResults = new Subject<Search[]>();
  public loading = new BehaviorSubject<boolean>(true);
  //https://api-ninjas.com/api/dogs
  getFrogs(){
    this.loading.next(true)
    this.http.get<Search[]>("https://api.api-ninjas.com/v1/animals?name=frog", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }
  getFoxs(){
    this.loading.next(true)
    this.http.get<Search[]>("https://api.api-ninjas.com/v1/animals?name=fox", {headers: this.header})
      .subscribe((result)=>{
        console.log('buscando')
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
       ()=>{},
       ()=>{
        this.loading.next(false)
       });
  }

  getDragons(){
    this.loading.next(true)
    this.http.get<Search[]>("https://api.api-ninjas.com/v1/animals?name=dragon", {headers: this.header})
      .subscribe((result)=>{
        this.busqueda = result;
        this.busquedaResults.next([...this.busqueda]);
      },
      ()=>{},
      ()=>{
       this.loading.next(false)
      });
  }

  getBusquedaObservable(){
    return this.busquedaResults.asObservable();
  }

  getLoading(){
    return this.loading;
  }
}

