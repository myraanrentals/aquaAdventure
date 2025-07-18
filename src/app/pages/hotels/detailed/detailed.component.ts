import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit{

  navOpen:boolean = false;
  data:any;
  contentHeight:any = "240px";
  currentRoute: string = '';
  handleReadMore:boolean = true;
  currentCompleteRoute:string = '';
  showDescriptionLuxury:boolean=false;
  showDescriptionFamily:boolean=false;
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
  hotelsOffers: any[] =[
    {

      heading:"Related Activites",
      description:"Experience actual meaning of awesome",
      watersports:[
        {
          pageUrl:'scuba-diving-in-goa',
          img:'W03.png', name:'Fun Scuba Diving', location:'North Goa', amount:'1999',
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
          pageUrl:'dinner-cruise-in-goa',
          img:'C07.png', name:'Dinner on Cruise with Family', location:'North Goa', amount:'1800',
          discountedamt:'1299',
          ratingCount : '1451 Reviews',
          features:[
            {icon:'schedule', text:'3H'},
            {icon:'lunch_dining', text:'Meals & Drinks'},
            {icon:'follow_the_signs', text:'Guide'},
            // {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          pageUrl:'/scuba-diving-in-goa',
          img:'04.png', name:'Grand Island Trip', location:'North Goa', amount:'1000',
          discountedamt:'800',
          ratingCount : '451 Reviews',
          features:[
            {icon:'schedule', text:'4H'},
            {icon:'lunch_dining', text:'Meals'},
            {icon:'follow_the_signs', text:'Guide'},
            // {icon:'local_taxi', text:'Transport'},
          ]
        },
        {
          pageUrl:'/advance-water-sports-in-goa',
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
          pageUrl:'/sunset-cruise-in-goa',
          img:'C02.png', name:'Sunset Cruise with Loved Once', location:'North Goa', amount:'1000',
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
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  constructor(private _service:MainService, private activatedRoute: ActivatedRoute, private router: Router,private titleService: Title){


    this._service.getJsonData().
    subscribe((res:any)=>
    {
      this.currentCompleteRoute = router.url;
      if (this.currentCompleteRoute.includes('?')) {
        let parts: string[] = this.currentCompleteRoute.split('?');
        this.currentRoute = parts.slice(0, -1).join('');
      }else{
        this.currentRoute = router.url;
      }
      console.log(this.currentRoute);
      this.data = res.filter((m:any) => m.id === this.currentRoute);
      this.data= this.data[0];
      console.log(this.data);
      this.titleService.setTitle(`${this.data.detailedTitle}`);

    });



  }
  goToRelatedPages(hotelName: string){
    console.log(hotelName);
    this.router.navigate([hotelName]);
  }
  showBookingDetails:boolean = false;


    backTolist(){
      // this._service.backToList.next('true');
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    }
}
