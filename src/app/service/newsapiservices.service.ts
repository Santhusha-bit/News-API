import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //newsapiurl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=265ccb624c9f4a1486dffdd07784c2c8";

  //techapiurl
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=265ccb624c9f4a1486dffdd07784c2c8";

  //businessapiurl
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=265ccb624c9f4a1486dffdd07784c2c8";

  //topheading()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  //technews()
  techNews():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }

  //technews()
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

}
