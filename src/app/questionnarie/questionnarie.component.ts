import { BoundElementProperty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {Question} from '../question'

@Component({
  selector: 'app-questionnarie',
  templateUrl: './questionnarie.component.html',
  styleUrls: ['./questionnarie.component.css']
})
export class QuestionnarieComponent implements OnInit {

  questions: Question[] = [];

  title: string;
  o1: string;
  o2: string;
  o3: string;
  o4: string;
  right1: boolean = false;
  right2: boolean = false;
  right3: boolean = false;
  right4: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.questions = JSON.parse(localStorage.getItem("quiz"));
  }

  addQuestion() {
    var q: Question = 
    {
      title: this.title, 
      o1: this.o1, 
      o2: this.o2, 
      o3: this.o3, 
      o4: this.o4, 
      right1: this.right1, 
      right2: this.right2, 
      right3: this.right3, 
      right4: this.right4, 
      checked1: false, 
      checked2: false, 
      checked3: false, 
      checked4: false
    };      
    this.questions.push(q);
  }

  saveQuestionnaire(){
    localStorage.setItem("quiz", JSON.stringify(this.questions));
    console.log(JSON.stringify(this.questions));
  }

  deleteQuestion(title: string){
    var ind = 0;
    for (let index = 0; index < this.questions.length; index++){ 
      if (this.questions[index].title === title){
        ind = index;
        break;
      }
    }
    this.questions.splice(ind, 1);
    console.log(this.questions);
  }
}
