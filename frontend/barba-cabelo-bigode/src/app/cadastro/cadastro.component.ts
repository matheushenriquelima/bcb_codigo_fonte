import { Component, Input, OnInit } from '@angular/core';
import Barbeiro from '../models/Barbeiro.model';
import Cliente from '../models/cliente.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Input()
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
