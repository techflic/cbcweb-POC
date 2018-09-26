import { Component } from '@angular/core';

@Component({
  selector: 'after-login-footer',
  template: `
  <div id="footer" class=""><span>footer</span></div>
  `,
  styles: [`
    #footer {
      display: block;
      border-top: 2px solid #000;
      background-color: #fff;
      min-width: 800px;
      font-size: 12px;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px;
      box-shadow: 0 0 10px 1px #888
    }
  `]
})
export class AfterLoginFooterComponent {
  
}