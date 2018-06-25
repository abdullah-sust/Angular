import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidationDirective } from './custom-validation.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C-", "D", "E", "F" ];
  sessions = [ 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990];
  subjects = ["CSE", "EEE", "PHY", "CHE", "MAT", "IPE", "TEX", "ENG", "BAN", "ECO", "SCO", "SAT", "PSY", "HIS", "BIO"];

  userForm = new FormGroup({
    name: new FormControl('John', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
    email: new FormControl('example@mail.com',[Validators.required,Validators.pattern('^[a-zA-Z]*@[a-z]*[.][a-z]*')]),
    password1: new FormControl('12345678', [Validators.required,Validators.minLength(8)]),
    password2: new FormControl('12345678', [Validators.required, Validators.minLength(8)]),
    birthDate: new FormControl('1994-08-07', [Validators.required]),
    address: new FormGroup({
      street: new FormControl('Gainesville', [Validators.required]),
      city: new FormControl('Florida', [Validators.required]),
      postalCode: new FormControl('4335', [Validators.required])
    }),
    ssc: new FormGroup({
      sscGrade: new FormControl(null, [Validators.required]),
      sscSession: new FormControl(null, [Validators.required])
    }),
    hsc: new FormGroup({
      hscGrade: new FormControl(null, [Validators.required]),
      hscSession: new FormControl(null, [Validators.required])
    }),
    graduation: new FormGroup({
      graduationGrade: new FormControl(null, [Validators.required]),
      graduationSubject: new FormControl(null, [Validators.required]),
      graduationSession: new FormControl(null, [Validators.required])
    })
  });

  onSubmit() {
    console.log(this.userForm.value);
  }

}
