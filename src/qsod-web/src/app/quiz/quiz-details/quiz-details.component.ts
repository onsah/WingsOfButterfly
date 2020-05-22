import { Component, OnInit, Inject } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Difficulty } from 'src/app/models/types';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<QuizDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public quiz: Quiz
  ) {

  }

  ngOnInit(): void {
    
  }

  difficultyToString(diff: Difficulty) {
    switch (diff) {
      case Difficulty.Easy:
        return "Easy";
      case Difficulty.Medium:
        return "Medium";
      case Difficulty.Hard:
        return "Hard";
    }
  }
}
