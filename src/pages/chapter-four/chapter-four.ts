import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ChapterThreePage } from '../chapter-three/chapter-three';

/**
 * Generated class for the ChapterFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter-four',
  templateUrl: 'chapter-four.html',
})
export class ChapterFourPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterFourPage');
  }
  chapterThree(): void {
    this.navCtrl.push(ChapterThreePage);
  }
  onButtonClicked(): void {
    this.navCtrl.push(HomePage);
  }
}
