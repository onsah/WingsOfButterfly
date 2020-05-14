import { Component, OnInit } from '@angular/core';
import { Quiz, QuizType } from 'src/app/models/quiz';
import { Difficulty, Tag } from 'src/app/models/types';
import { Observable, BehaviorSubject } from 'rxjs';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  selectedSelectedTag: Tag;
  selectedUnselectedTag: Tag;

  private unselectedTagsStore: Tag[] = [];
  private selectedTagsStore: Tag[] = [];
  private _unselectedTags: BehaviorSubject<Tag[]> = new BehaviorSubject(this.unselectedTagsStore);
  private _selectedTags: BehaviorSubject<Tag[]> = new BehaviorSubject(this.selectedTagsStore);
  
  constructor(
    public quizService: QuizService
  ) { 
    this.unselectedTagsStore = quizService.tags;
    this._unselectedTags.next(this.unselectedTagsStore);
  }

  get unselectedTags(): Observable<Tag[]> {
    return this._unselectedTags.asObservable();
  }

  get selectedTags(): Observable<Tag[]> {
    return this._selectedTags.asObservable();
  }

  ngOnInit(): void {
  }

  selectTag(tag: Tag): boolean {
    console.log(`selecting ${tag}`);
    let index = this.unselectedTagsStore.indexOf(tag);
    if (index > -1) {
      this.unselectedTagsStore.splice(index, 1);
      this._unselectedTags.next(this.unselectedTagsStore);
      this.selectedUnselectedTag = '';
      
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
      this.selectedSelectedTag = '';
      
      this.unselectedTagsStore.push(tag);
      this._unselectedTags.next(this.unselectedTagsStore);

      return true;
    } else {
      return false;
    }
  }

  addQuiz = () => { this.quizService.addQuiz(Quiz.getDefault()); }
}
