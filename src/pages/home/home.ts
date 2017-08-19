import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

declare let require: any;
const RemoteInstance = require('directus-sdk-javascript/remote');


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public client;
  constructor(public navCtrl: NavController) {
    this.client = new RemoteInstance({
      url: 'http://backend.app-evangelist.com/api/1.1/'
    });
  }

  ionViewDidLoad() {
    this.client.getItems('apps')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

}
