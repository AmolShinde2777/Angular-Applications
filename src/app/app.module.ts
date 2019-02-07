import { AgencyDataService } from './services/agency-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgencyListComponent } from './component/agency-list/agency-list.component';
import { HomePageComponent } from './component/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AgencyListComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2OrderModule,
    NgxPaginationModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [AgencyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
