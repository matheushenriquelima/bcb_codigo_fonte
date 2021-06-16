import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  @Input() dataEHorario: string;
  @Input() LocalAtendimento: string;

  constructor(   private modalController:ModalController ,private router: Router 
    ) { }

  ngOnInit() {
  }
  onClick(){
    this.router.navigate(['/barbeiros-perto']);
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
