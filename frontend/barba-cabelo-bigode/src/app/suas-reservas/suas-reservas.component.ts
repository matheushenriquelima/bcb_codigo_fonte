import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suas-reservas',
  templateUrl: './suas-reservas.component.html',
  styleUrls: ['./suas-reservas.component.css']
})
export class SuasReservasComponent implements OnInit {

  reservas = [{nome:"zezinho" , 
  data:"21/12/2021 - 09:00",
  tipoDeAtendimento: "Atendimento no Locals"},
  {nome:"Joseph Barbeiro" , 
  data:"21/12/2021 - 09:00",
  tipoDeAtendimento: "Atendimento a domicilio"}]

  constructor(   private router: Router
    ) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    if(ev.detail.value == "Listar"){
      this.router.navigate(['/barbeiros-perto']);
    }
    if(ev.detail.value == "Editar"){
      this.router.navigate(['/editar']);
    }
    if(ev.detail.value == "Reservas"){
      this.router.navigate(['/suas-reservas']);
    }
  }
}
