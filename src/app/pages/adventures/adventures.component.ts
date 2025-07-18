import { Component, HostListener } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { MainService } from 'src/app/services/main.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.scss']
})
export class AdventuresComponent {
  
  
  private _albums: any = [];
  showListing:boolean= true;
  showDetails:boolean= false;
  navOpen:boolean = false;

  redirectToHome() {
    // Navigate to the home component
    this.router.navigate(['/']);
  }

  callPhoneNumber(phoneNumber: string) {
    window.location.href = `tel:${phoneNumber}`;
  }

  openWhatsApp(phoneNumber: string) {
    // Ensure the phone number is in international format (with country code)
    const internationalNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;

    // Open WhatsApp with the provided number
    //window.location.href = `https://wa.me/${internationalNumber}`;
    window.location.href = `https://wa.me/p/7380893491969991/918928868317`;
  }
  filters:any = {
    search:'DIVEIN, GOA',
    founded:'2014 Jan',
    Office: 'Vasco',
    type:'Any Home'
  }
  hotelsOffers: any[] =[
    {

      heading:"Related Activites",
      description:"Experience actual meaning of awesome",
      watersports:[
        {
          pageUrl:'best-scuba-diving-packages-in-goa',
          img:'E05.png', name:'Scuba Diving in Goa', location:'North Goa', amount:'1999',
          discountedamt:'1199',
          ratingCount : '326 Reviews',
          features:[
            {icon:'schedule', text:'6H'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Trainer'},
            // {icon:'local_taxi', text:'Transport'}
          ]
        },
        {
          pageUrl:'best-dinner-cruise-packages-in-goa',
          img:'C07.png', name:'Dinner Cruise in Goa', location:'North Goa', amount:'1499',
          discountedamt:'1199',
          ratingCount : '2475 Reviews',
          features:[
            {icon:'schedule', text:'3H'},
            {icon:'lunch_dining', text:'Meals & Drinks'},
            {icon:'follow_the_signs', text:'Guide'},
            // {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          pageUrl:'best-water-sports-packages-in-goa',
          img:'W12.png', name:'Water Sports in Goa', location:'North Goa', amount:'1499',
          discountedamt:'1149',
          ratingCount : '2338 Reviews',
          features:[
            {icon:'schedule', text:'3H'},
            {icon:'lunch_dining', text:'Meals & Drinks'},
            {icon:'follow_the_signs', text:'Guide'},
            // {icon:'local_taxi', text:'Transport'},
          ]
        }
      ]
    }
  ];
  goToRelatedPages(hotelName: string){
    console.log(hotelName);
    this.router.navigate([hotelName]);
  }
  hotels: any = [
    {
      pageUrl:'dudhsagar-waterfall-trip-in-goa',
      name:'Dudhsagar and Spice Plantation Tour',
      location:'Querin, Goa',
      actualAmount:'2499.00',
      amount:'1799.00',
      guests:'1476',
      ratings:'4.8',
      img: [
        {image:'assets/watersports/A04.png', thumbImage:'assets/watersports/A04.png', caption:'watersports'},
         ],
      amenities:[
        {name:'3 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'10 Hrs'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'location_on', text:'Querin, Goa'},
      ]
    },
    {
      pageUrl:'dudhsagar-waterfall-trip-in-goa',
      name:'Dudhsagar Water Fall Trip',
      location:'Querin, Goa',
      actualAmount:'2499.00',
      amount:'1899.00',
      guests:'1476',
      ratings:'4.8',
      img: [
        {image:'assets/watersports/A02.png', thumbImage:'assets/watersports/A02.png', caption:'watersports'},
         ],
      amenities:[
        {name:'3 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'10 Hrs'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'location_on', text:'Querin, Goa'},
      ]
    },
    {
      pageUrl:'',
      name:'Bungee Jumping in Goa',
      location:'Vadaval, Goa',
      actualAmount:'4999.00',
      amount:'3149.00',
      guests:'142',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/A01.png', thumbImage:'assets/watersports/A01.png', caption:'watersports'},
         ],
      amenities:[
        {name:'3 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'90 Min'},
        {icon:'location_on', text:'Vadaval, Goa'},
        {icon:'face', text:'12+ Yrs'}
        
      ]
    },
    {
      pageUrl:'',
      name:'Paragliding',
      location:'Goa',
      actualAmount:'3500.00',
      amount:'2750.00',
      guests:'762',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/P01.png', thumbImage:'assets/watersports/P01.png', caption:'watersports'},
         ],
      amenities:[
        {name:'3 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'12 Hrs'},
        {icon:'location_on', text:'Querim, Goa'},
        {icon:'face', text:'14+ Yrs'}
        
      ]
    },
    {
      pageUrl:'',
      name:'Paramotoring',
      location:'Goa',
      actualAmount:'4499.00',
      amount:'3499.00',
      guests:'62',
      ratings:'4.7',
      img: [
        {image:'assets/watersports/PM01.png', thumbImage:'assets/watersports/PM01.png', caption:'watersports'},
         ],
      amenities:[
        {name:'3 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'4 Hrs'},
        {icon:'location_on', text:'Querim, Goa'},
        {icon:'face', text:'14+ Yrs'}
        
      ]
    },
  ]
  stickyMsgShow:boolean = false;
  stickyMsgClose:boolean = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(event:any) {
    // Handle scroll event here
    if(window?.scrollY > 220 && !this.stickyMsgClose){
      this.stickyMsgShow = true;
    }else{
      this.stickyMsgShow = false
    }

  }
  constructor(private _lightbox: Lightbox, private _service:MainService, private router: Router, private route: ActivatedRoute) {

  }

  goToDetail(hotelName: string){
    this.router.navigate([hotelName], { relativeTo: this.route });
  }

  goBack(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnInit(){
    this._service.backToList.subscribe((res:any)=>{
      this.showListing = true;
    })
  }

  // open(index: number): void {
  //   // open lightbox
  //   this._lightbox.open(this._albums, index);
  // }

  // close(): void {
  //   // close lightbox programmatically
  //   this._lightbox.close();
  // }

  
}
