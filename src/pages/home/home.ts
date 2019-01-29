import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { IndexPage } from '../index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
public onButtonClicked(): void {
  let modal= this.modalCtrl.create(IndexPage);
  modal.present();
}
}
