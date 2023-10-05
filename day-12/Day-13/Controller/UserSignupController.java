package com.nandha.meow.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


//import com.food.Entity.UserSignup;
import com.nandha.meow.Entity.UserSignupEntity;
//
//import com.food.Entity.UserSignup;
//import com.food.Repository.UserSignupRepository;
import com.nandha.meow.Repository.UserRepository;
//import com.nandha.meow.Service.UserService;


@RestController
@CrossOrigin
@RequestMapping("/usersignup")
public class UserSignupController {

	@Autowired UserRepository repo;
//	@Autowired
//	UserService ser;
	@PostMapping("/post")
	private UserSignupEntity PostUser(@RequestBody UserSignupEntity s){
		return repo.save(s);
	}
	@GetMapping("/get")
	private Iterable<UserSignupEntity> GetUsers(){
		return repo.findAll();
	}

}
