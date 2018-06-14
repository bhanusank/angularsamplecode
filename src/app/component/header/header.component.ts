import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 @Input('show') show:boolean=true;
  constructor() { }
  username:any='';
  ngOnInit() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username=currentUser.usernameOrEmail;
    console.log(this.username);
  }

}
