import { Component, OnInit, ViewEncapsulation, Pipe } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IVideo } from './video';
import { Videoservices } from './videoservices';
import { ICustomer } from '../customer/customer';
import { Customerservice } from '../customer/customerservice';
import { AuthguardGuard } from '../authguard.guard';

@Pipe({
  name: 'filters',
  pure: false
})

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

  private modelTitle: string ;
  private saveButton: string;
  private id: string = '' ;
  private title: string = '';
  private runningTime: string = '';
  private genre: string = '';
  private rating: string = '';
  private director: string = '';
  private status: string = '';

  videoList: IVideo[];
  customerList: ICustomer[];
  
  constructor(private modalService: NgbModal,
    private videoService: Videoservices,
    private autoguard: AuthguardGuard,
    private customerService: Customerservice 
    ) { }

  ngOnInit() {
    this.getVideoList();
     if (!this.autoguard.isLoged){
     this.getCustomerList();
    }
  }

  getCustomerList() {
    this.customerService.getCustomer().
    subscribe( p => {
      this.customerList = p;
    }, error => {
      console.log('error: could not found !');
    });
  }

  getVideoList() {
    this.videoService.getVideo().
    subscribe( p => {
      this.videoList = p;
    }, (error) => {
      console.log('error: could not find !' + JSON.stringify(error));
    });
  }
  onOpenModal(content, data, modelTitle, saveButton) {
    this.modelTitle = modelTitle;
    this.saveButton = saveButton;
    this.modalService.open(content);
    this.onClear();
    data != null ? this.onDataBind(data) : this.onClear();
  }
  onSave() {
      if (this.id === '') {
      this.videoService.postVideo(this.getDataBind())
      .subscribe(p => {
        this.modalService.dismissAll();
        this.getVideoList();
      }, error => { console.log(error); });
    } else{
      this.videoService.putVideo(this.getDataBind(), this.id)
      .subscribe(data => {
        this.modalService.dismissAll();
        this.videoList.forEach((t, i) => {
          if (t._id === this.id) { this.videoList[i] = data; }
        });

        }, error => { console.log(error); }
      );
    }
  }
  onDelete(id) {
    this.videoService.deleteVideo(id)
    .subscribe(p => {
      this.videoList.forEach((t, i) => {
        if (t._id === id) { this.videoList.splice(i, 1); }
      });
    }, error => { console.log(error); } );
  }

  onDataBind(data) {
    this.title = data.title;
    this.id = data._id;
    this.runningTime = data.runningTime ;
    this.genre = data.genre;
    this.rating = data.rating;
    this.director = data.director;
    this.status = data.status;
  }

  getDataBind(): any {
    return {
      title: this.title,
      runningTime: this.runningTime,
      genre: this.genre,
      rating: this.rating,
      director: this.director,
      status: this.saveButton === 'Reserved' ? 'Unavailable' : this.status
    };
  }

  onClear() {
    this.title = '';
    this.id = '';
    this.runningTime = '';
    this.genre = '';
    this.rating = '';
    this.director = '';
    this.status = '';
  }
}
