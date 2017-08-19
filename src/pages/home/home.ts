import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {DataProvider, DataObjectStories, DataObjectMeta} from '../../providers/DataProvider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  /**
   * collection of story items
   * @type Array<DataObjectStories>
   */
  public items:Array<DataObjectStories>;

  /**
   * collection of meta information from my stories
   * @type DataObjectMeta
   */
  public itemMeta:DataObjectMeta;

  /**
   * domain
   * @todo remove
   * @type {string}
   */
  public domain:string = 'http://backend.app-evangelist.com';

  /**
   * constructor
   * @param {NavController} navCtrl
   * @param {DataProvider} DataProvider
   */
  constructor(public navCtrl: NavController, public DataProvider:DataProvider) {
    this.DataProvider.connect();
  }

  /**
   * ionic is done with loading
   */
  ionViewDidLoad() {
    this.DataProvider.getApps().then(response => {
      this.items = response.data;
      this.itemMeta = response.meta;
      console.log(this.items);
    });

  }

}
