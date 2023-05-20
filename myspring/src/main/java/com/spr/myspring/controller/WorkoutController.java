package com.spr.myspring.controller;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spr.myspring.model.Workout;
import com.spr.myspring.repository.WorkoutRepository;


@RestController
@RequestMapping("/workouts")
public class WorkoutController {

    @Autowired
    private WorkoutRepository workoutRepository;

    @GetMapping("/{id}")
    public Optional<Workout> retrieveAllWorkoutforSpecificUser(@PathVariable UUID id) {
        return workoutRepository.findById(id);
    }

    
    @GetMapping("/{id}/exercises")
    public ResponseEntity<Workout> retrieveAllExcercisesforSpecificWorkout(@PathVariable UUID id) {
        ResponseEntity<Workout> r = new ResponseEntity<Workout>(null, null, 0);
        return r;
    }

}
