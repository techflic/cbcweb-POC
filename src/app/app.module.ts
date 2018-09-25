import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpgradeServicesCreditComponent } from './upgrade-services/upgrade-services-credit/upgrade-services-credit.component';
import { AfterLoginHeaderComponent } from "./header/after-login-header.component";
import { AfterLoginFooterComponent } from "./footer/after-login-footer.component";

@NgModule({
  declarations: [
    AppComponent,
    UpgradeServicesCreditComponent,
    AfterLoginHeaderComponent,
    AfterLoginFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
