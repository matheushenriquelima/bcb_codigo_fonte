import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isBarbeiro = false;

  constructor( private router: Router) { }

  ngOnInit() {
  }

  setIsBarbeiro() {
    this.isBarbeiro = !this.isBarbeiro;
  }
  onClick(){
    this.router.navigate(['/barbeiros-perto']);
  }
}
