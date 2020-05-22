import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-quiz-report-page',
  templateUrl: './quiz-report-page.component.html',
  styleUrls: ['./quiz-report-page.component.css']
})
export class QuizReportPageComponent implements OnInit {

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
  }

  get successRate() { return this.dataService.successRate; }

  get passed() { return this.dataService.passed; }
}
