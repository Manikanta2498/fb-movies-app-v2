import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { throwError, Observable } from 'rxjs';
import {GlobalConstants} from '../global-constants';

@Injectable({
  providedIn: 'root'
})
export class PreconnectService {

  base_url: string = GlobalConstants.backend_url;
  constructor(private http: HttpClient) { }
  postUserTestType(data: any): Observable<any> {
    let url = this.base_url +'postusertesttype/';
    const headers = { 'Content-Type': 'text/plain' };
    return this.http.post<any[]>(url, data ,{ headers }).pipe(
      tap(response => {}));
  }
  postInfo(data: any): Observable<any> {
    let url = this.base_url +'postnewuser/';
    const headers = { 'Content-Type': 'text/plain' };
    return this.http.post<any[]>(url, data ,{ headers }).pipe(
      tap(response => {}));
  }
}
