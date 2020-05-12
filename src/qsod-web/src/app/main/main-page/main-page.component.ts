import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  SelectedTags: string[] = [];
  
  Quizzes: Quiz[] = [
    {
      title: "Database",
      tags: [ "SQL", "Algorithms" ],
      questions: [ ],
    },
    {
      title: "Database",
      tags: [ "SQL", "Algorithms" ],
      questions: [ ],
    },
    {
      title: "Database",
      tags: [ "SQL", "Algorithms" ],
      questions: [ ],
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
