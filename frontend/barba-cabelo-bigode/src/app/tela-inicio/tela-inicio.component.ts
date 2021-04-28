import { Component, OnInit } from '@angular/core';
import Barbeiro from '../models/Barbeiro.model';
import Cliente from '../models/cliente.model';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css']
})
export class TelaInicioComponent implements OnInit {

  isBarbeiro = false;

  cliente: Cliente = new Cliente();

  barbeiro: Barbeiro = new Barbeiro();

  constructor() { }

  ngOnInit() {
  }

  setIsBarbeiro() {
    this.isBarbeiro = !this.isBarbeiro;
  }

}
