import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-barbeiros-perto',
  templateUrl: './barbeiros-perto.component.html',
  styleUrls: ['./barbeiros-perto.component.css']
})
export class BarbeirosPertoComponent implements OnInit {

  barbeiros = [{nome:"zezinho" , 
  localizacao:"Rua Elizângela Silva, 574. Arapiraca, AL",
  distancia:"2km"}, {nome:"zezinho" , 
  localizacao:"Rua Elizângela Silva, 574. Arapiraca, AL",
  distancia:"2km"}]

  constructor(               private router: Router

    ) { }

  ngOnInit() {
  }

  segmentChanged(ev: any) {
    console.log(ev)
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
