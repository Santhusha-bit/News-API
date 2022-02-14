import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  healthnewsDisplay:any = [];

  ngOnInit(): void {
    this._services.healthNews().subscribe((result => {
      this.healthnewsDisplay = result.articles;
    }))
  }

}
