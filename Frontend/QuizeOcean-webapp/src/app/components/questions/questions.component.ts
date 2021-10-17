import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public questions:any;
  public viewMode:string='';
  public answers:Boolean[] = [];
  public results:Boolean[] = [];

  constructor(private dataSrv:QuestionService, private router:Router) { }


  ngOnInit(): void {
    this.getQuestions();
  }

  public getQuestions() {
    this.dataSrv.getQuestions().subscribe(
      (res) => {
        this.questions = res;
        //console.log(this.questions);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  public submit(answerForm: any) {
    for (let key in answerForm.value) {
      let value = answerForm.value[key];
      if (value == 'true') {
        this.answers.push(true);
      }
      else {
        this.answers.push(false);
      }
    }

    for (let i = 0; i < this.questions.length; i++) {
      this.results.push(this.answers[i] == this.questions[i]["questionAnswer"]);
    }

    this.goToReview();
     
    // this.answers = answerForm.value;
    // for (var i = 0; i < this.questions.length; i++) {
    //   this.results.push(Boolean(this.answers[i]).valueOf() == Boolean(this.questions[i]["questionAnswer"]).valueOf());
    // }
    // console.log(this.results);
    // console.log(this.answers);
    // console.log('Form Submited', answerForm);
    //console.log('Form Submited', answerForm.value);
  }

  public goToReview():void {
    this.router.navigate(['/review'], {state: {results: this.results, questions: this.questions, answers:this.answers}});
  }

}
