import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { OverviewTableComponent } from './overview-table/overview-table.component';
import { OverviewTableRowComponent } from './overview-table-row/overview-table-row.component';
import { OverviewTableColumnComponent } from './overview-table-column/overview-table-column.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    OverviewTableComponent,
    OverviewTableRowComponent,
    OverviewTableColumnComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
