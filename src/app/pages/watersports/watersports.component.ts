import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-watersports',
  templateUrl: './watersports.component.html',
  styleUrls: ['./watersports.component.scss']

})
export class WatersportsComponent {
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
          pageUrl:'best-dinner-cruise-packages-in-goa',
          img:'assets/watersports/C25.jpeg',
          name:'Dinner Cruise',
          amount:'999',
          ratingCount : '20K+',
        },
        {
          pageUrl:'best-dinner-cruise-packages-in-goa',
          img:'assets/watersports/C02.png',
          name:'Sunset Cruise',
          amount:'499',
          ratingCount : '16K+',
        },
        {
          pageUrl:'best-adventures-in-goa',
          img:'assets/watersports/A01.png',
          name:'Bungee Jumping in Goa',
          amount:'3499',
          ratingCount : '142K+',
        },
       {
          pageUrl:'best-dinner-cruise-packages-in-goa',
          img:'assets/watersports/C03.png',
          name:'Party Cruise',
          amount:'499',
          ratingCount : '16K+',
        },  
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
      name:'Watersports Combo at Mandovi River Panjim',
      location:'Panjim',
      actualAmount:'1299.00',
      amount:'999.00',
      guests:'3456',
      ratings:'4.9',
      img: [
        
        {image:'assets/watersports/W19.png', thumbImage:'assets/watersports/W19.png'},
      ],
      amenities:[
        {name:'Water Sports', icon:'surfing'},
        {name:'Boat Trips', icon:'directions_boat'},
      ],
      moreamenities:[
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'4 Hrs'},
        {icon:'location_on', text:'Panjim'},
        {icon:'face', text:'5+ yrs'},

      ]
    },
    {
      pageUrl:'',
      name:'Adventure Boat Party With Watersports Combo',
      location:'Panjim',
      actualAmount:'2499.00',
      amount:'1499.00',
      guests:'3456',
      ratings:'4.9',
      img: [    
        {image:'assets/watersports/W20.png', thumbImage:'assets/watersports/W20.png'}
       ],
      amenities:[
        {name:'Boat Party', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
        {name:'Boat Trips', icon:'directions_boat'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'4 Hrs'},
        {icon:'location_on', text:'Panjim'},
        {icon:'face', text:'5+ yrs'},

      ]
    },
    {
      pageUrl:'',
      name:'Malwan Fort Island Scuba & Watersports Combo',
      location:'Malwan',
      actualAmount:'2999.00',
      amount:'1999.00',
      guests:'1988',
      ratings:'4.9',
      img: [  
        {image:'assets/watersports/E02.png', thumbImage:'assets/watersports/E02.png', caption:'watersports'},
         ],
      amenities:[
        {name:'Scuba Diving', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Water Sports', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Boat Trips', icon:'directions_boat'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'8 Hrs'},
        {icon:'location_on', text:'Malwan'},
        {icon:'face', text:'10+ Yrs'}
      ]
    },
    {
      pageUrl:'',
      name:'Adventure Boat Party',
      location:'Panjim',
      actualAmount:'1499.00',
      amount:'999.00',
      guests:'4456',
      ratings:'4.9',
      img: [    
        {image:'assets/watersports/C25.jpeg', thumbImage:'assets/watersports/C25.jpeg'}
       ],
      amenities:[
        {name:'Boat Party', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Boat Trips', icon:'directions_boat'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'4 Hrs'},
        {icon:'location_on', text:'Panjim'},
        {icon:'face', text:'5+ yrs'},

      ]
    },   
    {
      pageUrl:'',
      name:'Lunch Boat Party With Watersports',
      location:'Panjim',
      actualAmount:'1499.00',
      amount:'999.00',
      guests:'4456',
      ratings:'4.9',
      img: [    
        {image:'assets/watersports/W12.png', thumbImage:'assets/watersports/W12.png'}
       ],
      amenities:[
        {name:'Boat Party', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Boat Trips', icon:'directions_boat'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'4 Hrs'},
        {icon:'location_on', text:'Panjim'},
        {icon:'face', text:'5+ yrs'},

      ]
    },
    {
      pageUrl:'',
      name:'Amboli Waterfall Scubadiving & Watersports Combo',
      location:'Panjim',
      actualAmount:'2999.00',
      amount:'1999.00',
      guests:'4456',
      ratings:'4.9',
      img: [    
        {image:'assets/watersports/E05.png', thumbImage:'assets/watersports/E05.png'}
       ],
      amenities:[
        {name:'Boat Party', icon:'scuba_diving'},
        {name:'Meals & Drinks', icon:'local_drink'},
        {name:'Boat Trips', icon:'directions_boat'},
      ],
      moreamenities:[
        {name:'Videos & Photos', icon:'photos'},
        {name:'Pickup & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'4 Hrs'},
        {icon:'location_on', text:'Panjim'},
        {icon:'face', text:'5+ yrs'},

      ]
    } 
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
