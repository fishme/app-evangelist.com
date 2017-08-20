import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import {DataProvider, DataObjectItemStories, DataObjectMeta} from '../../providers/DataProvider';

import * as _ from 'lodash';
/**
 * Generated class for the StoriesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'stories'
})
@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html',
})
export class StoriesPage {

  /**
   * collection of story items
   * @type Array<DataObjectStories>
   */
  public items:Array<any>;

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
      this.items = _.chunk(response.data,4);
      this.itemMeta = response.meta;
      console.log(this.items);
    });

  }

}
