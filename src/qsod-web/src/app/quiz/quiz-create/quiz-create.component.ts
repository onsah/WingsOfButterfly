import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent implements OnInit {

  private isEditMode: boolean;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log(`isEditMode: ${params.get('isEditMode')}`);

      this.isEditMode = JSON.parse(params.get('isEditMode'));
    })
  }
}
