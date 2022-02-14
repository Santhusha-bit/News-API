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

  //scienceapiurl
  scienceApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=265ccb624c9f4a1486dffdd07784c2c8";

  //sportsapiurl
  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=265ccb624c9f4a1486dffdd07784c2c8";

  //healthapiurl
  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=265ccb624c9f4a1486dffdd07784c2c8";

  //entertainmentapiurl
  entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=265ccb624c9f4a1486dffdd07784c2c8";


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

  //sportsnews()
  sportsNews():Observable<any>
  {
    return this._http.get(this.sportsApiUrl);
  }

  //healthnews()
  healthNews():Observable<any>
  {
    return this._http.get(this.healthApiUrl);
  }

  //businessnews()
  businessNews():Observable<any>
  {
    return this._http.get(this.businessApiUrl);
  }

  //entertainmentnews()
  entertainmentNews():Observable<any>
  {
    return this._http.get(this.entertainmentApiUrl);
  }

  //sciencenews()
  scienceNews():Observable<any>
  {
    return this._http.get(this.scienceApiUrl);
  }

}
