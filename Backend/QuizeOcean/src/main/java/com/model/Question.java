package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "questions")
public class Question {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "question_id")
	private int questionId;
	
	@Column(name = "question_body")
	private String questionBody;
	
	@Column(name = "question_answer")
	private boolean questionAnswer;

	public int getQuestionId() {
		return questionId;
	}

	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	public String getQuestionBody() {
		return questionBody;
	}

	public void setQuestionBody(String questionBody) {
		this.questionBody = questionBody;
	}

	public boolean isQuestionAnswer() {
		return questionAnswer;
	}

	public void setQuestionAnswer(boolean questionAnswer) {
		this.questionAnswer = questionAnswer;
	}
	

}
