import { Component, OnInit } from '@angular/core';
import { Api } from '../../core/service/api';
import { ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-statistics',
  standalone: false,
  templateUrl: './statistics.html',
  styleUrl: './statistics.css'
})
export class Statistics implements OnInit{
  data: any[] = [];
  measures : any[] = [];
  view: [number, number] = [700, 400];
  gradient: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#c9413cff', '#258D19']
  };

  constructor(private apiServer : Api) {
  }

  ngOnInit(): void {
    this.loadStatistics();
  }

  loadStatistics(){
    this.apiServer.getStatistics().subscribe((result:any)=>{
      this.data = result.filter((row:any)=> row.status == true);
      this.measures = result;
    })
  }
}
