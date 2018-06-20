import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  date: string;
  grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C-", "D", "E", "F" ];
  sessions = [ 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990];
  subjects = ["CSE", "EEE", "PHY", "CHE", "MAT", "IPE", "TEX", "ENG", "BAN", "ECO", "SCO", "SAT", "PSY", "HIS", "BIO"];
  onSubmit(value: any) {
   console.log(value);
    // console.log(value.ssc.sscGrade)
  }
}
