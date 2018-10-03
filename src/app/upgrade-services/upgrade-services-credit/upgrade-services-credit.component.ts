import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { NgbModal, NgbModalConfig, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'upgrade-services-credit',
  templateUrl: './upgrade-services-credit.component.html',
  styles: [`
    #inMain {
      position: absolute;
      top: 120px;
      right: 0;
      bottom: 42px;
      left: 0;
      overflow: auto;
      min-width: 825px;
    }
    .displayDiv {
      max-width: 1024px;
      min-width: 500px !important;
      margin: 70px auto;
    }
    .divHeader {
      padding: .4em 1em;
      
    }
    .divBody {
      padding: .4em 1em;
      
    }
    .radio-box {
      width: 300px;
      float: left;
      margin: 0 10px 20px;
      text-align: left;
    }
    .radio-box > .divBody {
      min-height: 220px;
    }
    .radio label {
      min-height: 22px;
      padding-left: 5px;
      margin-bottom: 0;
    }
    .radio span {
      margin-left: 5px;
    }
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
    #toolbar {
      position: fixed;
      z-index: 1;
      margin: 0;
      left: 12.5%;
      right: 12.5%;
      top: 118px;
      border: 1px solid #000;
      border-top: none;
      padding: 5px;
      background-color: #eee;
      box-shadow: 0 0 10px 1px #888;
    }
    .breadcrumb {
      margin: 0;
      padding: 0;
    }
  `]
})
export class UpgradeServicesCreditComponent implements OnInit {
  upgradeServicesCreditForm: FormGroup
  service: FormControl
  @ViewChild('modal') modal:ElementRef;
  modalHeader: string = ''

  constructor(private modalService: NgbModal, private el: ElementRef, config: NgbModalConfig){
    // customize default values of modals used by this component tree
    // config.backdrop = 'static';
    // config.keyboard = false;
  }

  ngOnInit(){
    this.service = new FormControl('')
    
    this.upgradeServicesCreditForm = new FormGroup({
      service: this.service
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC'
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop'
    } else {
      return `with: ${reason}`
    }
  }

  serviceSelected(event){
    this.modalHeader = event.target.nextSibling.innerHTML

    //open services modal
    event.srcElement.blur ()
    this.modalService.open(this.modal, {
      backdropClass: 'backdropClass',
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
      centered: true
    }).result.then((result) => {
      console.log(`closed by ${result}`)
      this.service.reset()
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`)
      this.service.reset()
    });
  }
}
const servicesConfig = {
  "rmcr": {
    "title": "RMCR",
    "widgetsId": ["uploadFormAcc", "RMCRRefUpdateAcc"],
    "upgradeToKey": "infileToRmcr",
    "submitValidation": ["uploadFormsValidate"]
  },
  "infile": {
    "title": "Infile",
    "widgetsId": ["aliasListAcc"],
    "upgradeToKey": "upgradeToInfile"
  },
  "mortgageOnly": {
    "title": "Mortgage Only",
    "widgetsId": ["aliasListAcc"],
    "upgradeToKey": "upgradeToMortgageOnly",
  },
  "creditXpert": {
    "title": "CreditXpert&#153",
    "widgetsId": ["creditXSelProdAcc", "creditXSelAppAcc", "appCreditXAcc", "CoCreditXAcc"],
    "upgradeToKey": "upgradeToCX",
    "submitValidation": ["creditXpertValidate"]
  }
}