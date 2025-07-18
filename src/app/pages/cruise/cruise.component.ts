import { Component, HostListener } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { MainService } from 'src/app/services/main.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cruise',
  templateUrl: './cruise.component.html',
  styleUrls: ['./cruise.component.scss']
})
export class CruiseComponent {
  
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

  openWhatsApp(phoneNumber: string, msg: string) {
    // Ensure the phone number is in international format (with country code)
    const internationalNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
    const encodedMessage = encodeURIComponent(msg);
    // Open WhatsApp with the provided number
    window.location.href = `https://wa.me/${internationalNumber}?text=${encodedMessage}`;
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
      name:'Dinner Cruise',
      whatsappMsg:'Hello, I would like to enquire about DINNER CRUISE in Goa!',
      location:'Panjim Jetty',
      actualAmount:'1500.00',
      amount:'999.00',
      guests:'20k+',
      ratings:'4.8',
      img: [
        {image:'assets/watersports/C25.jpeg', thumbImage:'assets/watersports/C25.jpeg', caption:'watersports'},
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
      whatsappMsg:'Hello, I would like to enquire about PREMIUM DINNER CRUISE in Goa!',
      location:'Panjim Jetty',
      actualAmount:'1800.00',
      amount:'1099.00',
      guests:'20k+',
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
      name:'Luxury Dinner Cruise',
      whatsappMsg:'Hello, I would like to enquire about LUXURY DINNER CRUISE in Goa!',
      location:'Panjim Jetty',
      actualAmount:'4599.00',
      amount:'3999.00',
      guests:'10k+',
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
      name:'Sunset & Party Cruise',
      whatsappMsg:'Hello, I would like to enquire about SUNSET & PARTY CRUISE in Goa!',
      location:'Panjim Jetty',
      actualAmount:'700.00',
      amount:'499.00',
      guests:'16k+',
      ratings:'4.7',
      img: [
        {image:'assets/watersports/C03.png', thumbImage:'assets/watersports/C01.png', caption:'watersports'},
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
        {icon:'schedule', text:'1 Hr'},
        {icon:'photos', text:'Sightseeing'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Nauti Amigo Luxury Dinner Party Cruise',
      whatsappMsg:'Hello, I would like to enquire about NAUTI AMIGO LUXURY DINNER CRUISE in Goa!',
      location:'Panjim Jetty',
      actualAmount:'4599.00',
      amount:'3999.00',
      guests:'10k+',
      ratings:'4.9',
      img: [
        {image:'assets/watersports/C24.jpeg', thumbImage:'assets/watersports/C24.jpeg', caption:'watersports'},
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
      name:'Leomar Dinner Cruise',
      whatsappMsg:'Hello, I would like to enquire about LEOMAR DINNER CRUISE in Goa!',
      location:'Panjim Jetty',
      actualAmount:'1800.00',
      amount:'999.00',
      guests:'2k+',
      ratings:'4.7',
      img: [
        {image:'assets/watersports/C08.png', thumbImage:'assets/watersports/C08.png', caption:'watersports'},
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
        {icon:'photos', text:'Sightseeing'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Paradise Family Dinner Cruise',
      whatsappMsg:'Hello, I would like to enquire about PARADISE FAMILY DINNER CRUISE services in Goa!',
      location:'Panjim Jetty',
      actualAmount:'1500.00',
      amount:'1099.00',
      guests:'11k+',
      ratings:'3.7',
      img: [
        {image:'assets/watersports/C12.jpeg', thumbImage:'assets/watersports/C12.jpeg', caption:'watersports'},
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
      name:'Nirwana Dinner Cruise',
      whatsappMsg:'Hello, I would like to enquire about NIRWANA DINNER CRUISE in Goa!',
      location:'Panjim Jetty',
      actualAmount:'1800.00',
      amount:'1099.00',
      guests:'2k+',
      ratings:'4.7',
      img: [
        {image:'assets/watersports/C23.jpeg', thumbImage:'assets/watersports/C23.jpeg', caption:'watersports'},
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
        {icon:'photos', text:'Sightseeing'},
        {icon:'location_on', text:'Panjim'},
      ]
    },
    {
      pageUrl:'',
      name:'Princesa Dinner Cruise',
      whatsappMsg:'Hello, I would like to enquire about PRINCESA DINNER CRUISE in Goa!',
      location:'Panjim Jetty',
      actualAmount:'1900.00',
      amount:'1099.00',
      guests:'2k+',
      ratings:'4.60',
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
      name:'Swastik Family Dinner Cruise',
      whatsappMsg:'Hello, I would like to enquire about SWASTIK FAMILY DINNER CRUISE in Goa!',
      location:'Panjim Jetty',
      actualAmount:'1800.00',
      amount:'1099.00',
      guests:'2.5k+',
      ratings:'4.1',
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
      name:'Vihaan Dinner Cruise',
      whatsappMsg:'Hello, I would like to enquire about VIHAAN DINNER CRUISE in Goa!',
      location:'Panjim Jetty',
      actualAmount:'1500.00',
      amount:'1099.00',
      guests:'519+',
      ratings:'4.2',
      img: [
        {image:'assets/watersports/C17.jpeg', thumbImage:'assets/watersports/C17.jpeg', caption:'watersports'},
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
      name:'Kapitol Dinner Cruise',
      whatsappMsg:'Hello, I would like to enquire about KAPITOL DINNER CRUISE in Goa!',
      location:'Panjim Jetty',
      actualAmount:'1500.00',
      amount:'999.00',
      guests:'137',
      ratings:'3.2',
      img: [
        {image:'assets/watersports/C18.jpeg', thumbImage:'assets/watersports/C18.jpeg', caption:'watersports'},
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
      name:'Calma Dinner Cruise',
      whatsappMsg:'Hello, I would like to enquire about CALMA DINNER CRUISE in Goa!',
      location:'Panjim Jetty',
      actualAmount:'1800.00',
      amount:'1099.00',
      guests:'200+',
      ratings:'3.9',
      img: [
        {image:'assets/watersports/C15.jpeg', thumbImage:'assets/watersports/C15.jpeg', caption:'watersports'},
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
      whatsappMsg:'Hello, I would like to enquire about OHANA DINNER CRUISE in Goa!',
      location:'Panjim Jetty',
      actualAmount:'1500.00',
      amount:'999.00',
      guests:'400+',
      ratings:'3.7',
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
