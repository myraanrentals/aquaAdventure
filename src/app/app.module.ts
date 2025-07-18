import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FaqComponent } from './pages/faq/faq.component';




@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, FooterComponent, FaqComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    HttpClientModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
