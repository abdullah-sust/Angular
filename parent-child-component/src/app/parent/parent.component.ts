import { Component, OnInit } from '@angular/core';
import { PERSONS } from '../data';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  persons: Person[];
  person: Person;
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.persons = this.personService.getPerson();
  }

  selectedPerson(person: Person) {
    this.person = person;
  }
}
