import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChapterThreePage } from '../chapter-three/chapter-three';
import { ChapterOnePage } from '../chapter-one/chapter-one';


/**
 * Generated class for the ChapterTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter-two',
  templateUrl: 'chapter-two.html',
})
export class ChapterTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterTwoPage');
  }
  chapterOne(): void {
    this.navCtrl.push(ChapterOnePage);
  }
  chapterThree(): void {
    this.navCtrl.push(ChapterThreePage);
  }
}
