import { Component } from '@angular/core';

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
      z-index: 0;
      overflow: auto;
      min-width: 825px;
      display: block;
    }
    #toolbar {
      display: block;
      position: fixed;
      left: 50%;
      right: 0;
      top: 119px;
      margin: 0 auto 0 -513px;
      max-width: 1012px;
      z-index: 100;
      border: 1px solid #000;
      border-top: none;
      padding: 5px;
      background-color: #eee;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 6px;
      border-bottom-right-radius: 6px;
      text-align: right;
      min-height: 50px;
      box-shadow: 0 0 10px 1px #888
    }
  `]
})
export class UpgradeServicesCreditComponent {
  
}