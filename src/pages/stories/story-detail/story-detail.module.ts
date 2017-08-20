import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoryDetailPage } from './story-detail';

@NgModule({
  declarations: [
    StoryDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StoryDetailPage),
  ],
})
export class StoryDetailPageModule {}
