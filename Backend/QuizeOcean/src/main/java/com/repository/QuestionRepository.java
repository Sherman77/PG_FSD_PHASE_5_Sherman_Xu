package com.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.model.Question;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Integer>{

}
