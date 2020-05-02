import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  readonly QUOTES = [
    'böyle uygulama görmedim!',
    'Buraya gelmeden önce programlama bilmiyordum, şimdi Apple\'da kod yazıyorum',
    'quote3',
    'quote4',
    'quote5',
    'quote6',
    'quote7',
  ];
  
  constructor(private snackBar: MatSnackBar) { }

  showMessage(message: string): void {
    this.snackBar.open(message, 'close', { duration: 2000 });
  }
}