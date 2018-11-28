import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IVideo } from './video';
import { Videoservices } from './videoservices';
import { IUser } from '../login/user';
import { AuthguardGuard } from '../authguard.guard';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideoComponent implements OnInit {

  generes = [
    { id: 1, name: 'Horror' },
    { id: 2, name: 'Science Fiction' },
    { id: 3, name: 'Drama' },
    { id: 4, name: 'Adventure' },
    { id: 5, name: 'Action' },
    { id: 6, name: 'Comedy' },
    { id: 7, name: 'Crime & Gangster' },
    { id: 8, name: 'Historical' },
    { id: 9, name: 'Musicals' },
    { id: 10, name: 'War' },
    { id: 11, name: 'Westerns' },
  ];

  ratings = [
    { id: 1, name: '1 Star' },
    { id: 2, name: '2 Stars' },
    { id: 3, name: '3 Stars' },
    { id: 4, name: '4 Stars' },
    { id: 5, name: '5 Stars' }
  ];

  statuslist = [
    { id: 1, name: 'Available' },
    { id: 2, name: 'Unavailable' }
  ];

  private id: number = 0 ;
  private title: string = '';
  private runningTime: string = '';
  private genre: string = '';
  private rating: string = '';
  private director: string = '';
  private status: string = '';

  videoList: IVideo[];
  
  constructor(private modalService: NgbModal,
    private videoService: Videoservices,
    private autoguard: AuthguardGuard ) { }

  ngOnInit() {
    this.getVideoList();
  }

  getVideoList() {
    this.videoService.getVideo().
    subscribe( p => {
      this.videoList = p;
    }, error => {
      console.log('error: coouldnot found !');
    });
  }
  onOpenModal(content, data?) {
    this.modalService.open(content);
    data != null ? this.onDataBind(data) : this.onClear();
  }
  onSave() {
      if (this.id == 0){
      this.videoService.postVideo(this.getDataBind())
      .subscribe(p => {
        this.getVideoList();
        this.modalService.dismissAll();
      }, error => { console.log(error); } );
    }
    else 
    {
      this.videoService.putVideo(this.getDataBind())
      .subscribe(p => {
        this.getVideoList();
        this.modalService.dismissAll();
      }, error => { console.log(error); } );
    }
  }
 
  onDelete(id) {
    this.videoService.deleteVideo(id)
    .subscribe(p => {
      this.getVideoList();
    }, error => { console.log(error); } );
  }

  onDataBind(data) {
    this.title = data.title;
    this.id = data.id;
    this.runningTime = data.runningTime ;
    this.genre = data.genre;
    this.rating = data.rating;
    this.director = data.director;
    this.status = data.status;
  }

  getDataBind() : IVideo {
    return {
      id: this.id == 0 ? this.videoList.length + 1 : this.id,
      title: this.title,
      runningTime: this.runningTime,
      genre: this.genre,
      rating: this.rating,
      director: this.director,
      status: this.status
    }
  }

  onClear(){
    this.title = '';
    this.id = 0;
    this.runningTime = '';
    this.genre = '';
    this.rating = '';
    this.director = '';
    this.status = '';
  }
  
}
