package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exceptionhandling.LoginFailedException;
import com.model.User;
import com.model.UserPostBody;
import com.repository.UserRepository;

@RestController
@RequestMapping("users")
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	//Login
	@PostMapping("login")
	public User login(@RequestBody UserPostBody userPostBody) throws LoginFailedException {
		
		String email = userPostBody.getEmail();
		String password = userPostBody.getPassword();
		
		List<User> list = userRepository.getUserByEmail(email);
		if (list == null || list.size() == 0) {
			throw new LoginFailedException("Email not found.");
		}
		
		User user = list.get(0);
//		System.out.println(password);
//		System.out.println(user.getPassword());
//		System.out.println(password.equals(user.getPassword()));
		if (!user.getPassword().equals(password)) {
			throw new LoginFailedException("Incorrect password.");
		}
		
		return user;
	}
	
	//Register a new user
	@PostMapping("add")
	public User addUser(@RequestBody User user) {
		return userRepository.save(user);
	}

}
