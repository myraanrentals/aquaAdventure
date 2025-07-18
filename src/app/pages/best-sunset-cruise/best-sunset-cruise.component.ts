import { Component, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-best-sunset-cruise',
  templateUrl: './best-sunset-cruise.component.html',
  styleUrls: ['./best-sunset-cruise.component.scss']
})
export class BestSunsetCruiseComponent {
  
  
  
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
      name:'Sunset Cruise',
      location:'Panjim Jetty',
      actualAmount:'699.00',
      amount:'499.00',
      guests:'1075',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C08.png', thumbImage:'assets/watersports/C08.png', caption:'watersports'},
       ],
      amenities:[
        {name:'1 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'1 Hr'},
        {icon:'photos', text:'Sightseeing'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Sundown Cruise',
      location:'Panjim Jetty',
      actualAmount:'699.00',
      amount:'499.00',
      guests:'1075',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C03.png', thumbImage:'assets/watersports/C01.png', caption:'watersports'},
       ],
      amenities:[
        {name:'1 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'1 Hr'},
        {icon:'photos', text:'Sightseeing'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'River Cruise',
      location:'Panjim Jetty',
      actualAmount:'699.00',
      amount:'499.00',
      guests:'1075',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C04.png', thumbImage:'assets/watersports/C04.png', caption:'watersports'},
       ],
      amenities:[
        {name:'1 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'1 Hr'},
        {icon:'photos', text:'Sightseeing'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Paradise Sunset Cruise',
      location:'Panjim Jetty',
      actualAmount:'699.00',
      amount:'499.00',
      guests:'2475',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C21.jpeg', thumbImage:'assets/watersports/C21.jpeg', caption:'watersports'},
       ],
      amenities:[
        {name:'1 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'1 Hr'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Calma Sunset Cruise',
      location:'Panjim Jetty',
      actualAmount:'599.00',
      amount:'399.00',
      guests:'2475',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C15.jpeg', thumbImage:'assets/watersports/C15.jpeg', caption:'watersports'},
       ],
      amenities:[
        {name:'1 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'1 Hr'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Kapitol Sunset Cruise',
      location:'Panjim Jetty',
      actualAmount:'599.00',
      amount:'399.00',
      guests:'2475',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C18.jpeg', thumbImage:'assets/watersports/C18.jpeg', caption:'watersports'},
       ],
      amenities:[
        {name:'1 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'1 Hr'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Vihaan Sunset Cruise',
      location:'Panjim Jetty',
      actualAmount:'699.00',
      amount:'499.00',
      guests:'2475',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C17.jpeg', thumbImage:'assets/watersports/C17.jpeg', caption:'watersports'},
       ],
      amenities:[
        {name:'1 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'1 Hr'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Evening Cruise',
      location:'Panjim Jetty',
      actualAmount:'699.00',
      amount:'499.00',
      guests:'975',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C20.jpeg', thumbImage:'assets/watersports/C20.jpeg', caption:'watersports'},
       ],
      amenities:[
        {name:'1 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'1 Hr'},
        {icon:'photos', text:'Sightseeing'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Party Cruise',
      location:'Panjim Jetty',
      actualAmount:'699.00',
      amount:'499.00',
      guests:'975',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C19.jpeg', thumbImage:'assets/watersports/C19.jpeg', caption:'watersports'},
       ],
      amenities:[
        {name:'1 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'1 Hr'},
        {icon:'photos', text:'Sightseeing'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Night Party Cruise in Goa',
      location:'Panjim Jetty',
      actualAmount:'899.00',
      amount:'499.00',
      guests:'876',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C16.jpg', thumbImage:'assets/watersports/C16.jpg', caption:'watersports'},
       ],
      amenities:[
        {name:'1 Hour Cruising', icon:'scuba_diving'},
        {name:'Soft Drinks or Beers', icon:'local_drink'},
        {name:'Music & Dance', icon:'surfing'},
      ],
      moreamenities:[
        {name:'Sightseeing', icon:'photos'},
        {name:'Delicious Food', icon:'directions_boat'},
        {name:'Hotel Pick-Up & Drop', icon:'transfer_within_a_station'},
      ],
      features:[
        {icon:'schedule', text:'1 Hr'},
        {icon:'photos', text:'Sightseeing'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Luxury Dinner Cruise [VIP]',
      location:'Panjim Jetty',
      actualAmount:'2999.00',
      amount:'2199.00',
      guests:'2564',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C10.png', thumbImage:'assets/watersports/C10.png', caption:'watersports'},
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
        {icon:'schedule', text:'3 Hr'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Premium Dinner Cruise',
      location:'Panjim Jetty',
      actualAmount:'2499.00',
      amount:'1999.00',
      guests:'3475',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C06.png', thumbImage:'assets/watersports/C06.png', caption:'watersports'},
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
        {icon:'schedule', text:'3 Hr'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Family Dinner Cruise',
      location:'Panjim Jetty',
      actualAmount:'1499.00',
      amount:'1349.00',
      guests:'3475',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C11.png', thumbImage:'assets/watersports/C11.png', caption:'watersports'},
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
        {icon:'schedule', text:'3 Hr'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Candel Light Dinner Cruise',
      location:'Panjim Jetty',
      actualAmount:'2499.00',
      amount:'1999.00',
      guests:'2475',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C03.png', thumbImage:'assets/watersports/C03.png', caption:'watersports'},
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
        {icon:'schedule', text:'3 Hr'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'location_on', text:'Panjim'},
      ]
    },   
    {
      pageUrl:'',
      name:'Princessa Dinner Cruise',
      location:'Panjim Jetty',
      actualAmount:'1499.00',
      amount:'1199.00',
      guests:'2475',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C14.jpeg', thumbImage:'assets/watersports/C14.jpeg', caption:'watersports'},
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
        {icon:'schedule', text:'3 Hr'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Swastik Dinner Cruise',
      location:'Panjim Jetty',
      actualAmount:'1499.00',
      amount:'1199.00',
      guests:'2475',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C13.jfif', thumbImage:'assets/watersports/C13.jfif', caption:'watersports'},
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
        {icon:'schedule', text:'3 Hr'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'location_on', text:'Panjim'},
      ]
    },  
    {
      pageUrl:'',
      name:'Ohana Dinner Cruise',
      location:'Panjim Jetty',
      actualAmount:'1200.00',
      amount:'999.00',
      guests:'2475',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C16.jpg', thumbImage:'assets/watersports/C16.jpg', caption:'watersports'},
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
        {icon:'schedule', text:'3 Hr'},
        {icon:'lunch_dining', text:'Meals'},
        {icon:'location_on', text:'Panjim'},
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
