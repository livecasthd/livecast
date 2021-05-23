import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from  '@angular/router';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { cou } from './course.services';
import { VideoListComponent } from './video-list/video-list.component';
import { ListTableComponent } from './list-table/list-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LiveEventsComponent } from './live-events/live-events.component';
import { HttpClientModule } from '@angular/common/http';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { YtPlayerAngularModule } from 'yt-player-angular';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    ListTableComponent,
    NavbarComponent,
    LiveEventsComponent,
    EnquiryComponent,
    IntroductionComponent
 
    
  ],
  imports: [
    BrowserModule,
    YtPlayerAngularModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([

      { path: '', component: IntroductionComponent},
      { path: 'introduction', component: IntroductionComponent},
      { path: 'App-root', component: AppComponent},
      { path: 'Video-List', component: VideoListComponent},
      { path: 'live-events', component: LiveEventsComponent},
      { path: 'enquiry', component: EnquiryComponent}
    ])
    
    
  ],
  providers: [cou],
  bootstrap: [AppComponent]
})
export class AppModule { }
