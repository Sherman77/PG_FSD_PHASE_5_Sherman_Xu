package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.model.Question;
import com.repository.QuestionRepository;

@RestController
@RequestMapping("questions")
public class QuestionController {
	
	@Autowired
	QuestionRepository questionRepository;
	
	//Get all questions
	@GetMapping("all")
	public List<Question> getAllQuestions() {
		List<Question> questions = (List<Question>) questionRepository.findAll();
		return questions;
	}
}
