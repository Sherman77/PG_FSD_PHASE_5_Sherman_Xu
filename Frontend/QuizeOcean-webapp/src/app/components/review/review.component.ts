import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  public questions:any;
  public answers:Boolean[] = [];
  public results:Boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    this.questions = history.state.questions;
    this.answers = history.state.answers;
    this.results = history.state.results;
    this.helper();
  }

  public helper() {
    console.log(this.questions);
    console.log(this.answers);
    console.log(this.results);
  }
}
