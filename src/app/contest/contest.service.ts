import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ContestSubmission } from './contest';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  observe: 'response' as 'body'
};

@Injectable({
  providedIn: 'root'
})
export class ContestService {
  constructor(private http: HttpClient) {}

  public createSlogan(contestSubmission: ContestSubmission) {
    // let url: string = 'https://api.myjson.com/bins/1753m4';
    // let url: string = '../../assets/riders.json';
    let url: string = 'http://localhost:3000/api/slogans/';

    return this.http.post(url, contestSubmission, httpOptions);
  }
}
