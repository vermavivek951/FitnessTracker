package com.spr.myspring.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.spr.myspring.model.User;
import com.spr.myspring.model.Workout;
import com.spr.myspring.repository.UserRepository;
import com.spr.myspring.repository.WorkoutRepository;

@RestController
@RequestMapping("/")
// @CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private WorkoutRepository workoutRepository;

    @PostMapping("/user/register")
    public ResponseEntity<Map<String, String>> registerUser(@RequestBody User user) {
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
            if (passwordMatches == true) {
                response.put("message", "Login Successful");
                return ResponseEntity.ok(response);
            } else {
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
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUser(@PathVariable UUID id) {
        User user = userRepository.getUserById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/users/{idd}")
    public ResponseEntity<?> updateUser(@PathVariable("idd") UUID idd, @RequestBody User user) {
        user.setId(idd);
        userRepository.save(user);
        return ResponseEntity.ok().build();

    }

    @PostMapping("/user/{id}/workouts")
    public Workout addWorkout(@PathVariable("id") UUID id, @RequestBody Workout workout) {
        workout.setUser_id(id);
        return workoutRepository.save(workout);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> fileUpload(@PathVariable("id") UUID id, @RequestParam("file") MultipartFile file)
            throws IOException {
        User user = userRepository.findById(id).orElseThrow();
        user.setContent(file.getBytes());
        // System.out.println(file.getBytes());
        userRepository.save(user);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

}
