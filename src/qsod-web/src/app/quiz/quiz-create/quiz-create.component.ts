import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz, QuizType } from 'src/app/models/quiz';
import { Question } from 'src/app/models/question';
import { Tag } from 'src/app/models/types';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  ) { }

  ngOnInit(): void {

    this.unselectedTagsStore = this.quizService.tags;
    this._unselectedTags.next(this.unselectedTagsStore);

    this.route.paramMap.subscribe(params => {
      console.log(`isEditMode: ${params.get('isEditMode')}`);

      this.isEditMode = JSON.parse(params.get('isEditMode'));

      if (this.isEditMode) {
        this.quiz = Quiz.getDefault();
        this.quiz.questionIDs.forEach(_ => this.questions.push(Question.getDefault()));
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

  onCreateQuiz() {
    console.log(this.quiz);
    console.log(this.questions);
  }

  onSubmit(form: {}) {

  }

  // https://stackoverflow.com/questions/42322968/angular2-dynamic-input-field-lose-focus-when-input-changes
  trackByFn(index: any, item: any) {
    return index;
  }
}
