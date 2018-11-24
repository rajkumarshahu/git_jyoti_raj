import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  
  }

  onAdd(content){
    this.modalService.open(content);
  }

  onSave()
  {
  }

}
