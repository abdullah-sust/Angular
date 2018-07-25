import { Injectable } from '@angular/core';
import { Person } from './person';
import { PERSONS } from './data';

@Injectable()
export class PersonService {

  constructor() { }

  getPerson(): Person[] {
    return PERSONS;
  }

}
