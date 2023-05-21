package com.spr.myspring.controller;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spr.myspring.model.Exercise;
import com.spr.myspring.model.Workout;
import com.spr.myspring.repository.ExerciseRepository;
import com.spr.myspring.repository.WorkoutRepository;


@RestController
@RequestMapping("/workouts")
public class WorkoutController {

    @Autowired
    private WorkoutRepository workoutRepository;
    @Autowired
    private ExerciseRepository exerciseRepository;

    @GetMapping("/{id}")
    public Optional<Workout> retrieveAllWorkoutforSpecificUser(@PathVariable("id") UUID id) {
        return workoutRepository.findById(id);
    }

    
    @GetMapping("/{id}/exercises")
    public ResponseEntity<Workout> retrieveAllExcercisesforSpecificWorkout(@PathVariable("id") UUID id) {
        ResponseEntity<Workout> r = new ResponseEntity<Workout>(null, null, 0);
        return r;
    }

    @PostMapping("/{id}/exercises")
    public Exercise addExercise(@PathVariable("id") UUID id, @RequestBody Exercise exercise) {
        exercise.setWorkout_id(id);
        return exerciseRepository.save(exercise);
    }
}
