import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'video-list',
  template: `  
        <div class="row">       
            <div class="col-md-8 video-container">            
                    <iframe id ="yPlayer"  src ="" frameborder="0" allowfullscreen></iframe>                  
            </div>      
            <div class="col-md-3 old-event"> 
                <div *ngFor="let vid of videoIds">               
                    <img class="p-3 bg-white rounded" id = "eventImage" src = {{vid.snippet.thumbnails.high.url}} alt={{vid.snippet.resourceId.videoId}} (click) = "videoId($event)">
                    <p> {{vid.snippet.title}} </p>
                    <p> {{vid.snippet.publishedAt}}</p>
                </div>
            </div>
      </div>
  `,
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent

          {  
              videoIds = [];
              videoUrl: string;
              vid: boolean;
             
                        constructor(private htp: HttpClient)
                        {
                            let uri = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL2LL1RBheh231bVdFPsLcZ15lUEUjsF4X&fields=items&key=AIzaSyBY_txEgyq_QbwvfVodGxAJgMoIV5yheyE";
                              htp.get(uri,{ observe:"body" }).subscribe( playlist =>
                                        {            
                                          this.videoIds = playlist['items'];
                                          this.videoUrl = "http://www.youtube.com/embed/"+ playlist['items']['0']['snippet']['resourceId']['videoId'];
                                          console.log(this.videoUrl);
                                          this.playVideo();
                                       
                                        })
                        }
                        videoId($event)
                        {
                          this.vid = true;
                             if($event.srcElement.id == 'eventImage')
                                     {
                                      
                                            this.videoUrl = "http://www.youtube.com/embed/"+ $event.srcElement.alt;
                                            // document.getElementById("yPlayer").setAttribute("src", this.videoUrl)
                                            this.playVideo();
                                     }                              
                                 
                       }
                       playVideo(){

                                  if(!(this.videoUrl == null))
                                  {
                                               
                                                  let playerAttr = document.getElementById("yPlayer");
                                                  Object.assign
                                                  (playerAttr, 
                                                      {
                                                          src: this.videoUrl,
                                                          // modestbranding: 1,
                                                          // autoplay: 1,
                                                          // rel: 1,
                                                          // start: 5
                                                      }
                                                  );
                                                  playerAttr.scrollIntoView();  
                                                  
                                  }
                       }
            }



