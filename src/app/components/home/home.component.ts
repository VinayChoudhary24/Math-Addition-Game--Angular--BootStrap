import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
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
  totalTime: number;
  numSolutions: number;
  averageTime: number;
  timer: any;

  constructor( ) {
    this.numSolutions = 0;
    this.totalTime = 0;
    this.averageTime = 0;
  }
  
  // When the Component is Loaded 
  ngOnInit() {
    this.generateEquation();
    this.startTimer();
    this.isCorrect = false;
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  // we generate a new random addition equation and reset the appropriate variables.
  generateEquation() {
    this.randomValue1 = Math.floor(Math.random() * 10);
    this.randomValue2 = Math.floor(Math.random() * 10);
    this.sum = this.randomValue1 + this.randomValue2;
    this.isCorrect = false;
    this.userSum = "";
    this.numSolutions++;
  }

  // we start a timer that updates the averageTime variable every second.
  startTimer() {
    this.startTime = Date.now();
    this.timer = setInterval(() => {
      this.averageTime = +(this.totalTime / this.numSolutions).toFixed(1);
    }, 1000);
  }

  // we stop the timer when the component is destroyed.
  stopTimer() {
    clearInterval(this.timer);
  }

  // we check if the user's answer is correct or not. If it's correct, we set the isCorrect variable to true, calculate the time taken to solve the Equation
  checkAnswer() {
    if (+this.userSum === this.sum) {
      this.isCorrect = true;
      this.totalTime += (Date.now() - this.startTime)/ 1000;
      setTimeout(() => {
        this.generateEquation();
        this.startTimer();
      }, 1000);
    } else {
      this.isCorrect = false;
    }
  }
}