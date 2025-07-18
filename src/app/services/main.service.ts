import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiUrl = 'assets/data.json';
  backToList:any = new Subject();
  constructor(private http:HttpClient) { }

  getJsonData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
