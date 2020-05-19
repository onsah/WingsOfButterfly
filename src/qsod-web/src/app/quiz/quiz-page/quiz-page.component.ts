import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { Question, Option } from 'src/app/models/question';
import { Difficulty } from 'src/app/models/types';
import { DataService } from 'src/app/services/data-service.service';
import { MatTabGroup } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  @ViewChild('tabGroup')
  tabGroupRef: MatTabGroup;
  currentOptions = [
    false,
    false,
    false,
    false,
  ];

  quiz: Quiz;
  questions: Question[] = [
    Question.getDefault(),
  ];
  selectedOptions: Option[];

  constructor( 
    private dataService: DataService,
    private snackBar: MatSnackBar,
  ) {
    this.quiz = dataService.quiz;

    dataService.requestQuestions()
      .then(questions => {
        this.questions = questions;
        this.selectedOptions = new Array<Option>(questions.length);
      });
  }

  ngOnInit(): void {
  }

  onNextQuestion() {
    
    let anyOptionSelected = this.currentOptions.reduce((a, b) => a || b); 
    if (anyOptionSelected) {
      // TODO: check if anything is selected
      this.selectedOptions[this.currentTabIndex] = this.optionFromBooleanArray(this.currentOptions);
      console.log(`selected option: ${this.selectedOptions[this.currentTabIndex]}`);
  
      // Unselect options
      this.currentOptions = [false, false, false, false];

      if (this.isLastPage()) {
        console.log(`Quiz finished: ${this.selectedOptions}`);
      } else {
        this.nextTab();
      }
  
    } else {
      this.snackBar.open('You should select at least one option!', 'Okay', { duration: 20000 });
    }
  }

  private get currentTabIndex() {
    return this.tabGroupRef.selectedIndex;
  }

  private set currentTabIndex(index: number) {
    this.tabGroupRef.selectedIndex = index;
  }

  private isLastPage = () => this.currentTabIndex === this.questions.length - 1;

  private nextTab() {
    let i = this.currentTabIndex;
    this.currentTabIndex = i + 1;
  }

  private optionFromBooleanArray(options: boolean[]): Option {
    if (options[0]) {
      if (options[1]) {
        if (options[2]) {
          if (options[3]) {
            return Option.ABCD;
          } else {
            return Option.ABC;
          }
        } else {
          if (options[3]) {
            return Option.ABD;
          } else {
            return Option.AB;
          }
        }
      } else {
        if (options[2]) {
          if (options[3]) {
            return Option.ACD;
          } else {
            return Option.AC;
          }
        } else {
          if (options[3]) {
            return Option.AD;
          } else {
            return Option.A;
          }
        }
      }
    } else {
      if (options[1]) {
        if (options[2]) {
          if (options[3]) {
            return Option.BCD;
          } else {
            return Option.BC;
          }
        } else {
          if (options[3]) {
            return Option.BD;
          } else {
            return Option.B;
          }
        }
      } else {
        if (options[2]) {
          if (options[3]) {
            return Option.CD;
          } else {
            return Option.C;
          }
        } else {
          if (options[3]) {
            return Option.D;
          } else {
            throw new Error('Must have choosen something');
          }
        }
      }
    }
  }
}
