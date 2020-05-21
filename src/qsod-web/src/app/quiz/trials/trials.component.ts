import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/types';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz';
import { QuizDetailsComponent } from '../quiz-details/quiz-details.component';
import { MatDialog } from '@angular/material/dialog';
import { Trial } from 'src/app/models/trial';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-trials',
  templateUrl: './trials.component.html',
  styleUrls: ['./trials.component.css']
})
export class TrialsComponent implements OnInit {
  selectedSelectedTag: Tag;
  selectedUnselectedTag: Tag;

  private unselectedTagsStore: Tag[] = [];
  private selectedTagsStore: Tag[] = [];
  private _unselectedTags: BehaviorSubject<Tag[]> = new BehaviorSubject(this.unselectedTagsStore);
  private _selectedTags: BehaviorSubject<Tag[]> = new BehaviorSubject(this.selectedTagsStore);
  public searchText: string = '';

  constructor(
    public quizService: QuizService,
    private accountService: AccountService,
    private dataService: DataService,
    private dialog: MatDialog,
    private router: Router,
  ) {
    quizService.tags.subscribe(tags => {
      this.unselectedTagsStore = tags
      this._unselectedTags.next(this.unselectedTagsStore);
    });
  }

  ngOnInit(): void {
    this.selectedTags.subscribe(_ => this.filter());

    this.quizService.updateTrials(this.accountService.getID());
  }

  selectTag(tag: Tag): boolean {
    console.log(`selecting ${tag}`);
    let index = this.unselectedTagsStore.indexOf(tag);
    if (index > -1) {
      this.unselectedTagsStore.splice(index, 1);
      this._unselectedTags.next(this.unselectedTagsStore);
      this.selectedUnselectedTag = 'None';
      this.selectedSelectedTag = 'None';
      
      this.selectedTagsStore.push(tag);
      this._selectedTags.next(this.selectedTagsStore);

      return true;
    } else {
      return false;
    }
  }

  unselectTag(tag: Tag): boolean {
    let index = this.selectedTagsStore.indexOf(tag);
    if (index > -1) {
      this.selectedTagsStore.splice(index, 1);
      this._selectedTags.next(this.selectedTagsStore);
      this.selectedSelectedTag = 'None';
      this.selectedUnselectedTag = 'None';
      
      this.unselectedTagsStore.push(tag);
      this._unselectedTags.next(this.unselectedTagsStore);

      return true;
    } else {
      return false;
    }
  }

  get unselectedTags(): Observable<Tag[]> {
    return this._unselectedTags.asObservable();
  }

  get selectedTags(): Observable<Tag[]> {
    return this._selectedTags.asObservable();
  }

  onQuizDetails(quiz: Quiz) {
    this.dialog.open(QuizDetailsComponent, { width: '250px', data: quiz });
  }

  onTrialClick(quiz: Quiz, trial: Trial) {
    console.warn('pass the trial and the quiz data to the dataService');

    this.quizService.getQuestions(quiz)
      .then(questions => {
        console.log('questions: ', questions);

        this.dataService.setAll(trial, quiz, questions);

        this.router.navigate(['quiz-trial']);
      });
  }

  filter() {
    console.log(`search text: ${this.searchText}`);
    console.log(`tags: ${this.selectedTagsStore}`);
    // Filter quizzes both by tag and text
    this.quizService.receiveQuizzesOfDev({ tags: this.selectedTagsStore, searchText: this.searchText });
  }
}
