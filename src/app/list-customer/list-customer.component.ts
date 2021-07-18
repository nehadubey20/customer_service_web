import { Component, OnInit } from '@angular/core';

export class Customer { }




@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers = [
    {
      id: 1,
      firstName: 'Neha',
      lastName: 'Dubey',
      email: 'abc@gmail.com'
    },

    {
      id: 2,
      firstName: 'Abhi',
      lastName: 'Dubey',
      email: 'ttt@gmail.com'
    },

    {
      id: 3,
      firstName: 'Arya',
      lastName: 'Jain',
      email: 'arya@gmail.com'
    },

    {
      id: 4,
      firstName: 'Ram',
      lastName: 'Joshi',
      email: 'ram@gmail.com'
    },

    {
      id: 5,
      firstName: 'Mayank',
      lastName: 'Jain',
      email: 'mayank@gmail.com'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
