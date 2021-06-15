import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent implements OnInit {

  isBarbeiro = false;

  constructor() { }

  ngOnInit() {
  }

  setIsBarbeiro() {
    this.isBarbeiro = !this.isBarbeiro;
  }
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
