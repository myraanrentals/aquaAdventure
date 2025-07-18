import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  tabName:string ='';
  activeTabIndex:number=0;
  constructor(private _route:ActivatedRoute){

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

  ngOnInit(){
    this._route.params.subscribe((params:any)=>{
      if(params.data == 'booking'){
        this.activeTabIndex = 1;
      }
    })
  }
}
