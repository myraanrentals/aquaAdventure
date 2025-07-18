import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuList:any =[
    {icon:'home',label:'Home',url:""},
   // {icon:'directions_car',label:'My Booking'},
   // {icon:'task_alt',label:'Doc Verification'},
   // {icon:'article',label:'Terms'},
    {icon:'live_help',label:'Need Help',url:""},
   //{icon:'hotel_class',label:'Rate us'},
   // {icon:'power_settings_new',label:'Logout'}
  ]
}
