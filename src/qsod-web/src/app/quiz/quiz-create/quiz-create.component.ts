import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quiz, QuizType } from 'src/app/models/quiz';
import { Question } from 'src/app/models/question';
import { Tag, Difficulty } from 'src/app/models/types';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountService } from 'src/app/services/account.service';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent implements OnInit {
  
  private isEditMode: boolean;

  quiz: Quiz = new Quiz();
  questions: Question[] = [];

  private unselectedTagsStore: Tag[] = [];
  private selectedTagsStore: Tag[] = [];
  private _unselectedTags: BehaviorSubject<Tag[]> = new BehaviorSubject(this.unselectedTagsStore);
  private _selectedTags: BehaviorSubject<Tag[]> = new BehaviorSubject(this.selectedTagsStore);

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private snackBar: MatSnackBar,
    private accountService: AccountService,
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {

    this.quizService.tags.subscribe(tags => this.unselectedTagsStore = tags);
    this._unselectedTags.next(this.unselectedTagsStore);

    this.route.paramMap.subscribe(params => {
      console.log(`isEditMode: ${params.get('isEditMode')}`);

      this.isEditMode = JSON.parse(params.get('isEditMode'));

      if (this.isEditMode) {
        this.quiz = this.dataService.quiz;
        
        this.quiz.tags.forEach(tag => {
          let i = this.unselectedTagsStore.findIndex(t => t === tag);
          this.unselectedTagsStore.splice(i, 1);
          this.selectedTagsStore.push(tag);
        })
        this._unselectedTags.next(this.unselectedTagsStore);
        this._selectedTags.next(this.selectedTagsStore);

        this.quizService.getQuestions(this.quiz)
          .then(questions => 
            this.questions = questions);
        // this.quiz.questionIDs.forEach(_ => this.questions.push(Question.getDefault()));
      }
    });

    
  }

  get unselectedTags(): Observable<Tag[]> {
    return this._unselectedTags.asObservable();
  }

  get selectedTags(): Observable<Tag[]> {
    return this._selectedTags.asObservable();
  }

  addTag(tag: Tag) {
    if (tag == 'None') {
      return;
    }
    let index = this.unselectedTagsStore.indexOf(tag);
    if (index > -1) {
      this.unselectedTagsStore.splice(index, 1);
      this._unselectedTags.next(this.unselectedTagsStore);
      
      this.selectedTagsStore.push(tag);
      this._selectedTags.next(this.selectedTagsStore);
    }
  }

  removeTag(tag: Tag) {
    if (tag == 'None') {
      return;
    }
    let index = this.selectedTagsStore.indexOf(tag);

    this.selectedTagsStore.splice(index, 1);
    this._selectedTags.next(this.selectedTagsStore);

    this.unselectedTagsStore.push(tag);
    this._unselectedTags.next(this.unselectedTagsStore);
  }

  onAddNewQuestion() {
    this.questions.push(new Question(0));

    console.log(this.questions);
  }

  onRemoveQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  onSubmit() {
    if (this.isEditMode) {
      this.onEditQuiz();
    } else {
      this.onCreateQuiz();
    }
  }

  onEditQuiz() {
    if (this.checkValidity()) {
      console.log('editing quiz: ', this.quiz);
      console.log(this.questions);

      let tags = this.selectedTagsStore;

      this.quizService.updateQuiz(
        this.quiz.id,
        this.accountService.getID(),
        this.quiz.title,
        tags,
        600,
        this.quiz.difficulty,
        this.questions
      )

      this.router.navigate(['/main']);
    }
  }

  onCreateQuiz() {
    console.log(this.quiz);
    console.log(this.questions);

    if (this.checkValidity()) {
      let tags = this.selectedTagsStore;
  
      this.quizService.createQuiz(
        this.accountService.getID(),
        this.quiz.title,
        tags,
        600,
        this.quiz.difficulty,
        this.questions
      );
  
      this.router.navigate(['/main']);
    }
  }

  private checkValidity(): boolean {
    if (this.quiz.title === '') {
      this.showError('title is empty');
      return false;
    }

    if (this.questions.length <= 0) {
      this.showError('at least one question!')
      return false;
    }
    
    for (let question of this.questions) {
      if (question.description === '') {
        this.showError('question description is empty');
        return false;
      }
      if (question.correctOptions === [false, false, false, false]) {
        this.showError('question must have a correct answer');
        return false;
      }
      for (let opt of question.options) {
        if (opt === '') {
          this.showError('question option can\'t be empty');
          return false;
        }
      }
    }

    return true;
  }

  private showError(msg: string) {
    this.snackBar.open(msg, 'close', { duration: 2000 });
  }

  // https://stackoverflow.com/questions/42322968/angular2-dynamic-input-field-lose-focus-when-input-changes
  trackByFn(index: any, item: any) {
    return index;
  }
}
