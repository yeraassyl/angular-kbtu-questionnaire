import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Question } from '../question';

@Component({
  selector: 'app-fillout',
  templateUrl: './fillout.component.html',
  styleUrls: ['./fillout.component.css']
})
export class FilloutComponent implements OnInit {

  quiz: Question[];
  correct: string;
  constructor() { }

  ngOnInit(): void {
    this.correct = "";
    this.quiz = JSON.parse(localStorage.getItem("quiz"));
  }

  check() {
    this.quiz.forEach(question => {
      var isCorrect: boolean = false;
      if (question.right1 === question.checked1 && 
        question.right2 === question.checked2 && 
        question.right3 === question.checked3 && 
        question.right4 === question.checked4)
      {
        isCorrect = true;
      }
      this.correct += question.title + ": " + (isCorrect === true ? "correct!": "not correct, try again") + "\n";
      console.log(question);
    })
    alert(this.correct);
  }
}
