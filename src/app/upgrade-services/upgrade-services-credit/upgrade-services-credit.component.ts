import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'upgrade-services-credit',
  templateUrl: './upgrade-services-credit.component.html',
  styles: [`
    #accHistoryBtn {
      margin: 5px 0;
    }
    .client-info {
        display: block;
        width: 500px;
        margin: 0 auto;
    }
    .services-section {
        margin: 20px auto;
        padding: 0 30px;
        text-align: center;
    }
  `]
})
export class UpgradeServicesCreditComponent implements OnInit {
  upgradeServicesCreditForm: FormGroup
  service: FormControl

  constructor(){
    
  }

  ngOnInit(){
    this.service = new FormControl('')
    
    this.upgradeServicesCreditForm = new FormGroup({
      service: this.service
    })
  }

  serviceSelected(event){
    console.log('selected service :', event.target.value)
  }

}