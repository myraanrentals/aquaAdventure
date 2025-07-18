import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { filter } from 'rxjs';
import { RippleGlobalOptions } from '@angular/material/core';

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
  animation: {
    enterDuration: 0,
    exitDuration: 0
  }
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent{

  allData: any[]=[];
  data:any;
  itemIdToDisplay: number = 1;

  constructor(private router: Router, private route: ActivatedRoute){

  }

  callPhoneNumber(phoneNumber: string) {
    window.location.href = `tel:${phoneNumber}`;
  }


  redirectToHome() {
    // Navigate to the home component
    this.router.navigate(['/']);
  }

  goToDetailedPage(hotelName: string, activityId:number){
    this.router.navigate([hotelName], { relativeTo: this.route });
  }

  goToService(link: string){

    this.router.navigate([link], {relativeTo: this.route})
  }

  name:string = 'Folks';
  location:string = 'Goa Bound? Unleash the Adventure!';

  navOpen:boolean = false;
  hotelsOffers: any[] =[
    {

      heading:"Scuba & Water Sports Goa",
      description:"Dive into thrill, explore depths, and ride waves of excitement.",
      watersports:[
        {
          pageUrl:'best-water-sports-packages-in-goa',
          img:'W13.png',
          name:'Scuba & Water Sports Combo',
          location:'North/South',
          amount:'1999',
          discountedamt:'1699',
          ratingCount : '3456 Reviews',
          features:[
            {icon:'schedule', text:'6 Hrs'},
            {icon:'person_celebrate', text:'Guide'},
            {icon:'settings_accessibility', text:'10+ Yrs'}
          ]
        },
        {
          pageUrl:'best-water-sports-packages-in-goa',
          img:'05.png',
          name:'Advanced Water Sports Combo',
          location:'North/South Goa',
          amount:'1999',
          discountedamt:'1499',
          ratingCount : '1988 Reviews',
          features:[
            {icon:'schedule', text:'6H'},
            {icon:'person_celebrate', text:'Guide'},
            {icon:'settings_accessibility', text:'8+ Yrs'}
          ]
        },
        {
          pageUrl:'best-water-sports-packages-in-goa',
          img:'W12.png',
          name:'Basic Water Sports Combo',
          location:'North/South',
          amount:'1500',
          discountedamt:'1149',
          ratingCount : '2338 Reviews',
          features:[
            {icon:'schedule', text:'6H'},
            {icon:'person_celebrate', text:'Guide'},
            {icon:'settings_accessibility', text:'8+ Yrs'}
          ]
        },

        {
          pageUrl:'best-water-sports-packages-in-goa',
          img:'E05.png',
          name:'Scuba & Grand Island Combo',
          location:'Grand Island',
          amount:'1499',
          discountedamt:'1199',
          ratingCount : '453 Reviews',
          features:[
            {icon:'schedule', text:'6H'},
            {icon:'person_celebrate', text:'Guide'},
            {icon:'settings_accessibility', text:'10+ Yrs'}
          ]
        },

        {
          pageUrl:'best-water-sports-packages-in-goa',
          img:'E01.png',
          name:'Parasailing',
          location:'North/South Goa',
          amount:'1100',
          discountedamt:'999',
          ratingCount : '678 Reviews',
          features:[
            {icon:'schedule', text:'3H'},
            {icon:'person_celebrate', text:'Guide'},
            {icon:'settings_accessibility', text:'8+ Yrs'}
          ]
        },
        {
          pageUrl:'best-water-sports-packages-in-goa',
          img:'W08.png',
          name:'Jetski',
          location:'North/South Goa',
          amount:'799',
          discountedamt:'499',
          ratingCount : '1752 Reviews',
          features:[
            {icon:'schedule', text:'3H'},
            {icon:'person_celebrate', text:'Guide'},
            {icon:'settings_accessibility', text:'8+ Yrs'}
          ]
        }
              ]
    },
    {
      heading:"Cruising And Yatch in Goa",
      description:"Sail through Goa's waters for an unforgettable yachting adventure and cruising.",
      watersports:[
        {
          pageUrl:'best-dinner-cruise-packages-in-goa',
          img:'C06.png',
          name:'Dinner Cruise',
          location:'North Goa',
          amount:'1499',
          discountedamt:'1199',
          ratingCount : '451 Reviews',
          features:[
            {icon:'schedule', text:'3H'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'location_on', text:'Panjim'}
            //{icon:'person_celebrate', text:'Live DJ'},

          ]
        },
        {
          pageUrl:'best-dinner-cruise-packages-in-goa',
          img:'C10.png',
          name:'Luxury Dinner Cruise',
          location:'North Goa',
          amount:'2999',
          discountedamt:'2199',
          ratingCount : '894 Reviews',
          features:[
            {icon:'schedule', text:'3H'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'location_on', text:'Panjim'}
            //{icon:'person_celebrate', text:'Live DJ'},

          ]
        },
        {
          pageUrl:'best-dinner-cruise-packages-in-goa',
          img:'C03.png',
          name:'Family Dinner Cruise',
          location:'North Goa',
          amount:'1499',
          discountedamt:'1349',
          ratingCount : '655 Reviews',
          features:[
            {icon:'schedule', text:'3H'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'location_on', text:'Panjim'}
            //{icon:'person_celebrate', text:'Live DJ'},

          ]
        },
        {
          pageUrl:'best-dinner-cruise-packages-in-goa',
          img:'C11.png',
          name:'Candle Light Dinner Cruise',
          location:'North Goa',
          amount:'2499',
          discountedamt:'1999',
          ratingCount : '648 Reviews',
          features:[
            {icon:'schedule', text:'3H'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'location_on', text:'Panjim'}
            //{icon:'person_celebrate', text:'Live DJ'},

          ]
        },
        {
          pageUrl:'best-dinner-cruise-packages-in-goa',
          img:'C08.png',
          name:'Sunset Cruise',
          location:'North Goa',
          amount:'699',
          discountedamt:'499',
          ratingCount : '451 Reviews',
          features:[
            {icon:'schedule', text:'1H'},
           // {icon:'lunch_dining', text:'Meals & Drinks'},
            {icon:'location_on', text:'Panjim'},
            {icon:'person_celebrate', text:'Live DJ'},

          ]
        },
        {
          pageUrl:'best-dinner-cruise-packages-in-goa',
          img:'C06.png',
          name:'Party Cruise',
          location:'North Goa',
          amount:'699',
          discountedamt:'499',
          ratingCount : '451 Reviews',
          features:[
            {icon:'schedule', text:'1H'},
            //{icon:'lunch_dining', text:'Meals & Drinks'},
            {icon:'location_on', text:'Panjim'},
            {icon:'person_celebrate', text:'Live DJ'},

          ]
        },
        {
          pageUrl:'yatch-in-goa',
          img:'C04.png',
          name:'Private Yatch',
          location:'North Goa',
          amount:'25000',
          discountedamt:'15000',
          ratingCount : '451 Reviews',
          features:[
            {icon:'schedule', text:'2H'},
            //{icon:'lunch_dining', text:'Meals & Drinks'},
            {icon:'location_on', text:'Panjim'},
            {icon:'person_celebrate', text:'Music'},

          ]
        }

      ]
    },
    {
      heading:"Exclusive Deals",
      description:"Grab exiting deals on your holiday bookings",
      watersports:[
        {
          pageUrl:'best-scuba-diving-packages-in-goa',
          img:'W03.png', name:'Fun Scuba Diving', location:'North Goa', amount:'1499',
          discountedamt:'1199',
          ratingCount : '326 Reviews',
          features:[
            {icon:'schedule', text:'6H'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            // {icon:'local_taxi', text:'Transport'}
          ]
        },
        {
          pageUrl:'best-dinner-cruise-packages-in-goa',
          img:'C07.png', name:'Dinner on Cruise with Family', location:'North Goa', amount:'1499',
          discountedamt:'1199',
          ratingCount : '1451 Reviews',
          features:[
            {icon:'schedule', text:'3H'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            // {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          pageUrl:'/best-scuba-diving-packages-in-goa',
          img:'04.png', name:'Grand Island Trip', location:'North Goa', amount:'1499',
          discountedamt:'999',
          ratingCount : '451 Reviews',
          features:[
            {icon:'schedule', text:'4H'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            // {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          pageUrl:'/best-water-sports-packages-in-goa',
          img:'W17.png', name:'Advance Water Sports', location:'South Goa', amount:'1999',
          discountedamt:'1499',
          ratingCount : '1232 Reviews',
          features:[
            {icon:'schedule', text:'6H'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            // {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          pageUrl:'/best-dinner-cruise-packages-in-goa',
          img:'C02.png', name:'Sunset Cruise with Loved Once', location:'North Goa', amount:'699',
          discountedamt:'499',
          ratingCount : '1324 Reviews',
          features:[
            {icon:'schedule', text:'1H'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            // {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          pageUrl:'yatch-in-goa',
          img:'C04.png', name:'Exclusive Yatch Experience', location:'North Goa', amount:'20000',
          discountedamt:'15000',
          ratingCount : '412 Reviews',
          features:[
            {icon:'schedule', text:'2H'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            // {icon:'local_taxi', text:'Transport'},
          ]
        }
      ]
    }
  ];

  imageObject: any[] =[
    {
      image: 'assets/watersports/01.png',
      thumbImage: 'assets/watersports/01.png',
      alt: 'Superb Hotel',
      //title: 'Superb Hotel'
    },
    {
      image: 'assets/watersports/02.png',
      thumbImage: 'assets/watersports/02.png',
      alt: 'Superb Hotel',
      //title: 'Superb Hotel'
    },
    {
      image: 'assets/watersports/03.png',
      thumbImage: 'assets/watersports/03.png',
      alt: 'Superb Hotel',
      //title: 'Superb Hotel'
    }
  ]
  services: any[]=[
    {icon:'surfing', name:'Water Sports', link:'best-water-sports-packages-in-goa'},
    {icon:'directions_boat', name:'Cruises', link:'best-dinner-cruise-packages-in-goa'},
    {icon:'scuba_diving', name:'Adventures', link:'best-adventures-in-goa'},
    {icon:'surfing', name:'Scuba Dive', link:'best-scuba-diving-packages-in-goa'},

  ];


}



