import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import {WarehouseServiceService} from "./services/warehouse-service.service";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {WarehouseData} from "./warehouse-data";
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { UserComponent } from './user/user.component';

const path:Routes = [
  {path: '', component: WarehouseComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'user', component: UserComponent},
  {path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    SideNavComponent,
    WarehouseComponent,
    HomeComponent,
    StatsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(path),
    InMemoryWebApiModule.forRoot(WarehouseData)
  ],
  providers: [
    WarehouseServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
