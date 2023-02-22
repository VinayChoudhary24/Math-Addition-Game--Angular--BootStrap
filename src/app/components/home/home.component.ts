import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   // Store the randomValues of Functions
   randomValue1: number = 0;
   randomValue2: number = 0;
 
   // Store the Sum of Numbers
   sum: number = 0;
 
   // Take the User Answer
   userSum: string = "";
 
   // Check for the Correct or Wrong Answer
   isCorrect: boolean = false;

  // To Calculate the Time of User
  startTime: number = 0;
  endTime: number = 0;
  averageTime: number = 0;
  times: number[] = [];

  constructor( ) {}
  
  // When the Component is Loaded 
  ngOnInit() {
    this.generateEquation();
    this.isCorrect = false;
  }

  //  we generate a new math addition equation, clear the user's answer, and reset the isCorrect and isWrong variables.
  generateEquation() {
    this.randomValue1 = Math.floor(Math.random() * 10);
    this.randomValue2 = Math.floor(Math.random() * 10);
    this.sum = this.randomValue1 + this.randomValue2;
    this.isCorrect = false;
    this.userSum = "";
  }

  // we check if the user's answer is correct or not. If it's correct, we set the isCorrect variable to true, calculate the time taken to solve the Equation
  checkAnswer() {
    this.endTime = Date.now();
    const timeTaken = (this.endTime - this.startTime) / 1000;
    this.times.push(timeTaken);
    this.averageTime = this.times.reduce((a, b) => a + b, 0) / this.times.length;
    if (+this.userSum === this.sum) {
      this.isCorrect = true;
      setTimeout(() => {
        this.generateEquation();
      }, 1000);
    } else {
      this.startTime = Date.now();
    }
  }
}