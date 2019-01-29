import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ChapterTwoPage } from '../chapter-two/chapter-two';
import { IndexPage } from '../index';
/**
 * Generated class for the ChapterOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter-one',
  templateUrl: 'chapter-one.html',
})
export class ChapterOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChapterOnePage');
  }
  chapterTwo(): void {
    this.navCtrl.push(ChapterTwoPage);
  }
  public onButtonClicked(): void {
    this.navCtrl.push(IndexPage)
  }
}
