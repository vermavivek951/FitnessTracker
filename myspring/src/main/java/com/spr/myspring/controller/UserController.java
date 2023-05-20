package com.spr.myspring.controller;

import com.spr.myspring.repository.UserRepository;
import com.spr.myspring.repository.WorkoutRepository;

import java.util.HashMap;
import java.util.Map;

import org.mindrot.jbcrypt.BCrypt;
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
import com.spr.myspring.model.Workout;

/*
 * import org.mindrot.jbcrypt.BCrypt;

public class PasswordHashingExample {
    public static void main(String[] args) {
        String password = "myPassword123";
        String hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
        
        // Store the hashed password in your database
        System.out.println("Hashed Password: " + hashedPassword);
    }
}

 */

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private WorkoutRepository workoutRepository;

    @PostMapping("/user/register")
    public ResponseEntity<Map<String,String>> registerUser(@RequestBody User user) {
        User existingUser = userRepository.findByEmail(user.getEmail());
        Map<String, String> response = new HashMap<>();
        if (existingUser == null) {
            String hashedPassword = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
            user.setPassword(hashedPassword);
            userRepository.save(user);
            response.put("message", "Registration Sucessfull");
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "User Already Exist!");
            return ResponseEntity.badRequest().body(response);
        }
    }


    @PostMapping("/user/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody User user) {
        User existingUser = userRepository.findByEmail(user.getEmail());
        Map<String, String> response = new HashMap<>();
        if (existingUser != null) {
            boolean passwordMatches = BCrypt.checkpw(user.getPassword(), existingUser.getPassword());
            if(passwordMatches==true) {
                response.put("message", "Login Successful");
                return ResponseEntity.ok(response);
            }
            else {
                response.put("message", "Invalid username or password.");
                return ResponseEntity.badRequest().body(response);
            }
            
        } else {
            response.put("message", "Invalid username or password.");
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/users")
    public Iterable<User> retrieveAllUsers() {
        // retrieve all users; check the return type too
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

    @PostMapping("/user/{id}/workouts")
    public Workout addWorkout(Workout workout) {
        return workoutRepository.save(workout);
    }


    
}
