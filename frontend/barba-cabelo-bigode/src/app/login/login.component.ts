import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isBarbeiro = false;

  constructor() { }

  ngOnInit() {
  }

  setIsBarbeiro() {
    this.isBarbeiro = !this.isBarbeiro;
  }
}
