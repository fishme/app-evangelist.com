/**
 * is responsible for the connection between our app and the backend
 * @author David Hohl <david.hohl@app-evangelist.com>
 *
 * @license
 * Copyright (c) 2017 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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

export interface DataObjectItemStories {
  created_date: Date;
  description: string;
  category: string;
  id: number;
  name: string;
  sort: number;
  status: number;
  icon: any
}

export interface DataObjectItemNavigation {
  id: number;
  name: string;
  segment: string;
  icon: string;
  slug: string;
  sort: number;
  status: number;
}

export interface DataObjectStories {
  data: Array<DataObjectItemStories>;
  meta: DataObjectMeta;
}

export interface DataObjectNavigation {
  data: Array<DataObjectItemNavigation>;
  meta: DataObjectMeta;
}

@Injectable()
export class DataProvider {

  /**
   * stories table name
   * @type {string}
   */
  public static TABLE_STORIES = 'stories';

  /**
   * navigation table name
   * @type {string}
   */
  public static TABLE_NAVIGATION = 'navigation';

  /**
   * instance for connection to the backend of app-evangelist.com
   */
  private api: any;

  /**
   * connect to my crazy cool backend
   */
  connect() {
    this.api = new RemoteInstance({
      url: 'http://backend.app-evangelist.com/api/1.1/'
    });
  }

  /**
   * return all our crazy stories about the bullshit in the world, return all, maybe in the future we need also a filter
   * @todo add filter only necessary if we have +100 stories
   * @return {Promise<any>}
   */
  getApps(): Promise<DataObjectStories> {
    return this.getItems(DataProvider.TABLE_STORIES);
  }

  /**
   * return our cool monster navigation, we would like everything of this shit so we don't need a <where>
   * @return {Promise<DataObjectNavigation>}
   */
  getNavigation(): Promise<DataObjectNavigation> {
    return this.getItems(DataProvider.TABLE_NAVIGATION);
  }

  /**
   * return content by table
   * @param {string} table
   * @return {Promise<any>}
   */
  private getItems(table: string): Promise<DataObjectNavigation|DataObjectStories> {
    return this.api.getItems(table)
      .then(res => {
        return res;
      })
      .catch(err => console.log(err));
  }


}
