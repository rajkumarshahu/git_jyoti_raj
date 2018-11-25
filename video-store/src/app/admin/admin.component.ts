import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class AdminComponent implements OnInit {

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

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  onAdd(content) {this.modalService.open(content); }

  onUpdate(contentUpdate) {this.modalService.open(contentUpdate); }

  onDelete(contentDelete) {this.modalService.open(contentDelete); }

}
