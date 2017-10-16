import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-npsr',
  templateUrl: './npsr.component.html',
  styleUrls: ['./npsr.component.css']
})
export class NpsrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  amount:string;
  feeCalc(std:string){
   
   switch(std)
   {
     case '1':{
       this.amount='46000';
       break;
     }
     case '2':{
       this.amount='53000';
       break;
     }
     case '3': case '4':case '5':{
      this.amount='55000';
      break;
     }
     case '6': case '7':case '8':{
      this.amount='43500';
      break;
     }
     case '9':{
       this.amount='48500';
       break;
     }
     case '10':case'12':{
      this.amount='53500';
      break;
    }
    case '11':{
      this.amount='69000';
      break;
    }
    }
   }


}
