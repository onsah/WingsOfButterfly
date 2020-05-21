import { Component, OnInit, Inject } from '@angular/core';
import { Question, Option } from 'src/app/models/question';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Helper } from 'src/app/utility/helper';

@Component({
  selector: 'app-question-trial-dialog',
  templateUrl: './question-trial-dialog.component.html',
  styleUrls: ['./question-trial-dialog.component.css']
})
export class QuestionTrialDialogComponent implements OnInit {
  correctOptions = [false, true, false, false];
  selectedOptions = [false, false, true, false];

  constructor(
    public dialogRef: MatDialogRef<QuestionTrialDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: {
      question: Question,
      questionIndex: number,
      choosenOption: Option,
    },
  ) { }

  get question() { return this.dialogData.question };
  get questionIndex() { return this.dialogData.questionIndex };
  get choosenOption() { return this.dialogData.choosenOption };

  ngOnInit(): void {
    if (this.choosenOption === Option.A) {
      this.selectedOptions[0] = true;
    } else if (this.choosenOption === Option.B) {
      this.selectedOptions[1] = true;
    } else if (this.choosenOption === Option.C) {
      this.selectedOptions[2] = true;
    } else if (this.choosenOption === Option.D) {
      this.selectedOptions[3] = true;
    }

    if (Helper.arrayToOption(this.question.correctOptions) === Option.A) {
      this.correctOptions[0] = true;
    } else if (Helper.arrayToOption(this.question.correctOptions) === Option.B) {
      this.correctOptions[1] = true;
    } else if (Helper.arrayToOption(this.question.correctOptions) === Option.C) {
      this.correctOptions[2] = true;
    } else if (Helper.arrayToOption(this.question.correctOptions) === Option.D) {
      this.correctOptions[3] = true;
    }
  }
}
