import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { ChapterFourPage } from '../chapter-four/chapter-four';
import { ChapterTwoPage } from '../chapter-two/chapter-two';

/**
 * Generated class for the ChapterThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter-three',
  templateUrl: 'chapter-three.html',
})
export class ChapterThreePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterThreePage');
  }
  chapterTwo(): void {
  this.navCtrl.push(ChapterTwoPage);
}
  chapterFour(): void {
    this.navCtrl.push(ChapterFourPage);
  }
};
