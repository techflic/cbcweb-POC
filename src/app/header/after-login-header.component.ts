import { Component } from '@angular/core';

@Component({
  selector: 'after-login-header',
  template: `
    <header>header</header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      padding: 10px;
      border-bottom: 2px solid #000;
      box-shadow: 0 0 10px 1px #888;
      min-width: 800px;
      min-height: 118px;
    }
  `]
})
export class AfterLoginHeaderComponent {
  
}