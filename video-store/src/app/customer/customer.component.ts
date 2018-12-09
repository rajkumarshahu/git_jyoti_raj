import { Component, OnInit, Pipe} from '@angular/core';
import { ICustomer } from './customer';
import { Customerservice } from './customerservice';


@Pipe({
  name: 'filters',
  pure: false
})

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerList: ICustomer[];
  constructor(private customerService: Customerservice) { }

  ngOnInit() {
      this.getCustomerList();
  }

  applyFilter(filterValue: string) {
   // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCustomerList() {
    this.customerService.getCustomer().
    subscribe( p => {
      this.customerList = p;
    }, error => {
      console.log('error: could not find !');
    });
  }
}
