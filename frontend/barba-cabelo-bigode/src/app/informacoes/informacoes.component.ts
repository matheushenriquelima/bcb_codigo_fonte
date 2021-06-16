import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent implements OnInit {

  isBarbeiro = false;

  constructor(   private router: Router
    ) { }

  ngOnInit() {
  }

  setIsBarbeiro() {
    this.isBarbeiro = !this.isBarbeiro;
  }
  segmentChanged(ev: any) {
    if(ev.detail.value = "Listar"){
      this.router.navigate(['/barbeiros-perto']);
    }
    if(ev.detail.value = "Editar"){
      this.router.navigate(['/editar']);
    }
    if(ev.detail.value = "Reservas"){
      this.router.navigate(['/suas-reservas']);
    }
  }
}
