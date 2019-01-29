import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { ChapterOnePage } from '../chapter-one/chapter-one'
import { ChapterTwoPage } from '../chapter-two/chapter-two'
import { ChapterThreePage } from '../chapter-three/chapter-three';
import { ChapterFourPage } from '../chapter-four/chapter-four';


/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  public onButtonClicked(): void {
    this.navCtrl.push(HomePage)
  }
  chapterOne(): void {
    this.navCtrl.push(ChapterOnePage);
  }
  chapterTwo(): void {
    this.navCtrl.push(ChapterTwoPage);
  }
  chapterThree(): void {
    this.navCtrl.push(ChapterThreePage);
  }
  chapterFour(): void {
    this.navCtrl.push(ChapterFourPage);
  }
}
