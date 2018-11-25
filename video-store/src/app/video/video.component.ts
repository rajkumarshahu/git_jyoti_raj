import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IVideo } from './video';
import { Videoservices } from './videoservices';

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

  status = [
    { id: 1, name: 'Available' },
    { id: 2, name: 'Unavailable' }
  ];


  videoList: IVideo[];
  videoModel: IVideo  = this.intializeProperty();

  constructor(private modalService: NgbModal,
    private videoService: Videoservices ) { }

  ngOnInit() {
    this.getVideoList();
  }

  getVideoList() {
    this.videoService.getVideo().
    subscribe( p => {
      console.log(p);
      this.videoList = p;
    }, error => {
      console.log('error: coouldnot found !');
    });
  }
  onAdd(content) {
    this.modalService.open(content);
    this.intializeProperty();
  }

  onSave() {
    this.videoService.postVideo(this.videoModel)
    .subscribe(p => {
    }, error => { console.log(error); } );
  }

  intializeProperty(): IVideo {
        return {
            title:  '',
            runningTime: '',
            genre: '',
            rating: '',
            director: '',
            status: ''
        };
    }
}
