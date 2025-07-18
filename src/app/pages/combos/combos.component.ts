import { Component, HostListener } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { MainService } from 'src/app/services/main.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.scss']
})
export class CombosComponent {
  
  
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
    window.location.href = `https://wa.me/${internationalNumber}`;
    //window.location.href = `https://wa.me/p/7240052639375607/918928868317`;

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
          pageUrl:'/best-adventures-in-goa',
          img:'A02.png', name:'Dudhsagar Water Fall Trip', location:'North Goa', amount:'2499',
          discountedamt:'1899',
          ratingCount : '1476 Reviews',
          features:[
            {icon:'schedule', text:'4H'},
            {icon:'lunch_dining', text:'Meals'},
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
      pageUrl:'',
      name:'Scuba Diving in Goa',
      location:'Grand Island',
      actualAmount:'1999.00',
      amount:'1399.00',
      guests:'453',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/E05.png', thumbImage:'assets/watersports/E05.png', caption:'watersports'},
       ],
      amenities:[
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
        {name:'Boat Trips', icon:'directions_boat'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'6 Hrs'},
        {icon:'location_on', text:'Grand Island'},
        {icon:'face', text:'10+ Yrs'}
      ]
    },
    {
      pageUrl:'',
      name:'Scuba diving & Grand Island Trip',
      location:'Grand Island',
      actualAmount:'1999.00',
      amount:'1499.00',
      guests:'453',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/W18.jpeg', thumbImage:'assets/watersports/W18.jpeg', caption:'watersports'},
       ],
      amenities:[
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
        {name:'Boat Trips', icon:'directions_boat'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'15 Min'},
        {icon:'location_on', text:'Grand Island'},
        {icon:'face', text:'10+ Yrs'}
      ]
    },
    {
      pageUrl:'',
      name:'Grand Island Scuba and Water Sports Combo',
      location:'Grand Island',
      actualAmount:'2999.00',
      amount:'1999.00',
      guests:'453',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/03.png', thumbImage:'assets/watersports/03.png', caption:'watersports'},
       ],
      amenities:[
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
        {name:'Boat Trips', icon:'directions_boat'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'6 Hrs'},
        {icon:'location_on', text:'Grand Island'},
        {icon:'face', text:'10+ Yrs'}
      ]
    },
    {
      pageUrl:'',
      name:'Premium Scuba and Water Sports Combo',
      location:'Grand Island',
      actualAmount:'3999.00',
      amount:'2499.00',
      guests:'453',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/W03.png', thumbImage:'assets/watersports/W03.png', caption:'watersports'},
       ],
      amenities:[
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
        {name:'Boat Trips', icon:'directions_boat'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'6 Hrs'},
        {icon:'location_on', text:'Grand Island'},
        {icon:'face', text:'10+ Yrs'}
      ]
    },
    {
      pageUrl:'',
      name:'Professional Scuba Diving',
      location:'Grand Island',
      actualAmount:'4999.00',
      amount:'2999.00',
      guests:'65',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/W13.png', thumbImage:'assets/watersports/W13.png', caption:'watersports'},
       ],
      amenities:[
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
        {name:'Boat Trips', icon:'directions_boat'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'6 Hrs'},
        {icon:'location_on', text:'Grand Island'},
        {icon:'face', text:'15+ Yrs'}
      ]
    },
    {
      pageUrl:'',
      name:'Grand Island Trip',
      location:'Grand Island',
      actualAmount:'1999.00',
      amount:'1199.00',
      guests:'653',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/04.png', thumbImage:'assets/watersports/04.png', caption:'watersports'},
       ],
      amenities:[
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
        {name:'Boat Trips', icon:'directions_boat'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'6 Hrs'},
        {icon:'location_on', text:'Grand Island'},
        {icon:'face', text:'10+ Yrs'}
      ]
    },
    {
      pageUrl:'',
      name:'Grand Island and Water Sports Combo',
      location:'Grand Island',
      actualAmount:'1999.00',
      amount:'1699.00',
      guests:'653',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/W12.png', thumbImage:'assets/watersports/W12.png', caption:'watersports'},
       ],
      amenities:[
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
        {name:'Boat Trips', icon:'directions_boat'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'6 Hrs'},
        {icon:'location_on', text:'Grand Island'},
        {icon:'face', text:'10+ Yrs'}
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
