package com.spr.myspring.controller;

import com.spr.myspring.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.spr.myspring.model.User;

@RestController
@RequestMapping("/")
@CrossOrigin(origins ="http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser == null) {
            userRepository.save(user);
            return ResponseEntity.ok("Registration Sucessfull");
        } else {
            return ResponseEntity.badRequest().body("User Already Exist!");
        }       
    }
// we can use email here

    @PostMapping("/user/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("Login Successfull!");
        } else {
            return ResponseEntity.badRequest().body("Invalid username or password.");            
        }
    }


    @GetMapping("/users")
    public Iterable<User> retrieveAllUsers() {
        //retrieve all users; check the return type too
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = userRepository.getUserById(id);        
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }    
}
