import {Injectable} from '@angular/core';

declare let require: any;
const RemoteInstance = require('directus-sdk-javascript/remote');

export interface DataObjectMeta {
  Draft: number;
  Published: number;
  table: string;
  total: number;
  total_entries: number;
  type: string;
}


export interface DataObjectStories {
  created_date: Date;
  description: string;
  id: number;
  name: string;
  sort: number;
  status: number;
  icon: any
}

export interface DataObjectStories {
  data: Array<DataObjectStories>;
  meta: DataObjectMeta;
}

@Injectable()
export class DataProvider {

  public static TABLE_STORIES = 'stories';

  public api: any;

  connect() {
    this.api = new RemoteInstance({
      url: 'http://backend.app-evangelist.com/api/1.1/'
    });
  }

  /**
   * return apps
   * @return {Promise<any>}
   */
  getApps(): Promise<DataObjectStories> {
    return this.getItems(DataProvider.TABLE_STORIES);
  }

  private getItems(table: string): Promise<DataObjectStories> {
    return this.api.getItems(table)
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));
  }


}
