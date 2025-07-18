import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { WatersportsComponent } from '../watersports/watersports.component';
import { CruiseComponent } from '../cruise/cruise.component';
import { AdventuresComponent } from '../adventures/adventures.component';
import { CombosComponent } from '../combos/combos.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { DetailedComponent } from '../hotels/detailed/detailed.component';
import { SunsetCruiseComponent } from '../sunset-cruise/sunset-cruise.component';
import { PartyCruiseComponent } from '../party-cruise/party-cruise.component';
import { BestSunsetCruiseComponent } from '../best-sunset-cruise/best-sunset-cruise.component';



const routes: Routes = [
  {path:'', component:LandingComponent},
  { path: 'home:tabName', component: LandingComponent, children: [
    {path: ':hotelName', component: DetailedComponent}
  ]},
  // { path: 'home/:tabName/:hotelName', component: DetailedComponent},
  {path:'show-list', component:HotelsComponent},
  {path:'grand-island-water-sports-combo', component:DetailedComponent},
 // {path:'monsoon-adventure-boat-party', component:WatersportsComponent},
  {path:'best-water-sports-packages-in-goa', component:WatersportsComponent},
  {path:'book-water-sports-in-goa-with-adventure-boat-party', component:WatersportsComponent},
  {path:'best-water-sports-packages-in-goa/:hotelName', component: DetailedComponent},
  {path:'best-dinner-cruise-packages-in-goa', component:CruiseComponent},
  {path:'best-dinner-cruise-packages-in-goa/:hotelName', component: DetailedComponent},
  {path:'best-adventures-in-goa', component:AdventuresComponent},
  {path:'best-adventures-in-goa/:hotelName', component: DetailedComponent},
  {path:'best-scuba-diving-packages-in-goa', component:CombosComponent},
  {path:'best-scuba-diving-packages-in-goa/:hotelName', component: DetailedComponent},

  {path:'show-reviews', component:ReviewsComponent},

  {path:'water-sports-in-calangute', component:DetailedComponent},
  {path:'water-sports-in-candolim', component:DetailedComponent},
  {path:'water-sports-in-baga', component:DetailedComponent},
  {path:'water-sports-in-arpora', component:DetailedComponent},
  {path:'water-sports-in-anjuna', component:DetailedComponent},
  {path:'water-sports-in-baina', component:DetailedComponent},

  {path:'water-sports-in-goa', component:DetailedComponent},
  {path:'scuba-diving-in-goa', component:DetailedComponent},
  {path:'dinner-cruise-in-goa', component:DetailedComponent},
  {path:'party-cruise-in-goa', component:PartyCruiseComponent},
  {path:'dudhsagar-waterfall-in-goa', component:DetailedComponent},
  {path:'dudhsagar-waterfall-and-spice-plantation-tour-in-goa', component:DetailedComponent},

  {path:'yatch-in-goa', component:DetailedComponent},
 // {path:'party-cruise-in-goa', component:PartyCruiseComponent},
  {path:'sunset-cruise-in-goa', component:SunsetCruiseComponent},
  {path:'dinnercruise-in-goa', component:DetailedComponent},
  {path:'jetski', component:DetailedComponent},
  {path:'parasailing', component:DetailedComponent},
  {path:'scuba-diving-combo', component:DetailedComponent},
  {path:'water-sports-combo', component:DetailedComponent},
  {path:'advanced-watersports-combo', component:DetailedComponent},
  {path:'scuba-watersports-combo', component:DetailedComponent},
  
  {path:'basic-water-sports-in-goa', component:DetailedComponent},
  {path:'advance-water-sports-in-goa', component:DetailedComponent},
  {path:'dudhsagar-waterfall-trip-in-goa', component:DetailedComponent},

  {path:'luxury-dinner-cruise', component:DetailedComponent},

  {path:'book-dinner-cruise-in-goa', component:DetailedComponent},
  {path:'book-family-dinner-cruise-in-goa', component:DetailedComponent},
  {path:'book-luxury-dinner-cruise-in-goa', component:DetailedComponent},
  {path:'book-sunset-cruise-in-goa', component:DetailedComponent},
  {path:'book-night-party-cruise-in-goa', component:DetailedComponent},
  {path:'best-sunset-cruise-in-goa', component:BestSunsetCruiseComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
