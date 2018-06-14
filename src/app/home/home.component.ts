import { Component, OnInit , ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  
showmenu:boolean=true;
myDate=new Date();
    username:any='';
  constructor(private ref: ChangeDetectorRef ,private httpService: HttpClient ) { 
    setInterval(() => {         //replaced function() by ()=>
      this.myDate = new Date();
      console.log(this.myDate);
      this.ref.markForCheck();
       // just testing if it is working
    }, 1000);
  }


  // ADD CHART OPTIONS. 
  pieChartOptions = {
    responsive: true
}

pieChartLabels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

// CHART COLOR.
pieChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
        ]
    }
]

pieChartData:any = [
    { 
        data: []
    }
];

ngOnInit () {
    this.httpService.get('./assets/sales.json', {responseType: 'json'}).subscribe(
        data => {
            this.pieChartData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.
        },
        (err: HttpErrorResponse) => {
            console.log (err.message);
        }
    );
}

onChartClick(event) {
    console.log(event);
}

  




}
