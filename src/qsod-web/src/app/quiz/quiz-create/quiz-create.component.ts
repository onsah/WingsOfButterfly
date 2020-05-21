import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';
import { Question } from 'src/app/models/question';
import { Tag } from 'src/app/models/types';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent implements OnInit {
  
  private isEditMode: boolean;

  quiz: Quiz;
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
    });

    this.quiz = Quiz.getDefault();
    this.quiz.questionIDs.forEach(_ => this.questions.push(Question.getDefault()));
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
}
