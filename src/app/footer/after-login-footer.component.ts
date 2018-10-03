import { Component } from '@angular/core';

@Component({
  selector: 'after-login-footer',
  template: `
    <footer><span>Copyright 2018 Accionlabs. All Rights Reserved</span></footer>
  `,
  styles: [`
    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px;
      border-top: 2px solid #000;
      box-shadow: 0 0 10px 1px #888
    }
  `]
})
export class AfterLoginFooterComponent {
  
}