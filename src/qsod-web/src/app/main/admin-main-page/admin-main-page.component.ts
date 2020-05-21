import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';
import { Tag } from 'src/app/models/types';
import { Observable, BehaviorSubject } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data-service.service';
import { QuizDetailsComponent } from 'src/app/quiz/quiz-details/quiz-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.css']
})
export class AdminMainPageComponent implements OnInit {
  selectedSelectedTag: Tag;
  selectedUnselectedTag: Tag;

  private unselectedTagsStore: Tag[] = [];
  private selectedTagsStore: Tag[] = [];
  private _unselectedTags: BehaviorSubject<Tag[]> = new BehaviorSubject(this.unselectedTagsStore);
  private _selectedTags: BehaviorSubject<Tag[]> = new BehaviorSubject(this.selectedTagsStore);
  public searchText: string = '';
  
  constructor(
    public quizService: QuizService,
    private router: Router,
    private dataService: DataService,
    private dialog: MatDialog,
  ) { 
    quizService.tags.subscribe(tags => {
      this.unselectedTagsStore = tags
      this._unselectedTags.next(this.unselectedTagsStore);
    });
  }

  get unselectedTags(): Observable<Tag[]> {
    return this._unselectedTags.asObservable();
  }

  get selectedTags(): Observable<Tag[]> {
    return this._selectedTags.asObservable();
  }

  ngOnInit(): void {
    // Automatically filters by tags when selected tag changes
    this.selectedTags.subscribe(_ => this.filter());

    // this.quizService.loadQuizzes();
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

  addQuiz = () => { this.quizService.addQuiz(Quiz.getDefault()); }

  onEditQuiz(quiz: Quiz) {
    this.dataService.quiz = quiz;

    this.router.navigate(['quiz-admin', 'true']);
  }

  filter() {
    console.log(`search text: ${this.searchText}`);
    console.log(`tags: ${this.selectedTagsStore}`);
    // Filter quizzes both by tag and text
    this.quizService.receiveQuizzes({ tags: this.selectedTagsStore, searchText: this.searchText });
  }
}
