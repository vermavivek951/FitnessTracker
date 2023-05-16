// package com.spr.myspring.controller;

// import java.util.UUID;

// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.spr.myspring.model.Workout;


// @RestController
// @RequestMapping("/workouts")
// public class WorkoutController {

//     @GetMapping("/{id}")
//     public ResponseEntity<Workout> retrieveAllWorkoutforSpecificUser(@PathVariable UUID id) {
//         ResponseEntity<Workout> r = new ResponseEntity<Workout>(null, null, 0);
//         return r;
//     }

    
//     @GetMapping("/{id}/exercises")
//     public ResponseEntity<Workout> retrieveAllExcercisesforSpecificWorkout(@PathVariable UUID id) {
//         ResponseEntity<Workout> r = new ResponseEntity<Workout>(null, null, 0);
//         return r;
//     }

// }
