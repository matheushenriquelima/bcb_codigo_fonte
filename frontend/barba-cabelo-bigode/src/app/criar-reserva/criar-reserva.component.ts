import { Component, OnInit } from '@angular/core';
import Barbeiro from '../models/Barbeiro.model';

@Component({
  selector: 'app-criar-reserva',
  templateUrl: './criar-reserva.component.html',
  styleUrls: ['./criar-reserva.component.css'],
})
export class CriarReservaComponent implements OnInit {

  barbeiro: Barbeiro = new Barbeiro();

  constructor() { }

  ngOnInit() {
    this.buscarBarbeiro();
  }

  buscarBarbeiro(){
    this.barbeiro.endereco = 'Rua Joao Pessoa, Centro';
    this.barbeiro.nome = 'Zézinho Barbeiro';
  }

}
