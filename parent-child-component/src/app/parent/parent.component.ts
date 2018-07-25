import { Component, OnInit } from '@angular/core';
import { PERSONS } from '../data';
import { Person } from '../person';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  persons: Person[];
  person: Person;
  constructor() { }

  ngOnInit() {
    this.persons = PERSONS;
  }

  selectedPerson(person: Person) {
    this.person = person;
  }
}
